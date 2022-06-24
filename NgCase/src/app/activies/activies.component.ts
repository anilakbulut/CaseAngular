import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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

  constructor(
    private activitiyService: ActivityService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(categoryName =>{
      this.activitiyService.getActivity(categoryName["actType"]).subscribe(data=>{
        this.activities = data;
      });
    })

  }
}
