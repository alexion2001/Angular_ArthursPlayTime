import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContClientComponent } from './cont-client/cont-client.component';
import { CosCumparaturiComponent } from './cos-cumparaturi/cos-cumparaturi.component';

const routes: Routes = [
  {path: 'cont', component: ContClientComponent},
  {path: 'cos', component: CosCumparaturiComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
