import { Component, OnInit } from '@angular/core';
import { Invoice } from '../../../models/invoice';
import { InvoiceService } from '../../../services/invoice/invoice.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-invoice-edit',
  templateUrl: './invoice-edit.component.html',
  styleUrls: ['./invoice-edit.component.css'],
  providers: [InvoiceService]
})
export class InvoiceEditComponent implements OnInit {

  invoice: Invoice;
  id: number;

  constructor(private invoiceService: InvoiceService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activeRoute.snapshot.params['id'];
    this.invoiceService
      .getInvoiceById(this.id)
      .subscribe(
        (invoice) => {
          this.invoice = invoice;
        }
      );
  }

  cancel() {
    this.invoice = null;
    this.router.navigate(['invoice']);
  }

  updateInvoice(invoice: Invoice) {
    this.invoiceService.updateInvoice(invoice)
      .subscribe(
        (updatedInvoice) => {
          this.invoice = updatedInvoice;
        }
      );
    this.router.navigate(['invoice']);
  }

}
