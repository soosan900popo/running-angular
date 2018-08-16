import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <myInput name="Brendan" occupation="Student/Author"></myInput>
    <myInput name="Brad" occupation="Analyst/Author"></myInput>
    <myInput name="Caleb" occupation="Student/Author"></myInput>
    <myInput></myInput>`
  /* templateUrl: './app.component.html', */
  /* styleUrls: ["./app.component.css"], */
  /* styles: ... */
  /* viewProviders: ... */
})
/* 여러 줄 템플릿(template) 또는 스타일시트(styles)에는 역따옴표를 사용 */

export class AppComponent {
  title = 'Using Inputs in Angular';
}
