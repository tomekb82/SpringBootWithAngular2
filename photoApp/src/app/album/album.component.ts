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
    let newAlbum = this.albumService.create();
    this.selected = newAlbum;
    this.edited = newAlbum; 
  }
  
  save(album){
    this.albumService.save(album);
    this.selected = album;
    this.edited = Object.assign({},album); // kopia
  }
  

}
