import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SortByPipe } from './pipes/sort-by.pipe';
import { FilterPipe } from './pipes/filter.pipe';



@NgModule({
  declarations: [SortByPipe, FilterPipe ],
  imports: [
    CommonModule
  ],
  exports:[
    SortByPipe,FilterPipe
  ]
})
export class SharedModule { }
