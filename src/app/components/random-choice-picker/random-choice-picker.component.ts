import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-random-choice-picker',
  templateUrl: './random-choice-picker.component.html',
  styleUrls: ['./random-choice-picker.component.scss']
})
export class RandomChoicePickerComponent implements OnInit {

  tagElements: any;
  textarea: any;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.tagElements = this.elRef.nativeElement.querySelector('#tags');
    this.textarea = this.elRef.nativeElement.querySelector('#textarea');
  }

  createTagsAndRandomSelectChoice(event: any) {
    this.createTags(event.target.value);

    if (event.key === 'Enter') {
      setTimeout(() => {
        event.target.value = '';
      }, 10);

      this.randomSelect();
    }

  }

  createTags(input: any) {
    const tags = input.split(',').filter((tag: any) => tag.trim() !== '').map((tag: any) => tag.trim())

    this.tagElements.innerHTML = ''

    tags.forEach((tag: any) => {
        // Skapa ett nytt span element via renderer2
        const tagEl = this.renderer.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        this.tagElements.appendChild(tagEl);
    })
  }

  randomSelect() {
    const times = 30;

    const interval = setInterval(() => {
      const randomTag = this.pickRandomTag();

      if (randomTag !== undefined) {
        this.highlightTag(randomTag);

        setTimeout(() => {
            this.unHighlightTag(randomTag);
        }, 100)
      }
    }, 100);

    setTimeout(() => {
      clearInterval(interval);

      setTimeout(() => {
          const randomTag = this.pickRandomTag();

          this.highlightTag(randomTag);
      }, 100)
    }, times * 100)
}

pickRandomTag() {
    const tags = this.elRef.nativeElement.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

highlightTag(tag: any) {
    tag.classList.add('highlight');
}

unHighlightTag(tag: any) {
    tag.classList.remove('highlight');
}

}
