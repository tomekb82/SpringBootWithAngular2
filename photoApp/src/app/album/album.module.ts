import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AlbumComponent } from './album.component';
import { AlbumCardComponent } from './album-card.component';
import { AlbumFormComponent } from './album-form.component';
import { AlbumDetailComponent } from './album-detail.component';
import { AlbumListComponent } from './album-list.component'
import { AlbumService } from './album.service';

import albumData from './album.data'

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    AlbumComponent,
    AlbumCardComponent,
    AlbumFormComponent,
    AlbumDetailComponent,
    AlbumListComponent
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
