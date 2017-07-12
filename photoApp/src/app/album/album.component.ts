import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  selected = null;

  edited = {
    
  }
  
  mode="none";
  
  albums = [{
    name: 'Moje zdjęcia',
    year: 2015,
    type: '',
    favourite: false,
  },
  { name: 'Fotki z gór',
    year: 2012,
    type: '',
    favourite: true,
  }];
  
  
  
  save(event){
  
  }
  
  select(album){
    if(album !== this.selected){
        this.mode = "selected";
        this.selected = album;
    }
  }

  edit(album){
    this.mode = "edit";
    this.edited = album;
    this.selected = album;
  }

  createNew(){
    this.mode = "edit";
    var newPlaylist = {};
    this.selected = newPlaylist;
    this.edited = newPlaylist;
    //this.label = "Wybierz";
  }

}
