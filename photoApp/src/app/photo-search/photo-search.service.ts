import { Injectable, Inject, Optional } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class PhotoSearchService {

  photos = [ ];
  
  photosStream = new Subject();

  
  constructor(private http: Http, @Optional() @Inject('PhotoData') photoData) {
      //this.photos = photoData === null ? this.photos : photoData ;
      
      this.getPhotosRx();
  }

  searchByName(name, callback){
    let url = `http://localhost:8080/image?name=${name}`
  
    this.http.get(url)
    .subscribe((response:Response)=>{
      let photos = response.json()
      this.photos = photos;
      callback(photos)
    })
  }
  
  
  searchByNameRx(name){
    let url = `http://localhost:8080/image?name=${name}`
  
    this.http.get(url)
    .map((response:Response)=>{
      return response.json();
    })
    .do(photos =>{ this.photos = photos })
    .subscribe((response:Response)=>{
      this.photosStream.next(this.photos);
      console.log(this.photos);
    });
  }

  getPhotos(callback){
    let url = `http://localhost:8080/images`
  
    this.http.get(url)
    .subscribe((response:Response)=>{
      let photos = response.json();
      this.photos = photos;
      callback(photos)
    })
  }
  
  
  getPhotosRx(){
    let url = `http://localhost:8080/images`;
  
    this.http.get(url)
    .map((response:Response)=>{
      return response.json();
    })
    .do(photos =>{ this.photos = photos })
    .subscribe((response:Response)=>{
      this.photosStream.next(this.photos);
    })
  }
  
  getPhotosStream(){
    return Observable
        .from(this.photosStream)
        .startWith(this.photos);
  }
  
  getDataPhotos(){
      return this.photos;
  }

}
