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
    <div class="form-group"[ngStyle] = "{background: hexToRGB(album.color, 0.8)}">
      <photo-card [photo]="album" class="card"></photo-card>
      <p class="card-text"><b>Nazwa pliku:</b> {{album.name}}</p>
      <p class="card-text"><b>Url:</b> {{album.url}}</p>
      <p class="card-text"><b>Typ:</b> {{album.type}}</p>
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

  hexToRGB(hex, alpha) {
    return this.albumService.hexToRGB(hex,alpha);
  }
  
  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
        let name = params['name'];
        if(name){
          // todo: lepiej byloby sie zasubskrybowac na operacje getAlbum(id)
          this.albumService.searchByName(name, album => {
            if(album){
              this.album = album[0];
              this.album.color =  this.albumService.getColor(this.album.type);
            }
          });
        }
    });
  }
    
}
