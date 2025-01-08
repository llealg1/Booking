import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasheaBannerComponent } from './cashea-banner.component';

describe('CasheaBannerComponent', () => {
  let component: CasheaBannerComponent;
  let fixture: ComponentFixture<CasheaBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasheaBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasheaBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
