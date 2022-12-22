import { Component } from '@angular/core';

@Component({
  selector: 'app-double-click-heart',
  templateUrl: './double-click-heart.component.html',
  styleUrls: ['./double-click-heart.component.scss']
})
export class DoubleClickHeartComponent {

  timesClicked: number = 0;
  liked = false;

  createHeart() {
    this.liked = true;
    this.timesClicked++;

    setTimeout(() => this.liked = false, 1000)
}

}
