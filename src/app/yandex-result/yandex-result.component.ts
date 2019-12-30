import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'app-yandex-result',
  templateUrl: './yandex-result.component.html',
  styleUrls: ['./yandex-result.component.scss']
})
export class YandexResultComponent implements OnInit {
  searchString: string;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchService.getSearchString.subscribe(data => {
      this.searchString = data;
    })
  }
}
