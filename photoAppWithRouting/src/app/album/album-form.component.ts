import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-album-form',
  template: `
        <div class="card-block">
          <div class="form-group">
            <label>Nazwa:</label>
            <input type="text" [(ngModel)]="album.name" class="form-control">
          </div> 
          <div class="form-group">
            <label>URL:</label>
            <input type="text" [(ngModel)]="album.url" class="form-control">
          </div>
          <div class="form-group">
            <label>Typ:</label>
             <div class="dropdown" [class.show]="typeSelected">
                  <button (click)="toggleSelected()" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {{label}}
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a (click)="setType('ADULT')" class="dropdown-item" href="#">ADULT</a>
                        <a (click)="setType('CHILD')" class="dropdown-item" href="#">CHILD</a>
                        <a (click)="setType('NATURE')" class="dropdown-item" href="#">NATURE</a>
                  </div>
                </div>
          </div>
          <div class="form-group">
            <label>
            <input type="checkbox" [(ngModel)]="album.favourite"> Favourite</label>
          </div>
          <div class="form-group">
            <button class="btn btn-success float-md-right float-xs-right" (click)="save(album)">Zapisz</button>
            </div>
        </div>  
  `,
  styles: []
})
export class AlbumFormComponent implements OnInit {

  @Input()
  album;
  
  @Output('saved')
  emitter = new EventEmitter();

  save(album){
    this.emitter.emit(album);
  }
  
  label = "Wybierz";
  typeSelected = false;

 conf = {
   ADULT: '#F0E68C',
   CHILD: '#ADD8E6',
   NATURE: '#90EE90'
  }

  constructor() {
 }

  ngOnInit() {
   this.label = this.album.type || this.label;  
  }

  toggleSelected(){
     this.typeSelected =! this.typeSelected;
  }
  
  getColor(label){
    if(label === 'ADULT'){
       return this.conf.ADULT;
    } else if(label === 'CHILD'){
       return this.conf.CHILD;
    } else if(label === 'NATURE'){
       return this.conf.NATURE;
    }
  }
  
  setType(label){
    this.label = label;
    this.album.type = label;
    this.album.color = this.getColor(label)   
    this.toggleSelected();
  }
  
}
