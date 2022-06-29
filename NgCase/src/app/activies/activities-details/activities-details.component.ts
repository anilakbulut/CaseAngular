import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Activities } from 'src/app/models/activities';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-activities-details',
  templateUrl: './activities-details.component.html',
  styleUrls: ['./activities-details.component.css'],
  providers: [ActivityService]
})
export class ActivitiesDetailsComponent implements OnInit {

  activities: Activities;

  constructor(private activityService: ActivityService,
              private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.activityService.getActivityById(params["id"]).subscribe(data=>{
        this.activities = data;
      })
    })
  }

}
