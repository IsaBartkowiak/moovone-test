import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ExcitedCellsComponent } from './excited-cells.component';

const routes: Routes = [{ path: '', component: ExcitedCellsComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ],
  exports: [
    RouterModule,
  ]
})
export class ExcitedCellsRoutingModule { }
