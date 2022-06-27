import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Activities } from '../models/activities';
import { ActivityService } from '../services/activity.service';

@Component({
  selector: 'app-activies',
  templateUrl: './activies.component.html',
  styleUrls: ['./activies.component.css'],
  providers: [ActivityService]
})
export class ActiviesComponent implements OnInit {
  activities: Activities[];

  @Input() gelenCityId: number;

  constructor(
    private activitiyService: ActivityService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
      this.activitiyService.getActivity().subscribe(data=>{
        this.activities = data;
      });
      
  }


  
}
