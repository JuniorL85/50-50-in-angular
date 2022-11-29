import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-rotating-navigation',
  templateUrl: './rotating-navigation.component.html',
  styleUrls: ['./rotating-navigation.component.scss']
})
export class RotatingNavigationComponent implements OnInit {

  containerEl: any;

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.containerEl = this.elRef.nativeElement.querySelector('.container');
  }

  open() {
    this.containerEl.classList.add('show-nav');
  }

  close() {
    this.containerEl.classList.remove('show-nav');
  }

}
