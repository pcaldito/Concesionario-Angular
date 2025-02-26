import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocheListComponent } from './components/coche-list/coche-list.component';
import { CocheRoutingComponent } from './components/coche-routing/coche-routing.component';

const routes: Routes = [
  {path: 'car-list', component:CocheListComponent},
  {path: 'car-routing', component:CocheRoutingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
