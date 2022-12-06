import { Component, ElementRef, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-background-slider',
  templateUrl: './background-slider.component.html',
  styleUrls: ['./background-slider.component.scss']
})
export class BackgroundSliderComponent implements OnInit {


  constructor(private elRef: ElementRef) {}

  @HostBinding('style.backgroundImage') bodyUrl = '';

  slides: any;

  activeSlide = 0

  ngOnInit() {
    this.slides = this.elRef.nativeElement.querySelectorAll('.slide');
    this.setBgToBody()
  }

  setBgToBody() {
    this.bodyUrl = this.slides[this.activeSlide].style.backgroundImage;
  }

  setActiveSlide() {
    this.slides.forEach((slide: any) => slide.classList.remove('active'))

    this.slides[this.activeSlide].classList.add('active')
  }
  rightBtnClick() {
    this.activeSlide++

    if (this.activeSlide > this.slides.length - 1) {
      this.activeSlide = 0
    }

    this.setBgToBody()
    this.setActiveSlide()
  }


  leftBtnClick() {
    this.activeSlide--

    if (this.activeSlide < 0) {
      this.activeSlide = this.slides.length - 1
    }

    this.setBgToBody()
    this.setActiveSlide()
  }

}
