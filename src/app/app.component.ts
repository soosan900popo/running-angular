import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ["./app.component.css"],
  /* template: ... */
  /* styles: ... */
  /* viewProviders: ... */
})
/* 여러 줄 템플릿(template) 또는 스타일시트(styles)에는 역따옴표를 사용 */

export class AppComponent{
  title = 'Chapter 4 Using External templates and styles';
}
