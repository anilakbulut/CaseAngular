import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormControl} from '@angular/forms';
import { DateActivities } from '../models/dateActivities';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})


export class DateComponent implements OnInit {

  constructor() { }
  startDate: Date;
  endDate: Date;

  @Output() totalStartDate = new EventEmitter<DateActivities>;
  @Output() totalEndDate = new EventEmitter<DateActivities>;

  sendStartDate: DateActivities;
  sendEndDate: DateActivities;

  SubmitStartDate(){
    this.sendStartDate = {day:this.startDate.getDate(),
                          month:this.startDate.getMonth()+1,
                          year:this.startDate.getFullYear()};
    this.totalStartDate.emit(this.sendStartDate);
  }

  SubmitEndDate(){
    this.sendEndDate = {day:this.endDate.getDate(),
                          month:this.endDate.getMonth()+1,
                          year:this.endDate.getFullYear()};
    this.totalEndDate.emit(this.sendEndDate);
    
  }


  ngOnInit(): void {
  }

}
