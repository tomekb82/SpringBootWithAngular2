import { Injectable, Inject, Optional } from '@angular/core';

@Injectable()
export class AlbumService {

  constructor(@Optional() @Inject('AlbumData') albumData) {
    this.albums = albumData === null? this.albums : albumData ;
  }

  albums = [ ]

  save(album){
    if(album.id){
      let index = this.albums.findIndex((old_album)=>(
        old_album.id === album.id
      ))
      this.albums.splice(index,1,album);
    }else{
      album.id = Date.now(); // zainicjuj datą
      this.albums.push(album);
    }
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

}
