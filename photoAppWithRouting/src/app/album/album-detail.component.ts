import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from './album.service'

@Component({
  selector: 'app-album-detail',
  template: `
  
  <div *ngIf="!album">
    <p>Wybierz <b>album</b>!</p>
  </div>
  <div *ngIf="album">
    <h3 class="card-title">{{album.name}}</h3>
    <div class="form-group">
      <photo-card [photo]="album" class="card"></photo-card>
      <button class="btn btn-success float-md-right float-xs-right" (click)="edit(album)">Edytuj</button>
    </div>
  </div>

  `,
  styles: []
})
export class AlbumDetailComponent implements OnInit {

  album;

  edit(album){
    this.router.navigate(['album',album.name.split('.')[0],'edit'])
  }
  
  constructor(private albumService:AlbumService,
              private activeRoute: ActivatedRoute,
              private router:Router) { 
  }

  ngOnInit() {
  
    this.activeRoute.params.subscribe(params => {
        let name = params['name'];
        if(name){
          this.albumService.searchByName(name, album => {
            this.album = album[0];
            });
        }
    });
  }
    

}
