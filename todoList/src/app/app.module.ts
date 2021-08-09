import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

//引入并配置服务
import {StorageService} from './services/storage.service';
import {SearchComponent} from './component/search/search.component';
import {NewsComponent} from './component/news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
