import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AlbumModule } from './album/album.module';
import { PhotoSearchModule } from './photo-search/photo-search.module';


import { RouterModule, Routes } from '@angular/router';
import { PhotoSearchComponent } from './photo-search/photo-search.component'
import { AlbumComponent } from './album/album.component'


const routesConfig:Routes = [
  {path:'', component: AlbumComponent },
  {path:'photo', component: PhotoSearchComponent },
  {path:'album', component: AlbumComponent },
  {path:'**', redirectTo: 'album', pathMatch:'full' },
]

const routerModule = RouterModule.forRoot(routesConfig,{
  enableTracing: true,
  useHash: true
})

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
