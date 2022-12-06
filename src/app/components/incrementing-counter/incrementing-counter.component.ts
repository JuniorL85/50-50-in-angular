import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementing-counter',
  templateUrl: './incrementing-counter.component.html',
  styleUrls: ['./incrementing-counter.component.scss']
})
export class IncrementingCounterComponent implements OnInit {

  countersEl: any;

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.countersEl = this.elRef.nativeElement.querySelectorAll('.counter');

    this.countersEl.forEach((counter: any) => {
      counter.innerText = '0';

      const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;

        const increment = target / 500;

        if (c < target) {
          counter.innerText = `${Math.ceil(c + increment)}`;
          setTimeout(updateCounter, 1);
        } else {
          counter.innerText = target;
        }
      }

      updateCounter();
    })
  }
}
