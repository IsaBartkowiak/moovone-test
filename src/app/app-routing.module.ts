import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'excited-cells',
    pathMatch: 'full',
  },
  {
    path: 'excited-cells',
    loadChildren: () => import('./excited-cells/excited-cells.module').then(m => m.ExcitedCellsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
