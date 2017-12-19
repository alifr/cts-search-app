import { Component, OnInit } from '@angular/core';
import {CtsServiceService, Trial, Trials} from '../cts-service.service';
import {ActivatedRoute} from '@angular/router';
import {CtSearchParams} from '../ct-search/ct-search.component';

@Component({
  selector: 'app-ct-results',
  templateUrl: './ct-results.component.html',
  styleUrls: ['./ct-results.component.css']
})
export class CtResultsComponent implements OnInit {

  searchService: CtsServiceService;
  trialData$: Trial[];

  constructor(svc: CtsServiceService, private route: ActivatedRoute) {
    this.searchService = svc;
    this.route.queryParams.subscribe(params => {
      console.log('Search Terms', params);
      this.searchService.getTrials(params as CtSearchParams)
        .subscribe((trials: Trials) => {
          this.trialData$ = trials.trials;
          console.log('Number of Results:', trials.total);
          console.log('Results', this.trialData$);
        });

    });
  }

  ngOnInit() {

  }


}
