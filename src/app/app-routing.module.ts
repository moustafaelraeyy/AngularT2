import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsCompComponent } from './components/details-comp/details-comp.component';
import { ListingCompComponent } from './components/listing-comp/listing-comp.component';


const routes: Routes = [
  {path:"",component:ListingCompComponent},
  {path:"det",component:DetailsCompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
