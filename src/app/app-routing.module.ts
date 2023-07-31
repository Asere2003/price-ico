import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'load-file',
    loadChildren: () => import( './price-ico/price-ico/price-ico.module' ).then( m => m.PriceIcoModule ),
  },
  {
    path: '**',
    redirectTo: 'load-file',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
