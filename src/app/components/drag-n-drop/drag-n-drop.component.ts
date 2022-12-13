import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-n-drop',
  templateUrl: './drag-n-drop.component.html',
  styleUrls: ['./drag-n-drop.component.scss']
})
export class DragNDropComponent implements OnInit {

  fill: any;
  empties: any;
  emptiesArray: any;
  testArray = ['Handla', 'Shoppa', 'Träna']
  testArray1 = ['Angular', 'Vue', 'React']
  testArray2 = ['Fotboll', 'Handboll', 'Basket']

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.fill = this.elRef.nativeElement.querySelector('.fill');
    this.empties = this.elRef.nativeElement.querySelectorAll('.empty');
    this.emptiesArray = Array.from(this.empties);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

}
