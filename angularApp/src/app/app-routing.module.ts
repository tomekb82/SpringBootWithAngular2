import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import {BundledModule} from './bundled/bundled.module'
export function loadBundledModule() { return BundledModule; }


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  
  
   {
    path: 'bundled',
    loadChildren: loadBundledModule
    // Comment loadChildren above and uncomment the line below to get non lazy loading working with AoT
    // Do not delete / comment the  `loadBundledModule` declaration or the module will be lazy loaded
    // loadChildren: './bundled/bundled.module#BundledModule'
  },
  {
    path: 'lazy',
    loadChildren: './lazy/lazy.module#LazyModule'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
