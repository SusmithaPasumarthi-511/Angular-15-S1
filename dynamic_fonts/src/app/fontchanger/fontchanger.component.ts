import { Component } from '@angular/core';

@Component({
  selector: 'app-fontchanger',
  templateUrl: './fontchanger.component.html',
  styleUrls: ['./fontchanger.component.css']
})
export class FontchangerComponent {
  fontSize: number = 16;

  increaseFontSize() {
    this.fontSize += 2;
    
  }

  decreaseFontSize() {
    if (this.fontSize > 2) {
      this.fontSize -= 2;
    }
  }
}
