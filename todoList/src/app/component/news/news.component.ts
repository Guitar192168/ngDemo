/**
 *  ViewChild
 * 
 * ①第一种是获取DOM节点
 *  1. 获取DOM节点
 * 
 *  <div #myBox>
        学习一下ViewChild
    </div>
    
    2.要想使用还需要导入  ViewChild模块

    import { ViewChild} from '@angular/core';

    3.  在类里面 声明 @viewChild('myBox')   （后半部分可以随意起名）myBox:any  

    然后可以直接this.myBox      其实真实的dom对象是给了nativeElement
    this.myBox.nativeElement

    4. 这种方法想要获取dom，最早得在ngAfterViewInit()生命周期里
     

    ②第二种是父组件调用子组件的方法
    
 * 
 */



import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  // 获取DOM节点
  @ViewChild('myBox') myBox: any;
  @ViewChild('header') header: any;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.myBox, 'ngOnInit里查看dom节点')
  }


  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(this.myBox, 'ngAfterViewInit里面查看dom节点')
    console.log(this.myBox.nativeElement, 'ngAfterViewInit里面查看dom节点');
    //其实是把dom节点赋值给nativeElement
    this.myBox.nativeElement.style.backgroundColor = '#008c8c';
    console.log(this.myBox.nativeElement.innerHTML);

    this.header.run()
  }

  getChildMethod(){
    console.log('11');
    this.header.run()
  }

}
