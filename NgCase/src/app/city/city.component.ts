import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cities } from '../models/cities';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  cities: Cities[];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<Cities[]>("http://localhost:3000/cities").subscribe(data=>{
      this.cities = data;
    });
  }

}
