import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(values:any[] , attribute: string, filter:string): any[] {
    if (!values) { return values; } // no array
    if (values.length <= 1) { return values; } // array with only one item
    return values.filter((val)=> val[attribute].toLowerCase().includes(filter.toLowerCase().trim()))
  }

}
