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
}
