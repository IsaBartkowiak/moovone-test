import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExcitedCellsComponent } from './excited-cells.component';

const routes: Routes = [{ path: '', component: ExcitedCellsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExcitedCellsRoutingModule { }
