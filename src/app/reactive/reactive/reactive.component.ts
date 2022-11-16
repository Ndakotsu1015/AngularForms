import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

  //searchForm = new FormGroup({
    //search: new FormControl('')
 // });

  //filteredItems:Observable<ISearchItem[]> | undefined;

  constructor() { }

  ngOnInit(): void {

    //this.filteredItems =this.searchForm.controls.search.valueChanges.pipe(
      //startWith(''),
      //map(value: string) => {
        //if (value)
        //{
          //return searchItems.filter((searchItem: { name: string; }) => searchItem.name.toLowerCase().includes(
        //value
         // ));
       // }
        //return searchItems;
      //}
    //);
  //}

}
}