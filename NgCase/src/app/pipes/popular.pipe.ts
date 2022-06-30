import { Pipe, PipeTransform } from '@angular/core';
import { Activities } from '../models/activities';

@Pipe({
  name: 'popular'
})
export class PopularPipe implements PipeTransform {

  transform(activities: Activities[]) {
    return activities.filter((a: Activities) =>
           a.isPopular == true);
  }

}
