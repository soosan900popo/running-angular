import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Route2Component } from './route2/route2.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'route2', component: Route2Component },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
