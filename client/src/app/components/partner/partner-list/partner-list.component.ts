import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PartnerService } from '../../../services/partner/partner.service';
import { Partner } from '../../../models/partner';
import { PartnerDetailsComponent } from '../partner-details/partner-details.component';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../../common/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-partner-list',
  templateUrl: './partner-list.component.html',
  styleUrls: ['./partner-list.component.css'],
  providers: [PartnerService]
})
export class PartnerListComponent implements AfterViewInit {

  @Input() partners: Partner[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dialogRef: MatDialogRef<ConfirmationDialogComponent>;

  displayedColumns = ['id', 'partnerName', 'partnerZip', 'partnerCountry', 'partnerCity', 'partnerAddress', 'partnerVatnumberEu', 'partnerVatnumberHu', 'partnerIbanNumber', 'partnerAccount', 'partnerCredit', 'partnerPromt', 'partnerPaymode', 'partnerMainpricelist', 'partnerGroup', 'partnerWarehouse', 'partnerCurrency', 'partnerMainpreference', 'partnerTransportZip', 'partnerTransportCity', 'partnerTransportAddress', 'partnerMailName', 'partnerMailZip', 'partnerMailCity', 'partnerMailAddress', 'partnerPhone', 'partnerFax', 'partnerMobile', 'partnerEmail', 'partnerWebsite', 'partnerPicture', 'partnerSale', 'partnerSalePremium', 'partnerContract', 'partnerWarriant', 'deleted', 'partnerLat', 'partnerLng', 'partnerRemoteId', 'partnerLang', 'storeId', 'password', 'rank', 'options'];
  dataSource = new MatTableDataSource();

  constructor(private partnerService: PartnerService, private router: Router, private dialog: MatDialog) {
  }

  ngAfterViewInit() {
    this.partnerService
      .getAllPartners()
      .subscribe(
        (partners) => {
          this.dataSource.data = partners;
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

  showPartner(id: number) {
    this.router.navigate(['partner/details', id]);
  }

  editPartner(id: number) {
    this.router.navigate(['partner/edit', id]);
  }

  removePartner(partner: Partner) {
    this.dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      disableClose: false
    });
    this.dialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';

    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.partnerService.deletePartnerById(partner.id)
          .subscribe(
            (_) => {
              console.log('subscribe');
              this.partners = this.partners.filter((c) => c.id !== partner.id);
            }
          );
      }
      this.dialogRef = null;
    });
  }
}
