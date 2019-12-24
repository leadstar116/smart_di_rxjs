import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SearchService {
    private readonly _searchString = new BehaviorSubject<string>('');
    getSearchString = this._searchString.asObservable();

    constructor() {}

    setSearchString(data) {
        this._searchString.next(data);
    }
}