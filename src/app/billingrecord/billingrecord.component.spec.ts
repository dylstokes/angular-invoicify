import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingrecordComponent } from './billingrecord.component';

describe('BillingrecordComponent', () => {
  let component: BillingrecordComponent;
  let fixture: ComponentFixture<BillingrecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingrecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
