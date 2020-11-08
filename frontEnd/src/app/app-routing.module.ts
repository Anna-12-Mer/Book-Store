import { Component, NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HoomPageComponent } from './hoom-page/hoom-page.component';
import { AddBookPageComponent } from './add-book-page/add-book-page.component';

const routes: Routes = [
  { path: '', component: HoomPageComponent },
  { path: 'add-book', component: AddBookPageComponent }
]


@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
