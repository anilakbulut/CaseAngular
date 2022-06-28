import { Component } from '@angular/core';
import { DateActivities } from './models/dateActivities';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgCase';
  
  filterCityId: number;
  filterCategoryId: number;

  totalStartDate: DateActivities;
  totalEndDate: DateActivities;

  addCityId(newItem: any) {
    console.log("parentCityId:"+newItem);
    this.filterCityId = newItem;
  }
  addCategoryId(newItem: any) {
    console.log("parentCategoryId:"+newItem);
    this.filterCategoryId = newItem;
  }

  startDate(newItem: any){
    this.totalStartDate = newItem;
  }
  endDate(newItem:any){
    this.totalEndDate = newItem;
  }
}

