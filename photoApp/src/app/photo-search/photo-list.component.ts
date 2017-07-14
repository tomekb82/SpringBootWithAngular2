import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'photo-list',
  template: `
    <h4>Albumy</h4>
    <div class="card-deck">
        <photo-card [photo]="photo" class="card" *ngFor="let photo of photos"></photo-card>
    </div>
  `,
  styles: []
})
export class PhotoListComponent implements OnInit {

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
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
