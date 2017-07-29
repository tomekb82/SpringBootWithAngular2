import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'photo-card',
  template: `
    <div *ngIf="image">
    <img class="card-img-top img-fluid" [src]="image">
    <div class="card-img-overlay" [ngStyle] = "{background: hexToRGB(color || defaultColor, 0.8)}">
      <h5 class="card-title">{{photo.name}}</h5>
    </div>
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

  defaultColor = '#000000';
  
  @Input('photo')
  set setPhoto(photo){
    this.photo = photo;
    this.image = photo.url;
    this.color = this.photo.type ? this.photo.color : this.defaultColor;
    
    console.log("PHOTO=" + this.photo);
  }

  photo

  image
  
  color
  
  hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}

  constructor() { }

  ngOnInit() {
  }

}
