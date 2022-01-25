import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ContClientComponent } from './cont-client/cont-client.component';
import { CosCumparaturiComponent } from './cos-cumparaturi/cos-cumparaturi.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ContClientComponent,
    CosCumparaturiComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ClientModule { }
