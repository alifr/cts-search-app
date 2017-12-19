import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtDetailsComponent } from './ct-details.component';

describe('CtDetailsComponent', () => {
  let component: CtDetailsComponent;
  let fixture: ComponentFixture<CtDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
