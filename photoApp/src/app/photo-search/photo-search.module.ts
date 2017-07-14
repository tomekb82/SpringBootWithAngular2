import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http'

import { PhotoSearchComponent } from './photo-search.component';
import { PhotoListComponent } from './photo-list.component';
import { PhotoCardComponent } from './photo-card.component'

import { PhotoSearchService } from './photo-search.service'

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
    PhotoSearchComponent,
    PhotoListComponent,
    PhotoCardComponent
  ],
  exports:[
    PhotoSearchComponent
  ],
  providers:[
    PhotoSearchService
  ]
})
export class PhotoSearchModule { }
