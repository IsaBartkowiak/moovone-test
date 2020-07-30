import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExcitedCellsRoutingModule } from './excited-cells-routing.module';
import { ExcitedCellsComponent } from './excited-cells.component';


@NgModule({
  declarations: [ExcitedCellsComponent],
  imports: [
    CommonModule,
    ExcitedCellsRoutingModule
  ]
})
export class ExcitedCellsModule { }
