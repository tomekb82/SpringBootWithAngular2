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
            <label>Rok:</label>
            <input type="number" [(ngModel)]="album.year" disabled class="form-control">
          </div>
          <div class="form-group">
            <label>Typ:</label>
             <div class="dropdown" [class.show]="typeSelected">
                  <button (click)="toggleSelected()" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {{label}}
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a (click)="setType('Dorosły')" class="dropdown-item" href="#">Dorosły</a>
                        <a (click)="setType('Dziecko')" class="dropdown-item" href="#">Dziecko</a>
                        <a (click)="setType('Natura')" class="dropdown-item" href="#">Natura</a>
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
   adult: '#F0E68C',
   child: '#ADD8E6',
   nature: '#90EE90'
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
    this.album.type = label;
    this.album.color = this.getColor(label)   
    this.toggleSelected();
  }
  
}
