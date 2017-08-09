import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-album-list',
  template: `
  
   <span #info_id style="width:100%"></span>
   
        <form class="float-md-right float-xs-right">
              <select (change)="selectType($event)">
                <option *ngFor="let o of refData" [value]="o.value" >{{o.name}}</option>
              </select>
            </form>
            
            
        <table class="table table-striped">
            <thead>
                <tr>
                    <th> # </th>
                    <th> 
                    
                    
                     <span (click)="changeOrder('name')" class="sort-btn">
  Nazwa
  <i *ngIf="isOrderedBy('name')" class="glyphicon" [ngClass]="{'glyphicon-chevron-up': !isOrderedReverse(), 'glyphicon-chevron-down':isOrderedReverse()}"></i>
</span>
                    
                    </th>
                    
                    <th> Typ </th>
                    <th> URL </th>
                    <th> Ulubiona </th>
                </tr>
            </thead>
            <tbody>
                <!--<tr *ngFor="let album of albums | async | albumType: 'ADULT'; let i = index"-->
                <tr *ngFor="let album of albums | async | albumType: this.filterValue | orderBy: ['-name', 'url']; let i = index"
                    class="album-row" 
                   [ngClass]="{'table-active': selected == album}" 
                   [ngStyle]="{borderBottomColor:album.color}"
                   (mouseover) = select(album)
                   [routerLink]="[album.name.split('.')[0]]"
                   
                   (click)="setInfo(info_id, album)">
                   
                    <td> {{ i + 1 }}. </td>
                    <td> {{album.name}} </td>
                    <td> {{album.type}} </td>
                    <td> {{album.url}} </td>
                    <td> <label><input type="checkbox" [(ngModel)]="album.favourite"
                    (click)="$event.stopPropagation();" disabled>Ulubiona</label> </td>
                </tr>
            </tbody>
        </table>
        
  `,
  styles: [
 ` 
 
 .sort-btn{
    cursor: pointer;
}

.sort-btn .glyphicon{
    font-size: 8px;
    top: -1px;
    margin-left: 2px;
}
 
  .album-row{
    border-bottom: 3px solid transparent;
   }
   `
  ]
})
export class AlbumListComponent implements OnInit {

filterValue;

 selectType(e){
   this.filterValue = this.refData[e.target.selectedIndex].value;
   console.log(this.filterValue);
}

setInfo(info, album){
    info.text = album.name;
}
  

orderByDir = false;
orderByColumn = 'name';

changeOrder(columnName) {

            if(this.orderByColumn == columnName){
                this.orderByDir = !this.orderByDir;
            }else{
                this.orderByColumn = columnName;
                this.orderByDir = false;
            }
        };

isOrderedBy(columnName) {
            return (this.orderByColumn == columnName);
        }; 

isOrderedReverse() {
            return !this.orderByDir;
        };



  @Output('selected')
  emitter = new EventEmitter()

  @Input()
  albums;

  @Input()
  selected;

  select(album){
    this.emitter.emit(album);
  }
  
  refData;
  
  constructor() { 
  
  this.refData = [
      {name:'ALL', value: 'ALL'},
      {name:'ADULT', value: 'ADULT'},
      {name:'CHILD', value: 'CHILD'},
      {name:'NATURE', value: 'NATURE'}
      ];}

  ngOnInit() {
  }

}
