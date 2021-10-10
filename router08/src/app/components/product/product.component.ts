/*
 * @Author: your name
 * @Date: 2021-10-10 18:24:15
 * @LastEditTime: 2021-10-10 19:20:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ngDemo-master/router08/src/app/components/product/product.component.ts
 */
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  constructor(public route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.route.queryParams);

    console.log(this.route.queryParams.subscribe((data) => {
      console.log(data,'获取到get传值');
    }));
  }
}
