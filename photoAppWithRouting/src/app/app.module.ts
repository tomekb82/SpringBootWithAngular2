import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* komponenty & moduly */
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AlbumModule } from './album/album.module';
import { PhotoSearchModule } from './photo-search/photo-search.module';

/* routing */
import { routerModule } from './app.routing';

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
    PhotoSearchModule,
    routerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
