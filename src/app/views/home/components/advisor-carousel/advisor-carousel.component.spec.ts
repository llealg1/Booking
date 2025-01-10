import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisorCarouselComponent } from './advisor-carousel.component';

describe('AdvisorCarouselComponent', () => {
  let component: AdvisorCarouselComponent;
  let fixture: ComponentFixture<AdvisorCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvisorCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvisorCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
