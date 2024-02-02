import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BooksListComponent } from './books-list/books-list.component';
import { BookUpsertComponent } from './book-upsert/book-upsert.component';

const routes: Routes = [
  {
    path: '',
    component: BooksListComponent
  },
  {
    path: 'upsert',
    component: BookUpsertComponent
  }
];

@NgModule({
  declarations: [
    BooksListComponent,
    BookUpsertComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class BooksModule { }
