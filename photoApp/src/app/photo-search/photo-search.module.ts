import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoSearchComponent } from './photo-search.component';
import { PhotoListComponent } from './photo-list.component';
import { PhotoCardComponent } from './photo-card.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PhotoSearchComponent,
    PhotoListComponent,
    PhotoCardComponent
  ],
  exports:[
    PhotoSearchComponent
  ]
})
export class PhotoSearchModule { }
