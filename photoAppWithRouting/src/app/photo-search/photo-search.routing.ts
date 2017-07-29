import { RouterModule, Routes } from '@angular/router';
import { PhotoSearchComponent } from './photo-search.component'
import {AlbumDetailComponent} from '../album/album-detail.component';

const routesConfig:Routes = [
  {path:'photo', component: PhotoSearchComponent },
  {path:'photo/:name', component: AlbumDetailComponent },
]

export const routerModule = RouterModule.forChild(routesConfig)