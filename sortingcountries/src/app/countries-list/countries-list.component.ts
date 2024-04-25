import { Component } from '@angular/core';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent {
  countries: string[] = ['USA', 'Canada', 'India', 'Australia'];
  newCountry: string = '';
  sortBy: string = 'asc';

  constructor() { }

  ngOnInit(): void {
    // You can pre-populate the countries array here if needed
   //  this.countries = [{ name: 'India' }, { name: 'USA' }];
  }

  addCountry(): void {
    if (this.newCountry.trim() !== '') {
      this.countries.push(this.newCountry);
      this.newCountry = '';
    }

  }
}
