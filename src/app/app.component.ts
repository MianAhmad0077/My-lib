import { Component } from '@angular/core';
import { SharedLibrary } from './common/custom_library/date-range-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My-lib';

  constructor(
   private sharedLibrary: SharedLibrary
  ){}

  myFunc(): void {
 this.sharedLibrary.sharedFunc();
  }

}
