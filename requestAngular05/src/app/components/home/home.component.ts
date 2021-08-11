import { Component, OnInit } from '@angular/core';

import { RequestService } from 'src/app/services/request.service';

// 要使用filter和map需要导入rxjs/operators
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public request: RequestService) { }

  ngOnInit(): void {

    // 1.同步获取
    let data = this.request.getData();
    console.log(data);



    //2. 回调函数
    this.request.getCallBackData((data: any) => {
      console.log(data);
    });

    // 3. rxjs
    let rxjsData = this.request.getRxjsData();

    rxjsData.subscribe(data => {
      console.log(data);
    })


    // 4.可以取消请求的rxjs
    let unSubscribeData = this.request.getUnsubscribeRxjs();

    let un = unSubscribeData.subscribe(data => {
      console.log(data);
    })

    setTimeout(() => {
      un.unsubscribe();
    }, 1000)


    // 5.不停发请求的rxjs
    let SetIntervalRxjs = this.request.getSetIntervalRxjs();

    // SetIntervalRxjs.subscribe((data:any) => {
    //   console.log(data);
    // });





    // 6.rxjs的map和filter
    let getMapRxjs = this.request.getMapRxjs();

    // getMapRxjs.pipe(
    //   filter((val:any)=>{
    //     return val % 2 === 0
    //   })
    // )

    // .subscribe(data => {
    //   console.log(data,'来自rxjs的data');
    // })

  }

}
