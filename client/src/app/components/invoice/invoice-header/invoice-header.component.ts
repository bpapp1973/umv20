import { Component, Inject } from '@angular/core';
import { Invoice } from '../../../models/invoice';
import { InvoiceCreateComponent } from '../invoice-create/invoice-create.component';
import { InvoiceService } from '../../../services/invoice/invoice.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice-header',
  templateUrl: './invoice-header.component.html',
  styleUrls: ['./invoice-header.component.css'],
  providers: [InvoiceService]
})
export class InvoiceHeaderComponent {

  constructor(private invoiceService: InvoiceService, private router: Router ) {
  }

  addInvoice(): void {
    this.router.navigate(['invoice/create']);
  }
}
