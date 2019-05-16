import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SmartComponent } from './components//smart.component';
import { DumbComponent } from './components/dumb.component';
import { IsVisibleDirective } from './directives/is-visible.directive';
import { MakeBiggerDirective } from './directives/make-bigger.directive';
import { MultiPipe } from './pipes/multi.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SmartComponent,
    DumbComponent,
    IsVisibleDirective,
    MakeBiggerDirective,
    MultiPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
