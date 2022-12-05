import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sound-board',
  templateUrl: './sound-board.component.html',
  styleUrls: ['./sound-board.component.scss']
})
export class SoundBoardComponent {

  constructor(private elRef: ElementRef) {}

  playSound(sound: string) {
    this.stopSounds();
    this.elRef.nativeElement.querySelector(`#${sound}`).play();
  }

  stopSounds() {
    const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']
    sounds.forEach(sound => {
      const song = this.elRef.nativeElement.querySelector(`#${sound}`);

      song.pause()
      song.currentTime = 0;
    })
  }

}
