import { Component, OnInit } from '@angular/core';

// 使用的页面也要引入         当作一个服务

// post请求还要引入一个HttpHeaders
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  // public list: Array<object> = []
  public list: any = [];
  constructor(public http: HttpClient) { }

  ngOnInit(): void {
  }

  getData() {

    let api = "http://a.itying.com/api/productlist";
    // 底层用的rxjs
    this.http.get(api).subscribe((res: any) => {
      console.log(res);
      this.list = res.result;
    })
  }

  postLogin() {
    const httpOptions = { headers: new HttpHeaders(({ "Content-type": "application/json" })) }

    const api = '';
    this.http.post(api,httpOptions).subscribe(res =>{
      console.log(res);
      
    })
  }

}
