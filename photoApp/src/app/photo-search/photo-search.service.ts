import { Injectable, Inject, Optional } from '@angular/core';
import { Http, Response } from '@angular/http'

@Injectable()
export class PhotoSearchService {

  photos = [ ]

  
  constructor(private http: Http, @Optional() @Inject('PhotoData') photoData) {
      this.photos = photoData === null ? this.photos : photoData ;
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

  getPhotos(callback){
    let url = `http://localhost:8080/images`
  
    this.http.get(url)
    .subscribe((response:Response)=>{
      let photos = response.json();
      this.photos = photos;
      callback(photos)
    })
  }
  
  getDataPhotos(){
      return this.photos;
  }

}
