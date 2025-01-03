import { CommonModule } from '@angular/common'
import { Component, Inject } from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'

@Component({
  selector: 'app-emergency-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './emergency-contact.component.html',
  styleUrl: './emergency-contact.component.scss',
})
export class EmergencyContactComponent {
  updateEmail!: FormGroup
  formSubmit: boolean = false

  constructor(private fb: FormBuilder) {
    this.updateEmail = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    })
  }

  get form() {
    return this.updateEmail.controls
  }

  onSubmit() {
    this.formSubmit = true
  }
}
