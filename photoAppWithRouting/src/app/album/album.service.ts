import { Injectable, Inject, Optional } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class AlbumService {

  constructor(private http: Http, @Optional() @Inject('AlbumData') albumData) {
    this.albums = albumData === null? this.albums : albumData ;
    
    this.getPhotosRx();
  }

  albums = [ ];
  
  albumsStream = new Subject();

  save(album, callback){
    let url = `http://localhost:8080/save`;
    
    this.http.post(url, album)
    .subscribe((response:Response)=>{
      console.log("Zapisano dane.");
      this.getPhotosRx();
      callback();
    });
    
  }

searchByName(name, callback){
    let url = `http://localhost:8080/image?name=${name}`
  
    this.http.get(url)
    .subscribe((response:Response)=>{
      let albums = response.json()
      this.albums = albums;
      callback(albums)
    })
  }
  
  create(){
    var newAlbum = {
        name: '',
        year: 0,
        type: '',
        favourite: false,
    };
    return Object.assign({},newAlbum);
  }
  
  getAlbums(){
    return this.albums;
  }
  
  updateDB(callback){

    let url = `http://localhost:8080/update`
  
    this.http.get(url)
    .subscribe((response:Response)=>{
     console.log("update...");
      callback();
    });
  }
  
  getPhotos(callback){

    let url = `http://localhost:8080/images`
  
    this.http.get(url)
    .subscribe((response:Response)=>{
      let albums = response.json();   
      for(var item of albums){
        item.color =  this.getColor(item.type);
      }
      this.albums = albums;
      callback(albums);
    });
  }
  
  hexToRGB(hex, alpha) {
  
   if (hex == null){
     hex = '#000000';
   }
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}
  
  getPhotosStream(){
    return Observable
          .from(this.albumsStream)
          .startWith(this.albums)
  }
  
  getPhotosRx(){

    let url = `http://localhost:8080/images`
  
    this.http.get(url)
    .map((response:Response)=>{
      let albums = response.json();   
      for(var item of albums){
        item.color =  this.getColor(item.type);
      }
      
      return albums;
    })
    .do(albmus =>{ this.albums = albmus })
    .subscribe( albums => {
      this.albumsStream.next(this.albums)
    });
  }
  
   conf = {
   ADULT: '#F0E68C',
   CHILD: '#ADD8E6',
   NATURE: '#90EE90',
   OTHER: '#FFFFFF'
  }
  
  getColor(label){
    if(label === 'ADULT'){
       return this.conf.ADULT;
    } else if(label === 'CHILD'){
       return this.conf.CHILD;
    } else if(label === 'NATURE'){
       return this.conf.NATURE;
    }else {
        return this.conf.OTHER;
    }
  }

}
