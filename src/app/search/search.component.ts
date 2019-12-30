import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from './search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private searchService: SearchService,
              private router: Router) { }

  ngOnInit() {
  }

  searchStringChangeHandler(event: any) {
    this.searchService.setSearchString(event.target.value);
  }

  searchTypeChangeHandler(event: any) {
    if(event.target.value == 'Google') {
      this.router.navigate(['/google']);
    } else if(event.target.value == 'Bing') {
      this.router.navigate(['/bing']);
    } else if(event.target.value == 'Yandex') {
      this.router.navigate(['/yandex']);
    }
  }
}
