import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical-slider',
  templateUrl: './vertical-slider.component.html',
  styleUrls: ['./vertical-slider.component.scss']
})
export class VerticalSliderComponent implements OnInit {

slidesLength: any;
slideRight: any;
slideLeft: any;
activeSlideIndex = 0

constructor(private elRef: ElementRef) { }

ngOnInit() {
  // Pick the elements with elRef
  this.slideRight = this.elRef.nativeElement.querySelector('.right-slide');
  this.slideLeft = this.elRef.nativeElement.querySelector('.left-slide');
  this.slidesLength = this.slideRight.querySelectorAll('div').length;

  // Set top of left slide element
  this.slideLeft.style.top = `-${(this.slidesLength - 1) * 100}vh`;
}


changeSlide(direction: string) {

  // Pick the sliderContainer element with elRef
  const sliderContainer = this.elRef.nativeElement.querySelector('.slider-container');

  // Use the clientHeight of sliderContainer and set sliderHeight
  const sliderHeight = sliderContainer.clientHeight;

  if(direction === 'up') {
      this.activeSlideIndex++
      if(this.activeSlideIndex > this.slidesLength - 1) {
          this.activeSlideIndex = 0;
      }
  } else if(direction === 'down') {
      this.activeSlideIndex--
      if(this.activeSlideIndex < 0) {
          this.activeSlideIndex = this.slidesLength - 1;
      }
  }
  // Set the transform style so that pic moves up or down
  this.slideRight.style.transform = `translateY(-${this.activeSlideIndex * sliderHeight}px)`;
  this.slideLeft.style.transform = `translateY(${this.activeSlideIndex * sliderHeight}px)`;
}

}
