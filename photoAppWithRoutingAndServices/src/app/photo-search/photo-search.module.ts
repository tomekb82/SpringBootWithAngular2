import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* components */
import { PhotoSearchComponent } from './photo-search.component';
import { PhotoListComponent } from './photo-list.component';
import { PhotoCardComponent } from './photo-card.component';
import { PhotoSearchFormComponent } from './photo-search-form.component';

/* services */
import { PhotoSearchService } from './photo-search.service';
import photoData from './photo.data';

/* routing */
import { routerModule } from './photo-search.routing'

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    routerModule
  ],
  declarations: [
    PhotoSearchComponent,
    PhotoListComponent,
    PhotoCardComponent,
    PhotoSearchFormComponent
  ],
  exports:[
    PhotoSearchComponent,
    PhotoCardComponent
  ],
  providers:[
    PhotoSearchService,
    { provide: 'PhotoData', useValue: photoData }
  ]
})
export class PhotoSearchModule { }
