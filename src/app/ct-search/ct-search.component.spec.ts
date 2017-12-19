import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtSearchComponent } from './ct-search.component';

describe('CtSearchComponent', () => {
  let component: CtSearchComponent;
  let fixture: ComponentFixture<CtSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
