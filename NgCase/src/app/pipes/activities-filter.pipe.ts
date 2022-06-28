import { Pipe, PipeTransform } from '@angular/core';
import { Activities } from '../models/activities';

@Pipe({
  name: 'activitiesFilter'
})
export class ActivitiesFilterPipe implements PipeTransform {

  transform(activies: Activities[], 
            filterCityId: number,
            filterCategoryId:number,
            totalStartDate: number[],
            totalEndDate: number[]) {

      console.log("baslangıc: "+ totalStartDate)
      console.log("bitis: "+ totalEndDate)
      
      var start = totalStartDate[1] + "/" + totalStartDate[0] +"/" +totalStartDate[2]
      var end = totalEndDate[1] + "/" + totalEndDate[0] +"/" +totalEndDate[2]

      var dateStart = new Date(start); 
      var dateEnd = new Date(end);

      var Time = dateEnd.getTime() - dateStart.getTime(); 
      var Days = Time / (1000 * 3600 * 24);
      
      console.log(Days);

      if(filterCityId!=0 && filterCategoryId!=0){
        return activies.filter((a: Activities) =>
        (a.cityId === filterCityId && a.actId === filterCategoryId)
        )
      }
      else if(filterCityId!=0){
        return activies.filter((a: Activities) =>
        a.cityId == filterCityId );
      }
      else if(filterCategoryId!=0){
        return activies.filter((a: Activities) =>
        a.actId == filterCategoryId);
      }
      

    return activies;
  }

}
