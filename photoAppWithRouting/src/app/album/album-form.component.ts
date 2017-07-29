import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from './album.service'

@Component({
  selector: 'app-album-form',
  template: `
        <div class="card-block" *ngIf="album">
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
                        <a (click)="setType('ADULT')" class="dropdown-item" >ADULT</a>
                        <a (click)="setType('CHILD')" class="dropdown-item" >CHILD</a>
                        <a (click)="setType('NATURE')" class="dropdown-item" >NATURE</a>
                  </div>
                </div>
          </div>
          <div class="form-group">
            <label>
            <input type="checkbox" [(ngModel)]="album.favourite"> Favourite</label>
          </div>
          <ng-content></ng-content>
          <div class="form-group">
            <button class="btn btn-success float-md-right float-xs-right" (click)="save(album)">Zapisz</button>
            </div>
        </div>  
  `,
  styles: []
})
export class AlbumFormComponent implements OnInit {

  album;
  
  save(album){
    this.albumService.save(album, () => {
       this.router.navigate(['album',album.name.split('.')[0]]);
       }
    );
    
  }
  

  label = "Wybierz";
  typeSelected = false;

 conf = {
   ADULT: '#F0E68C',
   CHILD: '#ADD8E6',
   NATURE: '#90EE90'
  }

 constructor(private albumService:AlbumService,
              private activeRoute: ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
   this.label = this.album ? (this.album.type || this.label) : '';  
   
   
   /*let name = this.activeRoute.snapshot.params['name'];
    console.log(name)
    if(name){
        this.albumService.searchByName(name, album => {
        this.album = album[0];
        });
    }*/
    
    
    this.activeRoute.params.subscribe(params => {
        let name = params['name'];
        if(name){
          this.albumService.searchByName(name, album => {
                this.album = Object.assign({},album[0]);
            });
        }else{
            this.album = this.albumService.create()
        }
    
      })

    
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
