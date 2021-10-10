/*
 * @Author: your name
 * @Date: 2021-10-10 18:22:08
 * @LastEditTime: 2021-10-10 19:25:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ngDemo-master/router08/src/app/app-routing.module.ts
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'detail/:userId',//动态路由
    component: DetailComponent,
  },
  {
    path: 'product',
    component: ProductComponent,
  },
  //如果匹配不到路由，默认挂载的组件
  {
    path: '**', //注意这里是两个  星星**
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
