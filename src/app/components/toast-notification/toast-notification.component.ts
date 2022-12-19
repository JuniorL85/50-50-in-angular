import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-toast-notification',
  templateUrl: './toast-notification.component.html',
  styleUrls: ['./toast-notification.component.scss']
})
export class ToastNotificationComponent implements OnInit {

  toasts: any;
  messages = [
      'Message One',
      'Message Two',
      'Message Three',
      'Message Four',
  ];

  types = ['info', 'success', 'error'];

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.toasts = this.elRef.nativeElement.querySelector('#toasts');
  }

  createNotification(message = null, type = null) {
      const notif = this.renderer.createElement('div')
      notif.classList.add('toast')
      notif.classList.add(type ? type : this.getRandomType())

      notif.innerText = message ? message : this.getRandomMessage()

      this.toasts.appendChild(notif)

      setTimeout(() => {
          notif.remove()
      }, 3000)
  }

  getRandomMessage() {
      return this.messages[Math.floor(Math.random() * this.messages.length)];
  }

  getRandomType() {
      return this.types[Math.floor(Math.random() * this.types.length)];
  }

}
