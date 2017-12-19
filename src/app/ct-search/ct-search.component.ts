import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

export interface CtSearchParams {
  keyword: string;
  age: string;
  zipCode: string;
}

@Component({
  selector: 'app-ct-search',
  templateUrl: './ct-search.component.html',
  styleUrls: ['./ct-search.component.css']
})
export class CtSearchComponent implements OnInit {

  searchFormGroup: FormGroup;

  constructor(fb: FormBuilder, private router: Router) {
    this.searchFormGroup = fb.group({
      keyword: ['', Validators.maxLength(100)],
      age: ['', Validators.maxLength(3)],
      zipCode: ['', Validators.maxLength(5)]
    });
  }

  ngOnInit() {
  }

  searchTrials(): void {
    console.log('Submitted!');
    console.log(this.searchFormGroup.value);
    this.router.navigate(['/results/'], { queryParams: this.searchFormGroup.value });
  }



}
