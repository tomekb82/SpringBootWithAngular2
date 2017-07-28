import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-album-detail',
  template: `
          <div class="form-group">
            <button class="btn btn-default float-md-right float-xs-right" (click)="edit(album)">Edytuj</button>
          </div>
  `,
  styles: []
})
export class AlbumDetailComponent implements OnInit {

  @Input()
  album;

  @Output('edit')
  emitter = new EventEmitter(); 

  edit(album){
    this.emitter.emit(album)
  }
  
  constructor() { }

  ngOnInit() {
  }

}
