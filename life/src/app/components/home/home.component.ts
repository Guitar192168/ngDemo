import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input('title')  title:any;

  public msg: string = '切换数据前';
  public userInfo: any = '';
  public oldUserInfo: any='';

  constructor() { }

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    
    console.log('ngOnChange触发');
    
  }

  ngOnInit(): void {
  }


  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log('ngDoCheck触发');
    if(this.oldUserInfo !== this.userInfo){
      console.log('更新了');
      this.oldUserInfo = this.userInfo;
      console.log(this.oldUserInfo,'this.oldUserInfo','--------','this.userInfo',this.userInfo);
      
    }else{
      console.log('没有更新');
    }
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log('ngAfterContentChecked触发');
  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log('ngAfterViewChecked触发');
    
  }


  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('触发销毁的生命周期');
  }

  changeMsg() {
    this.msg = '切换数据后，要触发生命周期';
  }

}
