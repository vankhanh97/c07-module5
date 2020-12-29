import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-project';
}

@Component({
  template: "Welcome",
  selector: "ok",
  styles: [`ok {
    color: red;
    font-size: 50px;
  }`]
})
export class AppComponent1 {
}

