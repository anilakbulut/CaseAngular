import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activies',
  templateUrl: './activies.component.html',
  styleUrls: ['./activies.component.css']
})
export class ActiviesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  activities = ["konser 1","konser 2","konser 3","konser 4"];
}
