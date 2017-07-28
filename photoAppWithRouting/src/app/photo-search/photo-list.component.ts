import { Component, OnInit } from '@angular/core';

import { PhotoSearchService } from './photo-search.service'

import { AlbumService} from '../album/album.service';


@Component({
  selector: 'photo-list',
  template: `
    <h4>Albumy</h4>
    <div class="card-deck card-deck-justify">
        <photo-card [photo]="photo" class="card" *ngFor="let photo of photos"></photo-card>
    </div>
  `,
  styles: [`
    .card-deck-justify{
   //  justify-content: space-between;
    }
  `]
})
export class PhotoListComponent implements OnInit {
  
  photos ;//= [];

  constructor(private photoSearch: PhotoSearchService, private albumService: AlbumService) {

  }

  ngOnInit() {
  
    //this.photos = this.photoSearch.getDataPhotos();
    
    this.photoSearch.getPhotos((photos)=>{
      //this.photos = photos;
    });
    
    this.photoSearch.getPhotosStream().subscribe((photos)=>{
      this.photos = photos;
    });
    
    this.albumService.getPhotosStream().subscribe((photos)=>{
      this.photos = photos;
    });
    
   
  }

}
