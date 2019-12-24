import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BingResultComponent } from './bing-result/bing-result.component';
import { GoogleResultComponent } from './google-result/google-result.component';


const routes: Routes = [
  { path:'bing', component: BingResultComponent },
  { path:'google', component: GoogleResultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
