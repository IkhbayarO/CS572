import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
<app-counter [counterValue]="counter" (counterChange)="counterValue($event)"></app-counter>
    </div>
    <div>
      Component Counter Value={{counter}}
    </div>
  `,
  styles: [
    `
      div{
        display: block;
        padding: 0;
      }
      input{
        text-align: center;
        width: 60px;
        height: 20px;
      }
    `
  ]
})
export class AppComponent {
  title = 'hw12';
  counter=6;

  counterValue(counterValue){
    this.counter=counterValue;
  }
}

