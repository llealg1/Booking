import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { DateFormInputDirective } from '@/app/components/form/date-form-input.directive';
import { SelectFormInputDirective } from '@/app/components/form/select-form-input.directive';

@Component({
  selector: 'profile-personal-info',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, DateFormInputDirective, SelectFormInputDirective],
  templateUrl: './personal-info.component.html',
  styles: `
    .disabled {
      background-color: #e9ecef;
      cursor: not-allowed;
    }
  `,
})
export class PersonalInfoComponent implements OnInit, OnChanges {
  @Input() dataPersonalInfo: any;
  @Input() countrys: any;
  personalInfoForm: FormGroup;
  isEditMode = false;
  originalFormValues: any;

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
    });
  }

  ngOnInit() {
    this.updateFormValues();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['dataPersonalInfo'] && !changes['dataPersonalInfo'].firstChange) {
      this.updateFormValues();
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
      });
      this.originalFormValues = this.personalInfoForm.value;
    }
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
    if (!this.isEditMode) {
      this.personalInfoForm.patchValue(this.originalFormValues);
    }
  }

  onSave() {
    if (this.personalInfoForm.valid) {
      console.log(this.personalInfoForm.value);
      // Aquí puedes agregar la lógica para guardar los cambios
      this.isEditMode = false;
      this.originalFormValues = this.personalInfoForm.value;
    }
  }
}
