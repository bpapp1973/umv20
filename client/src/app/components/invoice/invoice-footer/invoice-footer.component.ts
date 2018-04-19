import { Component, Input } from '@angular/core';
import { Invoice } from '../../../models/invoice';

@Component({
  selector: 'app-invoice-footer',
  templateUrl: './invoice-footer.component.html',
  styleUrls: ['./invoice-footer.component.css']
})
export class InvoiceFooterComponent {

  @Input() invoices: Invoice[];

  constructor() { }

}
