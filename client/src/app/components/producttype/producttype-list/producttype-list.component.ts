import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProductTypeService } from '../../../services/producttype/producttype.service';
import { ProductType } from '../../../models/producttype';
import { ProductTypeDetailsComponent } from '../producttype-details/producttype-details.component';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../../common/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-producttype-list',
  templateUrl: './producttype-list.component.html',
  styleUrls: ['./producttype-list.component.css'],
  providers: [ProductTypeService]
})
export class ProductTypeListComponent implements AfterViewInit {

  @Input() producttypes: ProductType[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dialogRef: MatDialogRef<ConfirmationDialogComponent>;

  displayedColumns = ['id', 'productTypeName', 'productTypeDeleted', 'companyId', 'options'];
  dataSource = new MatTableDataSource();

  constructor(private producttypeService: ProductTypeService, private router: Router, private dialog: MatDialog) {
  }

  ngAfterViewInit() {
    this.producttypeService
      .getAllProductTypes()
      .subscribe(
        (producttypes) => {
          this.dataSource.data = producttypes;
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

  showProductType(id: number) {
    this.router.navigate(['producttype/details', id]);
  }

  editProductType(id: number) {
    this.router.navigate(['producttype/edit', id]);
  }

  removeProductType(producttype: ProductType) {
    this.dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      disableClose: false
    });
    this.dialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';

    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.producttypeService.deleteProductTypeById(producttype.id)
          .subscribe(
            (_) => {
              console.log('subscribe');
              this.producttypes = this.producttypes.filter((c) => c.id !== producttype.id);
            }
          );
      }
      this.dialogRef = null;
    });
  }
}
