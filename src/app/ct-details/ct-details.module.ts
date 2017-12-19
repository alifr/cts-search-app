import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtDetailsComponent } from './ct-details.component';
import {RouterModule, Routes} from '@angular/router';
import {CtResultsComponent} from '../ct-results/ct-results.component';
import {CtSearchComponent} from '../ct-search/ct-search.component';


const detailsRoutes: Routes = [
  { path: ':nciId', component: CtDetailsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(detailsRoutes),
  ],
  declarations: [CtDetailsComponent]
})
export class CtDetailsModule { }
