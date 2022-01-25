import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { LoginContGuard } from './login-cont.guard';

const routes: Routes = [
  {
    path: '',  
    canActivate: [LoginContGuard],
    children: [
      {path: '',  
       loadChildren: () => import('src/app/module/client/client.module').then(m => m.ClientModule)
      },
      {path: '',  
      loadChildren: () => import('src/app/module/gestiune/gestiune.module').then(m => m.GestiuneModule)
      }
    ]
  },
  
  {path: '',  
  loadChildren: () => import('src/app/module/start-page/start-page.module').then(m =>m.StartPageModule)
  },
  {path: '',  
      loadChildren: () => import('src/app/module/cont/cont.module').then(m => m.ContModule)
  }
  
     
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
