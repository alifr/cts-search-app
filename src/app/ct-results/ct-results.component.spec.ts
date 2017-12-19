import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtResultsComponent } from './ct-results.component';

describe('CtResultsComponent', () => {
  let component: CtResultsComponent;
  let fixture: ComponentFixture<CtResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
