import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {

  titleEl: any;

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.titleEl = this.elRef.nativeElement.querySelector('h1');

    setTimeout(() => {
      this.titleEl.classList.add('show');
    }, 1000);
  }

  title = '50 DAYS 50 PROJECTS';

}
