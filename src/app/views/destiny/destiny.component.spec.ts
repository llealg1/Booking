import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinyComponent } from './destiny.component';

describe('DestinyComponent', () => {
  let component: DestinyComponent;
  let fixture: ComponentFixture<DestinyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestinyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
