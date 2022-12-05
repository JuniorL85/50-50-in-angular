import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-event-keycodes',
  templateUrl: './event-keycodes.component.html',
  styleUrls: ['./event-keycodes.component.scss']
})
export class EventKeycodesComponent {

  @HostListener('window:keydown', ['$event'])
  public onKeyDown(event: KeyboardEvent): void {
    this.eventKeys = event;
    if (this.eventKeys) {
      this.noKeyPressed = false;
    }
  }

  eventKeys!: KeyboardEvent;

  noKeyPressed: boolean = true;

}
