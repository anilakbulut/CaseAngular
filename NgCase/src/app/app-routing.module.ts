import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ActiviesComponent } from './activies/activies.component';
import { CityComponent } from './city/city.component';
import { ActivitiesDetailsComponent } from './activies/activities-details/activities-details.component';

const routes: Routes=[
  {path:"activities", component: ActiviesComponent},
  {path:"", redirectTo: "activities", pathMatch:"full"},
  {path:"activities/:id", component: ActivitiesDetailsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
