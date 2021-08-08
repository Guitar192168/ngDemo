import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    //获取不到dom节点

    let box: any = document.getElementById('box');
    console.log(box.innerHTML)
    box.style.color = '#008c8c';
    box.style.height = 200
    box.style.weight = 200
  }

  //视图加载完成以后触发的方法 dom加载完成  建议把dom元素都放在这个里面
  ngAfterViewInit(): void {
    let box: any = document.getElementById('box');

    box.style.color = '#008c8c';
    box.style.height = '200px';
    box.style.weight = '200px';
    console.log(box.innerHTML)
  }

}
