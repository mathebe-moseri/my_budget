import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  currentBg = 'bg-gray-300';
  circlePosition = 'translate-x-1';
  circleBackgroundColor = 'bg-gray-300';
  navBackgroundColor = 'bg-gray-400';

  isToggled = false;

  toggleButton() {
    if(!this.isToggled) {

      this.circlePosition = 'translate-x-11';
      this.circleBackgroundColor = 'bg-sky-300';
      this.navBackgroundColor = 'bg-sky-400';

      this.currentBg = 'bg-sky-200';

    } else {

      this.circlePosition = 'translate-x-1';
      this.circleBackgroundColor = 'bg-gray-300';
      this.navBackgroundColor = 'bg-gray-400';

      this.currentBg = 'bg-gray-300';
    }

    this.isToggled = !this.isToggled;
  }


}
