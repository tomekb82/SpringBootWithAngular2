import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './album.component';


const routesConfig:Routes = [
  {path:'album', component: AlbumComponent }
]

export const routerModule = RouterModule.forChild(routesConfig)