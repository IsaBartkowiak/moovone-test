import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExcitedCellsRoutingModule } from './excited-cells-routing.module';
import { ExcitedCellsComponent } from './excited-cells.component';
import { CellsPreviewComponent } from './cells-preview/cells-preview.component';


@NgModule({
  declarations: [
    ExcitedCellsComponent,
    CellsPreviewComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ExcitedCellsRoutingModule,
  ]
})
export class ExcitedCellsModule { }
