import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<span>Hello my name is Brendan</span>',
  /* template: `
  <h1>Hello World!</h1>
  `, */
  styles: [`
        span {
          font-weight: bold;
          border: 1px ridge blue;
          padding:5px;
        }
    `]
  /* styleUrls: ['./app.component.css'] */
  /* template: ...
  styles: ...
  viewProviders: ... */
})
/* 여러 줄 템플릿(template) 또는 스타일시트(styles)에는 역따옴표를 사용 */
export class AppComponent {
  title = 'Chapter 4 Intro';
}
