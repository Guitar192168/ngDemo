/*
 * @Author: your name
 * @Date: 2021-10-10 18:24:10
 * @LastEditTime: 2021-10-10 19:33:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ngDemo-master/router08/src/app/components/detail/detail.component.ts
 */
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  constructor(public route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(
      // this.route.queryParams.subscribe((data) => {
      this.route.params.subscribe((data) => {
        console.log(data,'来自动态路由的值');
      })
    );
  }
}
