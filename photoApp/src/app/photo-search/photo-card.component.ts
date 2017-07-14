import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'photo-card',
  template: `
  
    <img class="card-img-top img-fluid" [src]="image">
    <div class="card-img-overlay">
      <h5 class="card-title">{{photo.name}}</h5>
    </div>
    
  `,
  styles: [`
    :host(){
      flex: 0 0 31% !important;
      margin-bottom: 0.625rem  !important;
      overflow:hidden;
    }

    :host():hover .card-img-overlay{
      top: 100%;
    }
    
    .card-img-overlay{
      background: rgba(0,0,0,0.8);
      top:70%;
      color: #fff;
      font-size: 1em !important;
      transition: .2s top ease-out;
    }
  `]
})
export class PhotoCardComponent implements OnInit {

  @Input('photo')
  set setPhoto(photo){
    this.photo = photo;
    this.image = photo.url;
  }

  photo

  image
  
  constructor() { }

  ngOnInit() {
  }

}
