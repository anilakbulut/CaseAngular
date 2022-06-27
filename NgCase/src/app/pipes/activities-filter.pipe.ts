import { Pipe, PipeTransform } from '@angular/core';
import { Activities } from '../models/activities';

@Pipe({
  name: 'activitiesFilter'
})
export class ActivitiesFilterPipe implements PipeTransform {

  transform(activies: Activities[], filterCityId: number,filterCategoryId:number) {
    if(filterCityId!=0 && filterCategoryId!=0){
      return activies.filter((a: Activities) =>
      a.cityId === filterCityId && a.actId === filterCategoryId)
    }
    else if(filterCityId!=0){
      return activies.filter((a: Activities) =>
      a.cityId == filterCityId);
    }
    else if(filterCategoryId!=0){
      return activies.filter((a: Activities) =>
      a.actId == filterCategoryId);
    }

    return activies;
  }

}
