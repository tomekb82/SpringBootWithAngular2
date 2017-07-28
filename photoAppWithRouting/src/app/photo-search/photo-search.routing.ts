import { RouterModule, Routes } from '@angular/router';
import { PhotoSearchComponent } from './photo-search.component'


const routesConfig:Routes = [
  {path:'photo', component: PhotoSearchComponent },
]

export const routerModule = RouterModule.forChild(routesConfig)