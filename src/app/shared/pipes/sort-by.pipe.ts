import { Pipe, PipeTransform, Type } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(values: any[],attribute:string, order:string, parseType:string): any[] {
    if (!values || order === '' || !order) { return values; } // no array
    if (values.length <= 1) { return values; } // array with only one item
    let sorted
    if(parseType=='date'){
      sorted = values.sort((a,b)=>{
        let convertedA = moment(a[attribute], "DD/MM/YYYY").toDate()
        let convertedB = moment(b[attribute], "DD/MM/YYYY").toDate()        
              
        if(convertedA<convertedB) return -1
        if(convertedB>convertedA) return 1
        return 0
      })
    }
    else{
      sorted = values.sort((a,b)=>{
        if(a[attribute]<b[attribute]) return -1
        if(b[attribute]>a[attribute]) return 1
        return 0
      })
    }

    if(order=="most-urgent"){
      // increasing dates
      return  sorted
    }
    else if (order=="least-urgent"){
      // decreasing dates
      return sorted.reverse()
    }
    throw new Error("incorrect order inputed");
    
    
  }
  private parse(type :string, value:any)  {
    switch(type){
      case 'date': return new Date(value).getTime()
    }
    
  }

}
