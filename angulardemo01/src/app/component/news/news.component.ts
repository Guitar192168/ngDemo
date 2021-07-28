import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  title: string = '123'

  public name: string = '杨'
  public value: number = 123

  constructor() {
  }

  ngOnInit(): void {
  }

  getData(e: any) {
    console.log(e)
    console.log(e.target)
    let btnDom = e.target;
    btnDom.style = "color:#008c8c"
    console.log('测试定义方法')
  }

  observerKeyDown(e: any) {
    if (e.keyCode == 13) {
      console.log('按了回车')
    } else {
      console.log(e.target.value, '这里慢一拍，可以改成KeyUp')
    }
    console.log(e)
  }
}
