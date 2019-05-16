import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-smart',
  template: `
    <app-dumb [objects]="objects"></app-dumb>
  `,
  styles: []
})
export class SmartComponent implements OnInit {
  objects;
  constructor() {
    this.objects=["This is string", 1, true];
  }

  ngOnInit() {
  }

}
