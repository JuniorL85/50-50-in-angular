import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-wave',
  templateUrl: './form-wave.component.html',
  styleUrls: ['./form-wave.component.scss']
})
export class FormWaveComponent implements OnInit {

  labelEl: any;
  spanEl: any;

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    const labels = this.elRef.nativeElement.querySelectorAll('.form-control label')

    console.log('innan ', labels)

    labels.forEach((label: any) => {
      label.innerHTML = label.innerText
      .split('')
      .map((letter: any, idx: any) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
      .join('')
    })

    console.log('efter ', labels)
    this.spanEl = this.elRef.nativeElement.querySelectorAll('span');
    console.log(this.spanEl)
  }

  onInputClick() {
    this.spanEl.forEach((span: any) => {
      span.classList.add('wave-animation');
    })
  }

}
