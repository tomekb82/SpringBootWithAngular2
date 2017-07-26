import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-album-list',
  template: `
        <table class="table table-striped">
            <thead>
                <tr>
                    <th> # </th>
                    <th> Nazwa </th>
                    <th> Typ </th>
                    <th> URL </th>
                    <th> Ulubiona </th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let album of albums | async; let i = index"
                    class="album-row" 
                   [ngClass]="{'table-active': selected == album}" 
                   [ngStyle]="{borderBottomColor:album.color}"
                    (click)="select(album)"        >
                    <td> {{ i + 1 }}. </td>
                    <td> {{album.name}} </td>
                    <td> {{album.type}} </td>
                    <td> {{album.url}} </td>
                    <td> <label><input type="checkbox" [(ngModel)]="album.favourite"
                    (click)="$event.stopPropagation();">Ulubiona</label> </td>
                </tr>
            </tbody>
        </table>
        
  `,
  styles: [
 ` 
  .album-row{
    border-bottom: 3px solid transparent;
   }
   `
  ]
})
export class AlbumListComponent implements OnInit {

  @Output('selected')
  emitter = new EventEmitter()

  @Input()
  albums;

  @Input()
  selected;

  select(album){
    this.emitter.emit(album);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
