import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
//import { ParentcomponentComponent } from './parentcomponent/parentcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    StarRatingComponent,
  //ParentcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
