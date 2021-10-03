import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'auth-app';
  opened = false;
  logChange(index: any){
    console.log(index);
  }
  log(state: any) {
    console.log(state);
  }
}
