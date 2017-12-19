import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CtsServiceService, Trial} from '../cts-service.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/pluck';

@Component({
  selector: 'app-ct-details',
  templateUrl: './ct-details.component.html',
  styleUrls: ['./ct-details.component.css']
})
export class CtDetailsComponent implements OnInit {

  itemDetails$: Observable<Trial>;

  constructor(svc: CtsServiceService, route: ActivatedRoute) {
    // this.route.params.subscribe(params => {
    //   console.log('Detail Page Params', params);
    //   svc.getTrial(params.nciId)
    //     .subscribe((item: Trial) => {this.itemDetails$ = item; console.log('Results', this.itemDetails$); } );
    // });

    this.itemDetails$ = route.params
      .pluck<{}, string>('nciId')
      .switchMap(id => svc.getTrial(id))
      .share();

  }

  ngOnInit() {
  }

}
