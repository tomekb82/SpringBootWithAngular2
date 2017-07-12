import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album-form',
  template: `
    <div class="card-block">
          <div class="form-group">
            <label>Nazwa:</label>
            <input type="text" [(ngModel)]="selected.name" class="form-control">
          </div> 
          <div class="form-group">
            <label>Rok:</label>
            <input type="number" [(ngModel)]="selected.year" disabled class="form-control">
          </div>
          <div class="form-group">
            <label>Typ:</label>
             <div class="dropdown" [class.show]="typeSelected">
                  <button (click)="toggleSelected()" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {{label}}
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a (click)="setType('Dorosły')" class="dropdown-item" href="#">Dorosły</a>
                        <a (click)="setType('Dziecko')" class="dropdown-item" href="#">Dziecko</a>
                        <a (click)="setType('Natura')" class="dropdown-item" href="#">Natura</a>
                  </div>
                </div>
          </div>
          <div class="form-group">
            <label>
            <input type="checkbox" [(ngModel)]="selected.favourite"> Favourite</label>
          </div>
          <div class="form-group">
            <button class="btn btn-success float-md-right float-xs-right" (click)="save($event)">Zapisz</button>
            </div>
        </div>
  `,
  styles: []
})
export class AlbumFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
