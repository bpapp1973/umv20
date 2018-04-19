import { Component, EventEmitter, Output, Inject } from '@angular/core';
import { Invoice } from '../../../models/invoice';
import { InvoiceService } from '../../../services/invoice/invoice.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice-create',
  templateUrl: './invoice-create.component.html',
  styleUrls: ['./invoice-create.component.css'],
  providers: [InvoiceService]
})
export class InvoiceCreateComponent {

  invoice: Invoice;

  constructor(private invoiceService: InvoiceService, private router: Router) {
    this.invoice = new Invoice();
  }

  cancel() {
    this.invoice = null;
    this.router.navigate(['invoice']);
  }

  createInvoice(invoice: Invoice) {
    this.invoiceService.createInvoice(invoice)
      .subscribe(
        (newInvoice) => {
          this.invoice = newInvoice;
        }
      );
    this.router.navigate(['invoice']);
  }

}
