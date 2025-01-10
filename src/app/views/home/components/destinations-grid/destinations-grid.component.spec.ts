import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationsGridComponent } from './destinations-grid.component';

describe('DestinationsGridComponent', () => {
  let component: DestinationsGridComponent;
  let fixture: ComponentFixture<DestinationsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestinationsGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinationsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
