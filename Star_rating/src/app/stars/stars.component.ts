import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stars',
  standalone: true,
  imports: [],
  templateUrl: './stars.component.html',
  styleUrl: './stars.component.css'
})
export class StarsComponent {

  @Input() rating: number = 0;
  @Output() ratingChange: EventEmitter<number> = new EventEmitter<number>();
 
  filledStars: boolean[] = Array(5).fill(false);
 
  onMouseEnter(index: number): void {
    this.filledStars = this.filledStars.map((_, i) => i <= index);
  }
 
  onMouseLeave(): void {
    this.resetStars();
  }
 
  onClick(index: number): void {
    this.rating = index + 1;
    this.ratingChange.emit(this.rating);
    this.resetStars();
  }
 
  private resetStars(): void {
    this.filledStars = Array(5).fill(false);
    for (let i = 0; i < this.rating; i++) {
      this.filledStars[i] = true;
    }
  }
}

