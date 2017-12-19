import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CtSearchComponent } from './ct-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CtsServiceService, MockTrialDetails } from '../cts-service.service';

const searchRoutes: Routes = [
  { path: '', component: CtSearchComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(searchRoutes),
    ReactiveFormsModule
  ],
  exports: [CtSearchComponent],
  declarations: [
    CtSearchComponent
  ]
})
export class CtSearchModule { }
