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

  totalStartDate: number[] = [];
  totalEndDate: number[]= [];

  addCityId(newItem: any) {
    this.filterCityId = newItem;
  }
  addCategoryId(newItem: any) {
    this.filterCategoryId = newItem;
  }

  startDate(newItem: any){
    if(this.totalStartDate.length==3) this.totalStartDate=[];
    this.totalStartDate.push(newItem.day)
    this.totalStartDate.push(newItem.month)
    this.totalStartDate.push(newItem.year)
  }
  endDate(newItem:any){
    if(this.totalEndDate.length==3) this.totalEndDate=[];
    this.totalEndDate.push(newItem.day)
    this.totalEndDate.push(newItem.month)
    this.totalEndDate.push(newItem.year)
  }
}

