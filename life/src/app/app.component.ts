import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'life';
  public flag:Boolean=true;

  changeTitle() {
    this.title = '我是父组件的title'
  }

  changeComponent(){
    this.flag = !this.flag;
  }
}
