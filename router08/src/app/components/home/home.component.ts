/*
 * @Author: your name
 * @Date: 2021-10-10 18:24:04
 * @LastEditTime: 2021-10-10 19:11:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ngDemo-master/router08/src/app/components/home/home.component.ts
 */
import {Component, OnInit} from '@angular/core';

import {Router, NavigationExtras} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public list: any = [];

  constructor(public router: Router) {
  }

  ngOnInit(): void {
    for (let i = 0; i <= 9; i++) {
      this.list.push('这是第' + i + '个数据');
    }
  }

  goToPage() {
    this.router.navigate(['/detail/', '1234'])
    // this.router.navigate(['/detail/'])
  }


  goGetPage() {
    let queryParams: NavigationExtras = {
      queryParams: {
        uuuuuid: 1
      }
    }

    // 无法跳转到动态路由的页面
    this.router.navigate(['/product'], queryParams)
  }


}
