import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AlbumComponent } from './album/album.component';
import { AlbumCardComponent } from './album/album-card.component';
import { AlbumFormComponent } from './album/album-form.component';
import { AlbumService } from './album/album.service';
import { AlbumDetailComponent } from './album/album-detail.component';
import { AlbumListComponent } from './album/album-list.component'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AlbumComponent,
    AlbumCardComponent,
    AlbumFormComponent,
    AlbumDetailComponent,
    AlbumListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    //{provide: AlbumService, useClass: ExtendedAlbumService }
    AlbumService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
