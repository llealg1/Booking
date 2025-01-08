import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderVerticalComponent } from './header-vertical.component';

describe('HeaderVerticalComponent', () => {
  let component: HeaderVerticalComponent;
  let fixture: ComponentFixture<HeaderVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderVerticalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
