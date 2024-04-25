import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { FormsModule } from '@angular/forms';
import { SortCountriesPipe } from './sort-countries.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CountriesListComponent,
    SortCountriesPipe,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
