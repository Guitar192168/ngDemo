import { Component, OnInit } from '@angular/core';

import { RequestService } from 'src/app/services/request.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public request: RequestService) { }

  ngOnInit(): void {

    let data = this.request.getData();
    console.log(data);



    // 回调函数
    this.request.getCallBackData((data:any) => {
      console.log(data);
    });

  

  }

}
