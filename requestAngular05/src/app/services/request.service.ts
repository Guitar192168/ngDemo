import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }

  // 同步方法
  getData() {
    return '来自request服务的数据，同步数据'
  }

  // 回调解决异步
  getCallBackData(cb: any) {

    setTimeout(() => {
      var data = '来自回调函数的data';

      cb(data)

      // return data;
    }, 1000)
  }

  // rxjs处理异步
  getRxjsData() {
    return new Observable(observer => {
      setTimeout(() => {
        var username = 'rxjs的name';
        observer.next(username);
      }, 2000)
    })
  }


  // todo
  // rxjs可以主动取消请求 （其实请求是发送了的，只是不接收

  getUnsubscribeRxjs() {
    return new Observable(observer => {
      setTimeout(() => {
        let name = '来自可以取消请求的rxjs';

        observer.next(name);
      }, 3000)
    })
  }
}
