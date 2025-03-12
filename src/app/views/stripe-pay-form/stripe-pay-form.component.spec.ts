import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StripePayFormComponent } from './stripe-pay-form.component';

describe('StripePayFormComponent', () => {
  let component: StripePayFormComponent;
  let fixture: ComponentFixture<StripePayFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StripePayFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StripePayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
