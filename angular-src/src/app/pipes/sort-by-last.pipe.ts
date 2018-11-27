import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByLast'
})
export class SortByLastPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.sort((a,b)=>{
      
      if(a.lastName.toLowerCase() > b.lastName.toLowerCase()){
        return 1;
      }

      if(a.lastName.toLowerCase() < b.lastName.toLowerCase()){
        return -1;
      }
      return 0;
    });
  }

}
