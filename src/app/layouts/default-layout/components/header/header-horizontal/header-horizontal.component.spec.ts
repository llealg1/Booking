import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderHorizontalComponent } from './header-horizontal.component';

describe('HeaderHorizontalComponent', () => {
  let component: HeaderHorizontalComponent;
  let fixture: ComponentFixture<HeaderHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderHorizontalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
