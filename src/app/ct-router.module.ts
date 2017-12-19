import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', loadChildren: './ct-search/ct-search.module#CtSearchModule' },
  { path: 'results', loadChildren: './ct-results/ct-results.module#CtResultsModule' },
  { path: 'details', loadChildren: './ct-details/ct-details.module#CtDetailsModule' }
];

const config: ExtraOptions = {
  useHash: true,
  enableTracing: false // Turn this on to log routing events to the console
  // preloadingStrategy: PreloadAllModules
};

@NgModule({
  imports: [
    RouterModule.forRoot(routes, config)
  ],
  exports: [RouterModule]
})
export class CtRouterModule { }
