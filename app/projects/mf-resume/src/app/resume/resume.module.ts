import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ResumeListComponent } from './resume-list/resume-list.component';

const routes: Routes = [
  {
    path: '',
    component: ResumeListComponent
  }
];

@NgModule({
  declarations: [
    ResumeListComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ResumeModule { }
