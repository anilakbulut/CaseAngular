import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Activities } from '../models/activities';
import { ActivityService } from '../services/activity.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [ActivityService]
})
export class DetailsComponent implements OnInit {

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
