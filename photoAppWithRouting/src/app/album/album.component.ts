import { Component, OnInit } from '@angular/core';

import { AlbumService } from './album.service';
import albumData from './album.data';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
  providers:[ // izolowane uslugi dla komponentu
    // AlbumService,
    // { provide: 'AlbumData', useValue: albumData },
  ]
})
export class AlbumComponent implements OnInit {

  constructor(private albumService:AlbumService) {

  }

  ngOnInit() {
        //this.albums = this.albumService.getAlbums();
        
      //this.albumService.getPhotos((albums)=>{
      //this.albums = albums;
      //})
      
      this.albums = this.albumService.getPhotosStream();
  }
  
  selected = null;

  edited = {
  }
  
  mode="none";
  
  albums;// = [];
  
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

  updateDB(){
    this.albumService.updateDB(()=>{
       //this.albumService.getPhotos((albums)=>{
    //         this.albums = albums;
    //        console.log("po update");
      // });
       
       this.albums = this.albumService.getPhotosStream();
    });
  }
  
  createNew(){
    this.mode = "edit";
    let newAlbum = this.albumService.create();
    this.selected = newAlbum;
    this.edited = newAlbum; 
  }
  
  save(album){
    this.albumService.save(album, ()=>{
       //this.albumService.getPhotos((albums)=>{
        //    this.albums = albums;
       //});
       this.albums = this.albumService.getPhotosStream();
    });
    this.selected = album;
    this.edited = Object.assign({},album); // kopia
  }
  

}
