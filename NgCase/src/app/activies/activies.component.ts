import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Activities } from '../models/activities';
import { DateActivities } from '../models/dateActivities';
import { ActivityService } from '../services/activity.service';

@Component({
  selector: 'app-activies',
  templateUrl: './activies.component.html',
  styleUrls: ['./activies.component.css'],
  providers: [ActivityService]
})
export class ActiviesComponent implements OnInit {
  activities: Activities[];

  @Input() filterCityId: number;
  @Input() filterCategoryId: number;
  @Input() totalStartDate: number[]=[];
  @Input() totalEndDate: number[]=[];

  text:string ="";

  constructor(
    private activitiyService: ActivityService
    ) { }

  ngOnInit(): void {
      this.activitiyService.getActivity().subscribe(data=>{
        this.activities = data;
      });
      this.totalStartDate=[0,0,0]
      this.totalEndDate=[0,0,0]

  }
}
