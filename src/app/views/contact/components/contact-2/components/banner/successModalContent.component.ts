import { Component } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'success-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Éxito</h4>
    </div>
    <div class="modal-body">
      <p>Su suscripción ha sido exitosa.</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary" (click)="close()">Cerrar</button>
    </div>
  `,
})
export class SuccessModalContent {
  constructor(private modalService: NgbModal) {}

  close() {
    this.modalService.dismissAll()
  }
}
