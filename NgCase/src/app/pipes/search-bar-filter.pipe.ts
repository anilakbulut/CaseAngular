import { Pipe, PipeTransform } from '@angular/core';
import { Activities } from '../models/activities';

@Pipe({
  name: 'searchBarFilter'
})
export class SearchBarFilterPipe implements PipeTransform {

  transform(activities: Activities[],text:string): Activities[] {
    text = text.toLowerCase();

    return text? activities.filter(a => a.title.toLowerCase().indexOf(text)!==-1): activities;
  }

}
