import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContRoutingModule } from './cont-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ContRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ContModule { }
