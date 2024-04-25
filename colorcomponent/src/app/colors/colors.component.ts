import { Component } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent {
  inputValue: string = '';
  color: string = 'black';

  updateColor() {
    if (this.inputValue.toLowerCase() === 'blue') {
      this.color = 'blue';
    } else if (this.inputValue.toLowerCase() === 'red') {
      this.color = 'red';
    } else {
      this.color = 'black';
    }
  }
}

