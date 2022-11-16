import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
//import {ISearchItem, searchItems} from '../search-data';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  //filteredItems: ISearchItem[] = [];
  searchText = '';
  isNotSearchTextPresent = true;

  constructor() { }

  ngOnInit(): void {

    //this.filteredItems=[...searchItems];
  }

  searchTextChanged(){
    //this.filteredItems=searchItems.filter(item =>
      //item.name.toLowerCase() 
    //item.name.toLowerCase().includes(this.searchText.toLocaleLowerCase())
     //   );
      this.isNotSearchTextPresent = this.searchText.length
      ===0;
  }

}
