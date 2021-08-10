import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  //  todo 这里为何不能传string，必须要any
  @Input() msg: any;
  @Input() title:any;
  @Input() fatherMethod:any;
  constructor() {}

  ngOnInit(): void {
    
  }


  getFatherMethod(){
    // 这样才能触发父级传进来的方法
    // 执行父组件的方法
    this.fatherMethod();
    
  }

 
  

}
