import { RouterModule, Routes } from '@angular/router';

const routesConfig:Routes = [
  {path:'', redirectTo: 'album', pathMatch:'full' },
  {path:'**', redirectTo: 'album', pathMatch:'full' }
]

export const routerModule = RouterModule.forRoot(routesConfig,{
  enableTracing: true,
  useHash: true
})