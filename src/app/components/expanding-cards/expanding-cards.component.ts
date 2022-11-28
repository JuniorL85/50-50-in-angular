import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-expanding-cards',
  templateUrl: './expanding-cards.component.html',
  styleUrls: ['./expanding-cards.component.scss']
})
export class ExpandingCardsComponent implements OnInit {

  panels: any;

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.panels = this.elRef.nativeElement.querySelectorAll('.panel');
  }

  onPanelClick(text: string) {

    const panelsArray = Array.from(this.panels); // Gör om en nodeList till en array
    const filteredArray: any = panelsArray.filter((x: any) => x.innerText.toLowerCase() === text.toLowerCase())[0]; // Hitta rätt klickat element

    // Loopa igenom och ta bort alla "active" klasser på element
    this.panels.forEach(() => {
      this.removeActiveClasses();
    });

    filteredArray.classList.add('active'); // Sätt "active" klass på klickat element
  }

  removeActiveClasses() {
    this.panels.forEach((panel: any) => {
      panel.classList.remove('active');
    });
  }

}
