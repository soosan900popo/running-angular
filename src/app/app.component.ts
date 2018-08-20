import { Component, OnInit } from "@angular/core";
// import { Observable } from 'rxjs/observable';
// import { Subscription } from 'rxjs/Subscription';
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit{
  private name: Observable<Array<number>>;

  ngOnInit() {
    this.name = new Observable(observable => {
      observable.next("my observable");
      observable.complete();
    },
    var subscribe = this.name.subscribe(
      data=> { console.log(data) },
      error=> { errorHandler(error) },
      ()=> { /* final() */}
    );
    subscribe.unsubscribe();
  }
}
