import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// 双向绑定
import { FormsModule } from '@angular/forms';
// 引入HttpClientModule
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
