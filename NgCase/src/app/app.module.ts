import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { ActiviesComponent } from './activies/activies.component';
import { HttpClientModule } from '@angular/common/http';
import { CityComponent } from './city/city.component';
import { AppRoutingModule } from './app-routing.module';
import { ActivitiesFilterPipe } from './pipes/activities-filter.pipe';
import { DateComponent } from './date/date.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { SearchBarFilterPipe } from './pipes/search-bar-filter.pipe';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CategoryComponent,
    ActiviesComponent,
    CityComponent,
    ActivitiesFilterPipe,
    DateComponent,
    SearchBarFilterPipe,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
