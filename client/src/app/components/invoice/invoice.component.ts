import { Component, OnInit, Input } from '@angular/core';
import { InvoiceService } from '../../services/invoice/invoice.service';
import { Invoice } from '../../models/invoice';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
  providers: [InvoiceService]
})
export class InvoiceComponent implements OnInit {

  @Input() invoices: Invoice[];

  constructor(private invoiceService: InvoiceService) { }

  public ngOnInit() {
    this.invoiceService
      .getAllInvoices()
      .subscribe(
        (invoices) => {
          this.invoices = invoices;
        }
      );
  }

}
