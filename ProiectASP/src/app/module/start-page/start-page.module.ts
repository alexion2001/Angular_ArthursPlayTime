import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartPageRoutingModule } from './start-page-routing.module';
import { HomeComponent } from './home/home.component';
import { ProduseComponent } from './home/produse/produse.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    HomeComponent,
    ProduseComponent
  ],
  imports: [
    CommonModule,
    StartPageRoutingModule,
    MaterialModule,
  ]
})
export class StartPageModule { }
