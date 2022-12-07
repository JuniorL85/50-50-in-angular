import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-drink-water',
  templateUrl: './drink-water.component.html',
  styleUrls: ['./drink-water.component.scss']
})
export class DrinkWaterComponent implements OnInit {

  smallCupsEl: any;
  litersEl: any;
  percentageEl: any;
  remainedEl: any;

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.smallCupsEl = this.elRef.nativeElement.querySelectorAll('.cup-small');
    this.litersEl = this.elRef.nativeElement.querySelector('#liters');
    this.percentageEl = this.elRef.nativeElement.querySelector('#percentage');
    this.remainedEl = this.elRef.nativeElement.querySelector('#remained');

    this.updateBigCup();
  }

  highlightCups(idx: number) {
    if (idx === 7 && this.smallCupsEl[idx].classList.contains('full')) {
      idx--;
    }
    else if(this.smallCupsEl[idx].classList.contains('full') && !this.smallCupsEl[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }

    this.smallCupsEl.forEach((cup: any, idx2: any) => {
        if(idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    this.updateBigCup()
}

  updateBigCup() {
    const fullCups = this.elRef.nativeElement.querySelectorAll('.cup-small.full').length
    const totalCups = this.smallCupsEl.length

    if(fullCups === 0) {
        this.percentageEl.style.visibility = 'hidden'
        this.percentageEl.style.height = 0
    } else {
        this.percentageEl.style.visibility = 'visible'
        this.percentageEl.style.height = `${fullCups / totalCups * 330}px`
        this.percentageEl.innerText = `${fullCups / totalCups * 100}%`
    }

    if(fullCups === totalCups) {
        this.remainedEl.style.visibility = 'hidden'
        this.remainedEl.style.height = 0
    } else {
        this.remainedEl.style.visibility = 'visible'
        this.litersEl.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}
}
