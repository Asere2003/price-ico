import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PriceIcoRoutingModule } from './price-ico-routing.module';
import { IcoLayoutComponent } from './pages/ico-layout/ico-layout.component';
import { LoadFileComponent } from './pages/load-file/load-file.component';


@NgModule({
  declarations: [
    IcoLayoutComponent,
    LoadFileComponent
  ],
  imports: [
    CommonModule,
    PriceIcoRoutingModule
  ]
})
export class PriceIcoModule { }
