import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-drawing-app',
  templateUrl: './drawing-app.component.html',
  styleUrls: ['./drawing-app.component.scss']
})
export class DrawingAppComponent implements OnInit {

  canvas: any;
  ctx: any;
  sizeEl: any;
  colorEl: any;


  size = 10;
  isPressed = false;
  color: string = '';
  xVal: any;
  yVal: any;

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.canvas = this.elRef.nativeElement.querySelector('#canvas');
    this.ctx = this.canvas.getContext('2d');
    this.sizeEl = this.elRef.nativeElement.querySelector('#size');
    this.colorEl = this.elRef.nativeElement.querySelector('#color');
    this.color = this.colorEl.value;
  }

  decrease() {
    this.size -= 5;

    if (this.size < 5) {
      this.size = 5;
    }
    this.updateSizeOnScreen();
  }

  increase() {
    this.size += 5;

    if (this.size > 50) {
      this.size = 50;
    }
    this.updateSizeOnScreen();
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  changeColor(event: any) {
    this.color = event.target.value;
  }

  beginDrawing(event: any) {
    this.isPressed = true;

    this.xVal = event.offsetX;
    this.yVal = event.offsetY;
  }

  stopDrawing() {
    this.isPressed = false;

    this.xVal = undefined;
    this.yVal = undefined;
  }

  draw(event: any) {
    if (this.isPressed) {
      const x2 = event.offsetX
      const y2 = event.offsetY

      this.drawCircle(x2, y2)
      this.drawLine(this.xVal, this.yVal, x2, y2)

      this.xVal = x2
      this.yVal = y2
    }
  }

  drawCircle(x: any, y: any) {
      this.ctx.beginPath();
      this.ctx.arc(x, y, this.size, 0, Math.PI * 2);
      this.ctx.fillStyle = this.color;
      this.ctx.fill();
  }

  drawLine(x1: any, y1: any, x2: any, y2: any) {
      this.ctx.beginPath();
      this.ctx.moveTo(x1, y1);
      this.ctx.lineTo(x2, y2);
      this.ctx.strokeStyle = this.color;
      this.ctx.lineWidth = this.size * 2;
      this.ctx.stroke();
  }

  updateSizeOnScreen() {
    this.sizeEl.innerText = this.size;
  }
}
