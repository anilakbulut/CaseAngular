import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgCase';
  
  filterCityId: number;
  filterCategoryId: number;

  addCityId(newItem: any) {
    console.log("parentCityId:"+newItem);
    this.filterCityId = newItem;
  }
  addCategoryId(newItem: any) {
    console.log("parentCategoryId:"+newItem);
    this.filterCategoryId = newItem;
  }
}

