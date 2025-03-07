import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { ContactService } from '@/app/core/services/contact.service'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
  type UntypedFormGroup,
} from '@angular/forms'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { Router } from '@angular/router'
import { SuccessModalContent } from './successModalContent.component'

@Component({
  selector: 'contact2-banner',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './banner.component.html',
  styles: ``,
})
export class BannerComponent {
  contactForm!: UntypedFormGroup
  submitted: boolean = false

  private fb = inject(UntypedFormBuilder)

  constructor(private contactService: ContactService, private modalService: NgbModal, private router: Router) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
    })
  }

  get form() {
    return this.contactForm.controls
  }
  onSubmit() {
    this.submitted = true

    if (this.contactForm.invalid) {
      return
    }
    console.log(this.contactForm.controls['email'].value);
    this.contactService.subscriptionEmail(this.contactForm.controls['email'].value).subscribe(
      (data) => {
        console.log(data)
        this.showSuccessModal()
      },
      (error) => {
        console.log(error)
      }
    )
  }

  showSuccessModal() {
    const modalRef = this.modalService.open(SuccessModalContent)
    modalRef.result.then(
      () => {
        setTimeout(() => {
          this.router.navigate(['/'])
        }, 1000)
      },
      () => {
        setTimeout(() => {
          this.router.navigate(['/'])
        }, 1000)
      }
    )
  }
}
