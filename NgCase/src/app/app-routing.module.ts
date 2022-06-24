import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ActiviesComponent } from './activies/activies.component';

const routes: Routes=[
  {path:"activities", component: ActiviesComponent},
  {path:"", redirectTo: "activities", pathMatch:"full"},
  {path:"activities/category/:actType", component: ActiviesComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
