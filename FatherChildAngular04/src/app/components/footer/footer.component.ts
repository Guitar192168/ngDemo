import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Output() private outer = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}



  childMethod() {
    this.outer.emit('我是子组件传递给父组件的');
  }
}
