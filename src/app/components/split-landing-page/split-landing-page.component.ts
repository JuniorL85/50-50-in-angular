import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-split-landing-page',
  templateUrl: './split-landing-page.component.html',
  styleUrls: ['./split-landing-page.component.scss']
})
export class SplitLandingPageComponent implements OnInit {

  containerEl: any;

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.containerEl = this.elRef.nativeElement.querySelector('.container');
  }

  onMouseEnter(pageSide: string) {
    if (pageSide === 'left') {
      this.containerEl.classList.add('hover-left');
    } else if (pageSide === 'right') {
      this.containerEl.classList.add('hover-right');
    }
  }

  onMouseLeave(pageSide: string) {
    if (pageSide === 'left') {
      this.containerEl.classList.remove('hover-left');
    } else if (pageSide === 'right') {
      this.containerEl.classList.remove('hover-right');
    }
  }

}
