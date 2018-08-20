import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { Route2Component } from './route2/route2.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Route2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
