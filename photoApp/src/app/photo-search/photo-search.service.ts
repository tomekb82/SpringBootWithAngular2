import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'

@Injectable()
export class PhotoSearchService {

  photos = [ ]

  
  constructor(private http: Http) {

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
      let photos = response.json()
      this.photos = photos;
      callback(photos)
    })
  }

}
