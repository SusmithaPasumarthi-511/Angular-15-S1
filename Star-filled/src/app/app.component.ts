import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Star-filled';
  currentRating: number = 3;

  updateRating(rating: number): void {
    this.currentRating = rating;
  }
}