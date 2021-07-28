import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public info: any = {
    name: '默认名字',
    sex: '1',
    cities: ['深圳', '广州', '西峡'],
    city: '西峡',
    hobbies: [{title: '吃饭', checked: true}, {title: '睡觉', checked: false}, {title: '写代码', checked: true}],
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.info, '当前表单的值')
  }

}
