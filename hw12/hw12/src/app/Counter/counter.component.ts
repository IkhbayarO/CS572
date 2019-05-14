import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <button id="dec" (click)="decrease()">-</button>
    {{counterValue}}
    <button id="inc" (click)="increment()">+</button>
  `,
  styles: [
      `
      #dec {
        width: 30px;
        height: 30px;
        background-color: aqua;
      }

      #inc {
        width: 30px;
        height: 30px;
        background-color: greenyellow;
      }
    `
  ]
})
export class CounterComponent implements OnInit {
  @Input() counterValue: number;
  @Output() counterChange;

  constructor() {
    this.counterValue = 0;
    this.counterChange = new EventEmitter();
  }

  ngOnInit() {
  }

  decrease() {
    this.counterChange.emit(--this.counterValue);
  }

  increment() {
    this.counterChange.emit(++this.counterValue);
  }
}


