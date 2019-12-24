import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'app-google-result',
  templateUrl: './google-result.component.html',
  styleUrls: ['./google-result.component.scss']
})
export class GoogleResultComponent implements OnInit {
  searchString: string;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchService.getSearchString.subscribe(data => {
      this.searchString = data;
    })
  }

}
