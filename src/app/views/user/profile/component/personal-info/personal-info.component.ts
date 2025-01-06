import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { CommonModule, DatePipe } from '@angular/common'
@Component({
  selector: 'profile-personal-info',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './personal-info.component.html',
  styles: ``,
})
export class PersonalInfoComponent implements OnInit, OnChanges {
  @Input() dataPersonalInfo: any
  @Input() countrys: any
  personalInfoForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.personalInfoForm = this.fb.group({
      name: [''],
      last_name: [''],
      identityCard: [''],
      email: [''],
      phone: [''],
      birth_date: [''],
      country: [''],
      state: [''],
      street: [''],
    })
  }

  ngOnInit() {
    this.updateFormValues()
  }


  ngOnChanges(changes: SimpleChanges) {
    if (changes['dataPersonalInfo'] && !changes['dataPersonalInfo'].firstChange) {
      this.updateFormValues()
    }
  }

  updateFormValues() {
    if (this.dataPersonalInfo) {
      this.personalInfoForm.patchValue({
        name: this.dataPersonalInfo.name,
        last_name: this.dataPersonalInfo.last_name,
        identityCard: this.dataPersonalInfo.identityCard,
        email: this.dataPersonalInfo.email,
        phone: this.dataPersonalInfo.phone,
        birth_date: this.dataPersonalInfo.birth_date ? new DatePipe('en-US').transform(this.dataPersonalInfo.birth_date, 'dd-MM-yyyy') : '',
        country: this.dataPersonalInfo.country,
        state: this.dataPersonalInfo.state,
        street: this.dataPersonalInfo.street,
      })
    }
  }

  onSave() {
    if (this.personalInfoForm.valid) {
      console.log(this.personalInfoForm.value)
      // Aquí puedes agregar la lógica para guardar los cambios
    }
  }
}
