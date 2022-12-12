import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-button-ripple',
  templateUrl: './button-ripple.component.html',
  styleUrls: ['./button-ripple.component.scss']
})
export class ButtonRippleComponent implements OnInit {

  buttonEl: any;

  constructor(private renderer: Renderer2, private elRef: ElementRef) {}

  ngOnInit(): void {
    this.buttonEl = this.elRef.nativeElement.querySelector('.ripple')
  }

  rippleEffect(e: any) {
    const x = e.pageX
    const y = e.pageY

    const buttonTop = e.target.offsetTop
    const buttonLeft = e.target.offsetLeft

    const xInside = x - buttonLeft - 280 // Had to add -280 to get right value to be inside button
    const yInside = y - buttonTop - 60 // Had to add -60 to get right value to be inside button

    const circle = this.renderer.createElement('span')
    circle.classList.add('circle')
    circle.style.top = yInside + 'px'
    circle.style.left = xInside + 'px'

    this.buttonEl.appendChild(circle)

    setTimeout(() => circle.remove(), 2000)
  }

}
