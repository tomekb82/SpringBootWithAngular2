import { Component, OnInit } from '@angular/core';
import { PhotoSearchService } from './photo-search.service'
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'photo-search-form',
  template: `
    <form [formGroup]="searchForm">
      <div class="input-group">
        <input type="text" formControlName="query" class="form-control" placeholder="Nazwa pliku">
      </div>
    </form>
  `,
  styles: []
})
export class PhotoSearchFormComponent implements OnInit {

  searchForm:FormGroup

  constructor(private photoSearch: PhotoSearchService) { 
    this.searchForm = new FormGroup({
      'query': new FormControl('test20')
    })

    this.searchForm.get('query').valueChanges
    .filter(query => query.length >= 3 )
    .distinctUntilChanged()
    .debounceTime(400)
    .subscribe(query => {
        this.photoSearch.searchByNameRx(query);
    })
  }

  

  ngOnInit() {
  }

}