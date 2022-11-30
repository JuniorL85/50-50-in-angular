import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-animation',
  templateUrl: './scroll-animation.component.html',
  styleUrls: ['./scroll-animation.component.scss']
})
export class ScrollAnimationComponent implements OnInit {

  // Man får lyssna på mousewheel istället för scroll, kvar att göra: försöka lösa hur man kan lyssna på scroll
  @HostListener('window:mousewheel', ['$event'])
  public onWindowScroll(event: Event): void {
    this.checkBoxes();
  }

  boxesEl: any;

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.boxesEl = this.elRef.nativeElement.querySelectorAll('.box');
    this.checkBoxes();
  }

  checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    this.boxesEl.forEach((box:any) => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })
  }
}
