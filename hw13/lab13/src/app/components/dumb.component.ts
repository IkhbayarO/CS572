import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dumb',
  template: `
    <h1 [isVisible]="h1Visibility">Visibility header</h1>
    <ul>
      <li *ngFor="let object of objects, let i=index">{{i+1}}: {{object}}</li>
    </ul>
   <div makeBigger>
     Make bigger by 2px
   </div>
    <input type="text" #input (keyup)="pipeData">
      <p>{{input.value| multi:3}}</p>
    
  `,
  styles: []
})
export class DumbComponent implements OnInit {
  @Input() objects;
  h1Visibility: boolean=true;
  pipeData=new Promise(((resolve, reject) => {
    setTimeout(()=>resolve("Data is here"), 1000);
  }));
  constructor() { }

  ngOnInit() {
  }

}
