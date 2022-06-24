import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Activities } from '../models/activities';

@Component({
  selector: 'app-activies',
  templateUrl: './activies.component.html',
  styleUrls: ['./activies.component.css']
})
export class ActiviesComponent implements OnInit {
  activities: Activities[];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<Activities[]>("http://localhost:3000/activities").subscribe(data=>{
      this.activities = data;
    });
  }
  
}
