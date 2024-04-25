import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortCountries'
})
export class SortCountriesPipe implements PipeTransform {
 
    transform(value: string[], sortBy: string): string[] {
      if (!value || value.length === 0) return [];
  
      if (sortBy === 'asc') {
        return value.sort((a, b) => a.localeCompare(b));
      } else {
        return value.sort((a, b) => b.localeCompare(a));
      }
    }
  }


