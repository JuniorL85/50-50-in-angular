import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-faq-boxes',
  templateUrl: './faq-boxes.component.html',
  styleUrls: ['./faq-boxes.component.scss']
})
export class FaqBoxesComponent {

  toggleEl: any;

  constructor(private elRef: ElementRef) {}

  toggleActive(idx: number) {
    this.toggleEl = this.elRef.nativeElement.querySelectorAll('.faq-toggle');
    this.toggleEl.forEach((el: any, index: number) => {
      if (index === idx) {
        el.parentNode.classList.toggle('active');
      }
    });
  }
}
