import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-counter [counterValue]="counter1" (counterChange)="counterValue1($event)"></app-counter>
      <div>
        Component Counter Value1={{counter1}}
      </div>
    </div>

    <div>
      <app-counter [counterValue]="counter2" (counterChange)="counterValue2($event)"></app-counter>
      <div>
        Component Counter Value2={{counter2}}
      </div>
    </div>

  `,
  styles: [
      `
      div {
        margin-left: auto;
        margin-right: auto;
        padding: 0;
      }

      input {
        text-align: center;
        width: 60px;
        height: 20px;
      }
    `
  ]
})
export class AppComponent {
  title = 'hw12';
  counter1 = 6;
  counter2 = 0;

  counterValue1(counterValue) {
    this.counter1 = counterValue;
  }

  counterValue2(counterValue) {
    this.counter2 = counterValue;
  }
}

