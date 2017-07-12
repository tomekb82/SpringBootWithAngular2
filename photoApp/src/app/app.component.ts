import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  color = '#ff0000';
  
  conf = {
   adult: '#ff0000',
   child: '#00ff00',
   nature: '#0000ff'
  }
  
  label = "Wybierz";
  typeSelected = false;
  
  album = {
    name: 'Moje zdjęcia',
    year: 2015,
    type: 'rodzina',
    favourite: true,
  }
  
  toggleSelected(){
     this.typeSelected =! this.typeSelected;
  }
  
  setLabel(label){
    this.label = label;
    if(this.label === 'adult'){
       this.color = this.conf.adult;
    } else if(this.label === 'child'){
       this.color = this.conf.child;
    } else if(this.label === 'nature'){
       this.color = this.conf.nature;
    }
    this.toggleSelected();
  }
  

}
