import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-album-card',
  template: `
    <div class="card" [style.backgroundColor]="color">
        <div class="card-block">
          <h4 class="card-title">{{title}}</h4>
          <p class="card-text">{{message}}</p>
          <ng-content></ng-content>
        </div>    
      </div>
  `,
  styles: []
})
export class AlbumCardComponent implements OnInit {

  @Input()
  title = '';

  @Input()
  message = '';

  @Input()
  color = 'white';
  
  constructor() { }

  ngOnInit() {
  }

}
