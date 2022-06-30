import { Component, OnInit } from '@angular/core';
import { Activities } from '../models/activities';
import { ActivityService } from '../services/activity.service';

@Component({
  selector: 'app-popular-activities',
  templateUrl: './popular-activities.component.html',
  styleUrls: ['./popular-activities.component.css'],
  providers: [ActivityService]
})
export class PopularActivitiesComponent implements OnInit {
  activities: Activities[];

  constructor(private activityService: ActivityService) { }

    ngOnInit(): void {
      this.activityService.getActivity().subscribe(data=>
        this.activities = data)
    }
}
