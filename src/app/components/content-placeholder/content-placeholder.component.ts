import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-placeholder',
  templateUrl: './content-placeholder.component.html',
  styleUrls: ['./content-placeholder.component.scss']
})
export class ContentPlaceholderComponent implements OnInit {

  header: any;
  title: any;
  excerpt: any;
  profile_img: any;
  name: any;
  date: any;

  animated_bgs: any;
  animated_bg_texts: any;

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.header = this.elRef.nativeElement.querySelector('#header');
    this.title = this.elRef.nativeElement.querySelector('#title');
    this.excerpt = this.elRef.nativeElement.querySelector('#excerpt');
    this.profile_img = this.elRef.nativeElement.querySelector('#profile_img');
    this.name = this.elRef.nativeElement.querySelector('#name');
    this.date = this.elRef.nativeElement.querySelector('#date');

    this.animated_bgs = this.elRef.nativeElement.querySelectorAll('.animated-bg');
    this.animated_bg_texts = this.elRef.nativeElement.querySelectorAll('.animated-bg-text');

    setTimeout(() => {
      this.header.innerHTML =
        '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" height="200px" width="350px"/>'
      this.title.innerHTML = 'Lorem ipsum dolor sit amet'
      this.excerpt.innerHTML =
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis'
      this.profile_img.innerHTML =
        '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" height="40px" width="40px" />'
      this.name.innerHTML = 'John Doe'
      this.date.innerHTML = 'Oct 08, 2020'

      this.animated_bgs.forEach((bg: any) => bg.classList.remove('animated-bg'));
      this.animated_bg_texts.forEach((bg: any) => bg.classList.remove('animated-bg-text'));
    }, 2500);
  }

}
