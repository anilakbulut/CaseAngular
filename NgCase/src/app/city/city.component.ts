import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cities } from '../models/cities';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
  providers: [CityService]
})
export class CityComponent implements OnInit {
  cities: Cities[];
  
  constructor(private cityService: CityService) { }

  ngOnInit(): void {
      this.cityService.getCities().subscribe(data=>{
      this.cities = data;
    });
  }

}
