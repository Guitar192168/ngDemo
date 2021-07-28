import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//双向绑定需要导入模块
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { NewsComponent } from './component/news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
