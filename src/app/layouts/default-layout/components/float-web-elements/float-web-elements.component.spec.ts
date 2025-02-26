import { ComponentFixture, TestBed } from '@angular/core/testing'

import { FloatWebElementsComponent } from './float-web-elements.component'

describe('FloatWebElementsComponent', () => {
  let component: FloatWebElementsComponent
  let fixture: ComponentFixture<FloatWebElementsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatWebElementsComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(FloatWebElementsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
