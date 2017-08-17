import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './album.component';

import {AlbumDetailComponent} from './album-detail.component';
import {AlbumFormComponent} from './album-form.component';

const routesConfig:Routes = [
  {path:'album', component: AlbumComponent ,
    children:[
       {path:'', component: AlbumDetailComponent },
       {path:'new', component: AlbumFormComponent },
       {path:':name', component: AlbumDetailComponent },
       {path:':name/edit', component: AlbumFormComponent },
    ] },
]
  

export const routerModule = RouterModule.forChild(routesConfig)