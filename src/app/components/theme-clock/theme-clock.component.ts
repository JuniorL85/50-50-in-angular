import { Component, ElementRef, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-clock',
  templateUrl: './theme-clock.component.html',
  styleUrls: ['./theme-clock.component.scss']
})
export class ThemeClockComponent implements OnInit {

  hourEl: any;
  minuteEl: any;
  secondEl: any;
  timeEl: any;
  dateEl: any;

  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  constructor(private elRef: ElementRef) {}

  @HostBinding('class.dark') isDarkMode: boolean = false; // för att kunna toggla mellan light- och darkmode

  ngOnInit(): void {
    this.hourEl = this.elRef.nativeElement.querySelector('.hour');
    this.minuteEl = this.elRef.nativeElement.querySelector('.minute');
    this.secondEl = this.elRef.nativeElement.querySelector('.second');
    this.timeEl = this.elRef.nativeElement.querySelector('.time');
    this.dateEl = this.elRef.nativeElement.querySelector('.date');

    this.setTime()
    setInterval(() => this.setTime(), 1000);
  }

  toggleDarkMode(event: any) {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
        this.elRef.nativeElement.style.setProperty('--primary-color', '#fff'); // Sätt om variabeln --primary-color
        this.elRef.nativeElement.style.setProperty('--secondary-color', '#333'); // Sätt om variabeln --secondary-color
        event.target.innerHTML = 'Light mode';
      } else {
        this.elRef.nativeElement.style.setProperty('--primary-color', '#000'); // Sätt om variabeln --primary-color
        this.elRef.nativeElement.style.setProperty('--secondary-color', '#fff'); // Sätt om variabeln --secondary-color
        event.target.innerHTML = 'Dark mode';
      }
  }

  setTime() {
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM'

    this.hourEl.style.transform = `translate(-50%, -100%) rotate(${this.scale(hoursForClock, 0, 12, 0, 360)}deg)`
    this.minuteEl.style.transform = `translate(-50%, -100%) rotate(${this.scale(minutes, 0, 60, 0, 360)}deg)`
    this.secondEl.style.transform = `translate(-50%, -100%) rotate(${this.scale(seconds, 0, 60, 0, 360)}deg)`

    this.timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
    this.dateEl.innerHTML = `${this.days[day]}, ${this.months[month]} <span class="circle">${date}</span>`

  }

  // StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
  scale(num: any, in_min: any, in_max: any, out_min: any, out_max: any) {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }

}
