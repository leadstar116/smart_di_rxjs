import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { GoogleResultComponent } from './google-result/google-result.component';
import { BingResultComponent } from './bing-result/bing-result.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    GoogleResultComponent,
    BingResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
