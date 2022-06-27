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
    this.cityId.emit(0);
  }

  cityOnClick(value: number){
    this.cityId.emit(value);
    console.log("city id: "+ value)
  }
  displayAllCategories(id: number){
    if( id == 7){
      this.cityId.emit(0);
    }
  }

  public activeIndex: number;
  public active(index: number): void {
    this.activeIndex = index;
  }
}
