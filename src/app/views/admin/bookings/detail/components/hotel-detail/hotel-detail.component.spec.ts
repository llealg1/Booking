import { ComponentFixture, TestBed } from '@angular/core/testing'

import { HotelDetailComponent } from './hotel-detail.component'

describe('HotelDetailComponent', () => {
  let component: HotelDetailComponent
  let fixture: ComponentFixture<HotelDetailComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelDetailComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(HotelDetailComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
