import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AlbumModule } from './album/album.module';
import { PhotoSearchModule } from './photo-search/photo-search.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlbumModule,
    PhotoSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
