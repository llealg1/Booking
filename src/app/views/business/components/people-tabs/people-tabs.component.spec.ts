import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleTabsComponent } from './people-tabs.component';

describe('PeopleTabsComponent', () => {
  let component: PeopleTabsComponent;
  let fixture: ComponentFixture<PeopleTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeopleTabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
