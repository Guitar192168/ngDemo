import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public msg: string = '我是父组件的值';
  public title: number = 123;

  constructor() {}

  ngOnInit(): void {  }

  fatherMethod() {
    console.log('我是父组件的方法');
  }

  formChild(e:any) {
    // 这里需要指定类型
    console.log(e);
    console.log('来自子组件');
  }
}
