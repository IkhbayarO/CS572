
import { Component } from '@angular/core';

import { AppService } from './ser.service';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <nav>
        <a [routerLink]="['users']">Users</a>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    div {
      display: block;
      padding: 0;
      margin-left: 40em;
    }
  `]
})
export class AppComponent {
  title = 'lab14';

  constructor(public appService: AppService) {
    this.appService.getOnlineData()
      .pipe(map(res => JSON.stringify(res)))
      .subscribe(
        res => localStorage.usersData = res
      );
  }
}
