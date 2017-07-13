import { Component, OnInit } from '@angular/core';

import { AlbumService } from './album.service'

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  constructor(private albumService:AlbumService) {

  }

  ngOnInit() {
        this.albums = this.albumService.getAlbums();
  }
  
  selected = null;

  edited = {
  }
  
  mode="none";
  
  albums = [];
  
  select(album){
    if(album !== this.selected){
        this.mode = "selected";
        this.selected = album;
    }
  }

  edit(album){
    this.mode = "edit";
    this.edited = Object.assign({},album); // kopia obiektu
    this.selected = album;
  }

  createNew(){
    this.mode = "edit";
    var newAlbum = {
        name: '',
        year: 0,
        type: '',
        favourite: false,
    };
    this.selected = newAlbum;
    this.edited = Object.assign({},newAlbum); // kopia obiektu
  }
  
  save(album){
    if(album.id){
      let index = this.albums.findIndex((old_album)=>(
        old_album.id === album.id
      ))
      this.albums.splice(index,1,album);
      this.selected = album;
      this.edited = Object.assign({},album); // kopia
    }else{
      album.id = Date.now(); // zainicjuj datą
      this.albums.push(album);
    }
  }

}
