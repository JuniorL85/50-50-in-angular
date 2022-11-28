import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-steps',
  templateUrl: './progress-steps.component.html',
  styleUrls: ['./progress-steps.component.scss']
})
export class ProgressStepsComponent implements OnInit {

  progressEl: any;
  circlesEl: any;
  isPreviousDisabled: boolean = true;
  isNextDisabled: boolean = false;

  currentActive = 1;

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.progressEl = this.elRef.nativeElement.querySelector('#progress');
    this.circlesEl = this.elRef.nativeElement.querySelectorAll('.circle');
  }

  previous() {
    this.currentActive--;

    if(this.currentActive < 1) {
      this.currentActive = 1;
    }

    this.update();
  }

  next() {
    this.currentActive++;

    if(this.currentActive > this.circlesEl.length) {
      this.currentActive = this.circlesEl.length;
    }

    this.update();
  }

  update() {
    this.circlesEl.forEach((circle: any, index: any) => {
      if(index < this.currentActive) {
        circle.classList.add('active');
      } else {
        circle.classList.remove('active');
      }
    });

    const actives = this.elRef.nativeElement.querySelectorAll('.active');

    this.progressEl.style.width = `${(actives.length - 1) / (this.circlesEl.length - 1) * 100}%`;

    if(this.currentActive === 1) {
      this.isPreviousDisabled = true;
    } else if(this.currentActive === this.circlesEl.length) {
      this.isNextDisabled = true;
    } else {
      this.isPreviousDisabled = false;
      this.isNextDisabled = false;
    }
  }
}
