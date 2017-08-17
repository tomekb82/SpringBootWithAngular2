import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http'
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

/* routing */
import { routerModule } from './album.routing';

/* components */
import { AlbumComponent } from './album.component';
import { AlbumCardComponent } from './album-card.component';
import { AlbumFormComponent } from './album-form.component';
import { AlbumDetailComponent } from './album-detail.component';
import { AlbumListComponent } from './album-list.component';

import {PhotoSearchModule} from '../photo-search/photo-search.module';

/* services */
import { AlbumService } from './album.service';
import albumData from './album.data';


import {AlbumTypePipe} from './album.filter';
import {OrderByPipe} from './album.orderBy';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routerModule,
    PhotoSearchModule
  ],
  declarations: [
    AlbumComponent,
    AlbumCardComponent,
    AlbumFormComponent,
    AlbumDetailComponent,
    AlbumListComponent,
    AlbumTypePipe,
    OrderByPipe
  ],
  exports:[
    AlbumComponent
  ],
  providers:[
    //{provide: AlbumService, useClass: ExtendedAlbumService }
    AlbumService,
    { provide: 'AlbumData', useValue: albumData }
  ]
})
export class AlbumModule { }
