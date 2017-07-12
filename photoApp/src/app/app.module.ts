import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AlbumComponent } from './album/album.component';
import { AlbumHeaderComponent } from './album/album-header.component';
import { AlbumFormComponent } from './album/album-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AlbumComponent,
    AlbumHeaderComponent,
    AlbumFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
