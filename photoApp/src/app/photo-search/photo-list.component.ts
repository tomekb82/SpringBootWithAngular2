import { Component, OnInit } from '@angular/core';

import { PhotoSearchService } from './photo-search.service'

@Component({
  selector: 'photo-list',
  template: `
    <h4>Albumy</h4>
    <div class="card-deck card-deck-justify">
        <photo-card [photo]="photo" class="card" *ngFor="let photo of photos"></photo-card>
    </div>
  `,
  styles: [`
    //.card-deck-justify{
    //  justify-content: space-between;
    //}
  `]
})
export class PhotoListComponent implements OnInit {

/*
  photos = [
    {
      name: 'Album 1',
      url:'http://localhost:8080/image/1'
    },
    {
      name: 'Album 2',
      url:'http://localhost:8080/image/2'
    },
    {
      name: 'Album 3',
      url:'http://localhost:8080/image/1'
    },
    {
      name: 'Album 4',
      url:'http://localhost:8080/image/1'
    }
  ];*/
  
  photos = [];

  constructor(private photoSearch: PhotoSearchService) {

  }

  ngOnInit() {
    this.photoSearch.getPhotos((photos)=>{
      this.photos = photos;
      
      console.log(photos);
    })
  }

}
