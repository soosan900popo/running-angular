import { Component } from '@angular/core';

@Component({
  selector: 'simple-constructor',
  template: `
    <p>Hello today is {{today}}`,
  /* styleUrls: ['./app.component.css'] */
  /* templateUrls: ...
  styles: ...
  viewProviders: ... */
})
/* 여러 줄 템플릿(template) 또는 스타일시트(styles)에는 역따옴표를 사용 */

export class UsingAContstructor {
  today: Date
  constructor() {
    this.today = new Date();
  }
}
