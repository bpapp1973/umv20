import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';

import { InvoiceService } from '../../services/invoice/invoice.service';

import { InvoiceComponent } from '../../components/invoice/invoice.component';
import { InvoiceHeaderComponent } from '../../components/invoice/invoice-header/invoice-header.component';
import { InvoiceListComponent } from '../../components/invoice/invoice-list/invoice-list.component';
import { InvoiceFooterComponent } from '../../components/invoice/invoice-footer/invoice-footer.component';
import { InvoiceDetailsComponent } from '../../components/invoice/invoice-details/invoice-details.component';
import { InvoiceEditComponent } from '../../components/invoice/invoice-edit/invoice-edit.component';
import { InvoiceCreateComponent } from '../../components/invoice/invoice-create/invoice-create.component';
import { ConfirmationDialogComponent } from '../../components/common/confirmation-dialog/confirmation-dialog.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    InvoiceComponent
  ],
  declarations:
    [
      InvoiceComponent,
      InvoiceHeaderComponent,
      InvoiceListComponent,
      InvoiceFooterComponent,
      InvoiceDetailsComponent,
      InvoiceEditComponent,
      InvoiceCreateComponent,
      ConfirmationDialogComponent
    ],
  providers: [InvoiceService],
  entryComponents: [
    InvoiceDetailsComponent,
    InvoiceEditComponent,
    InvoiceCreateComponent,
    ConfirmationDialogComponent]
})
export class InvoiceModule { }
