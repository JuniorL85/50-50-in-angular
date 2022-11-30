import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-hidden-search-widget',
  templateUrl: './hidden-search-widget.component.html',
  styleUrls: ['./hidden-search-widget.component.scss']
})
export class HiddenSearchWidgetComponent implements OnInit {

  inputEl: any;
  searchEl: any;

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.inputEl = this.elRef.nativeElement.querySelector('.input');
    this.searchEl = this.elRef.nativeElement.querySelector('.search');
  }

  search() {
    this.searchEl.classList.toggle('active');
    this.inputEl.focus();
  }

}
