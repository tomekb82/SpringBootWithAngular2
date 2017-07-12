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
  
  conf = {
   adult: '#F0E68C',
   child: '#ADD8E6',
   nature: '#90EE90'
  }
  
  label = "Wybierz";
  typeSelected = false;
  
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
  
  toggleSelected(){
     this.typeSelected =! this.typeSelected;
  }
  
  save(event){
  
  }
  
  getColor(label){
    if(label === 'Dorosły'){
       return this.conf.adult;
    } else if(label === 'Dziecko'){
       return this.conf.child;
    } else if(label === 'Natura'){
       return this.conf.nature;
    }
  }
  
  setType(label){
    this.label = label;
    this.selected.type = label;
    this.selected.color = this.getColor(label)   
    this.toggleSelected();
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
    this.label = "Wybierz";
  }

}
