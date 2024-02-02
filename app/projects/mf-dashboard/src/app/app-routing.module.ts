import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('mfUsers/UsersModule').then(m => m.UsersModule),
  },
  {
    path: 'books',
    loadChildren: () => import('mfBooks/BooksModule').then(m => m.BooksModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
