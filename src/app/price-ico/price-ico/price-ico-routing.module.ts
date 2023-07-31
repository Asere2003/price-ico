import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IcoLayoutComponent } from './pages/ico-layout/ico-layout.component';
import { LoadFileComponent } from './pages/load-file/load-file.component';

const routes: Routes = [

  {
    path:'',
    component: IcoLayoutComponent,
    children: [
      { path: 'load-file', component: LoadFileComponent },
      { path: '**', redirectTo: 'load-file' },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PriceIcoRoutingModule { }
