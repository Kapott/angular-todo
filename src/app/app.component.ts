import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todo app';
  name:string = 'Tom';

  constructor () {
    this.changeName('Tiago');
  }

  changeName(name:string):void {
    this.name = name;
  }
}
