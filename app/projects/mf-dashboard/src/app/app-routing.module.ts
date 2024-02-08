import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('mfUsers/UsersModule').then(m => m.UsersModule),
  },
  {
    path: 'resume',
    loadChildren: () => import('mfResume/ResumeModule').then(m => m.ResumeModule),
  },
  {
    path: '**',
    redirectTo: 'users'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
