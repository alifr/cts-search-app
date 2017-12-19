import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtResultsComponent } from './ct-results.component';
import {RouterModule, Routes} from '@angular/router';

const resultsRoutes: Routes = [
  { path: '', component: CtResultsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(resultsRoutes),
  ],
  declarations: [CtResultsComponent]
})
export class CtResultsModule { }
