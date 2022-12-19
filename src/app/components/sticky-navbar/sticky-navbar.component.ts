import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-sticky-navbar',
  templateUrl: './sticky-navbar.component.html',
  styleUrls: ['./sticky-navbar.component.scss']
})
export class StickyNavbarComponent implements OnInit {

  @HostListener('window:mousewheel', ['$event'])
  public onWindowScroll(event: any): void {
    this.fixNav(event.pageY);
  }

  navEl: any;

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.navEl = this.elRef.nativeElement.querySelector('.nav');
  }

  fixNav(e: any) {
    if(e > this.navEl.offsetHeight + 200) {
        this.navEl.classList.add('active')
    } else {
        this.navEl.classList.remove('active')
    }
}

}
