import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'app-bing-result',
  templateUrl: './bing-result.component.html',
  styleUrls: ['./bing-result.component.scss']
})
export class BingResultComponent implements OnInit {
  searchString: string;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchService.getSearchString.subscribe(data => {
      this.searchString = data;
    })
  }

}
