import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { InvoiceService } from '../../../services/invoice/invoice.service';
import { Invoice } from '../../../models/invoice';
import { InvoiceDetailsComponent } from '../invoice-details/invoice-details.component';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../../common/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css'],
  providers: [InvoiceService]
})
export class InvoiceListComponent implements AfterViewInit {

  @Input() invoices: Invoice[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dialogRef: MatDialogRef<ConfirmationDialogComponent>;

  displayedColumns = ['id', 'invoiceType', 'invoiceTypeName', 'invoiceWarehouseMove', 'invoicePartnerId', 'invoicePartnerName', 'invoicePartnerTransport', 'invoicePaymode', 'invoiceStartDate', 'invoiceEndDate', 'invoicePayDate', 'invoiceCurrency', 'invoicePricelist', 'invoiceNetto', 'invoiceVat', 'invoiceBrutto', 'invoiceId', 'invoiceNumber', 'invoiceUserId', 'companyId', 'deleted', 'invoiceCreated', 'invoiceNote', 'invoiceBenefitCode', 'transferPrice', 'transferDate', 'invoiceSale', 'html', 'userNote', 'emailSend', 'options'];
  dataSource = new MatTableDataSource();

  constructor(private invoiceService: InvoiceService, private router: Router, private dialog: MatDialog) {
  }

  ngAfterViewInit() {
    this.invoiceService
      .getAllInvoices()
      .subscribe(
        (invoices) => {
          this.dataSource.data = invoices;
        }
      );
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  showInvoice(id: number) {
    this.router.navigate(['invoice/details', id]);
  }

  editInvoice(id: number) {
    this.router.navigate(['invoice/edit', id]);
  }

  removeInvoice(invoice: Invoice) {
    this.dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      disableClose: false
    });
    this.dialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';

    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.invoiceService.deleteInvoiceById(invoice.id)
          .subscribe(
            (_) => {
              console.log('subscribe');
              this.invoices = this.invoices.filter((c) => c.id !== invoice.id);
            }
          );
      }
      this.dialogRef = null;
    });
  }
}
