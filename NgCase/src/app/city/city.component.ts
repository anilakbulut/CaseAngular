import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  @Output() cityId = new EventEmitter<number>;

  constructor(
    private cityService: CityService,
    private activatedRoute: ActivatedRoute
    ) { }
    
  ngOnInit(): void {
      this.cityService.getCities().subscribe(data=>{
      this.cities = data;
    });
  }

  cityOnClick(value: number){
    this.cityId.emit(value);
    console.log("itemin id: "+ value)
  }
}
