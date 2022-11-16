import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SearchDataModule {
  constructor(
    public name: string,
    public price: number
  ){}
 }
