import { Component, Inject, Input, OnInit } from '@angular/core';
import { Invoice } from '../../../models/invoice';
import { InvoiceService } from '../../../services/invoice/invoice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.css'],
  providers: [InvoiceService]
})
export class InvoiceDetailsComponent implements OnInit {

  invoice: Invoice;
  id: number;

  constructor(private router: Router, private activeRoute: ActivatedRoute, private invoiceService: InvoiceService ) {
  }

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

  close() {
    this.router.navigate(['invoice']);
 //   this.dialogRef.close();
  }
}
