import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
//引入表单模块，才可以双向绑定
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {FormComponent} from './component/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
