import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-blurry-loading',
  templateUrl: './blurry-loading.component.html',
  styleUrls: ['./blurry-loading.component.scss']
})
export class BlurryLoadingComponent implements OnInit {

load = 0;
int: any;

constructor(private elRef: ElementRef) {
}

ngOnInit() {
  this.int = setInterval(() => {

    const bg = this.elRef.nativeElement.querySelector('.bg')
    const loadText = this.elRef.nativeElement.querySelector('.loading-text')
    this.load++;

    if (this.load > 99) {
      clearInterval(this.int)
    }

    loadText.innerText = `${this.load}%`
    loadText.style.opacity = this.scale(this.load, 0, 100, 1, 0)
    bg.style.filter = `blur(${this.scale(this.load, 0, 100, 30, 0)}px)`

  }, 30);
}


// blurring() {
//   const bg = this.elRef.nativeElement.querySelector('.bg')
//   const loadText = this.elRef.nativeElement.querySelector('.loading-text')
//   this.load++;

//   if (this.load > 99) {
//     clearInterval(this.int)
//   }

//   loadText.innerText = `${this.load}%`
//   loadText.style.opacity = this.scale(this.load, 0, 100, 1, 0)
//   bg.style.filter = `blur(${this.scale(this.load, 0, 100, 30, 0)}px)`
// }

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
scale(num: number, in_min: number, in_max: number, out_min: number, out_max: number) {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

}
