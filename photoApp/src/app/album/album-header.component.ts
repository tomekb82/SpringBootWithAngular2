import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-album-header',
  template: `
    <div class="card">
        <div class="card-block">
          <h4 class="card-title">{{title}}</h4>
          <p class="card-text">{{message}}</p>
          <ng-content></ng-content>
        </div>    
      </div>
  `,
  styles: []
})
export class AlbumHeaderComponent implements OnInit {

  @Input()
  title = '';

  @Input()
  message = '';
  
  constructor() { }

  ngOnInit() {
  }

}
