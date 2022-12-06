import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-animated-navigation',
  templateUrl: './animated-navigation.component.html',
  styleUrls: ['./animated-navigation.component.scss']
})
export class AnimatedNavigationComponent {

  constructor(private elRef: ElementRef) {}

  toggleNavbar() {
    const navEl = this.elRef.nativeElement.querySelector('#nav');
    if (navEl) {
      navEl.classList.toggle('active');
    }
  }
}
