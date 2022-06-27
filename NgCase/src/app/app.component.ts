import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgCase';
  
  gonderdilenCityId: number;

  addCityId(newItem: any) {
    console.log("parentCityId:"+newItem);
    this.gonderdilenCityId = newItem;
  }
  addCategoryId(newItem: any) {
    console.log("parentCategoryId:"+newItem);
  }
}

