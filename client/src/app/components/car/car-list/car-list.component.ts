import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CarService } from '../../../services/car/car.service';
import { Car } from '../../../models/car';
import { CarDetailsComponent } from '../car-details/car-details.component';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../../common/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
  providers: [CarService]
})
export class CarListComponent implements AfterViewInit {

  @Input() cars: Car[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dialogRef: MatDialogRef<ConfirmationDialogComponent>;

  displayedColumns = ['id', 'plateNumber', 'fuelNorm', 'fuelType', 'companyId', 'carsDeleted', 'options'];
  dataSource = new MatTableDataSource();

  constructor(private carService: CarService, private router: Router, private dialog: MatDialog) {
  }

  ngAfterViewInit() {
    this.carService
      .getAllCars()
      .subscribe(
        (cars) => {
          this.dataSource.data = cars;
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

  showCar(id: number) {
    this.router.navigate(['car/details', id]);
  }

  editCar(id: number) {
    this.router.navigate(['car/edit', id]);
  }

  removeCar(car: Car) {
    this.dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      disableClose: false
    });
    this.dialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';

    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.carService.deleteCarById(car.id)
          .subscribe(
            (_) => {
              console.log('subscribe');
              this.cars = this.cars.filter((c) => c.id !== car.id);
            }
          );
      }
      this.dialogRef = null;
    });
  }
}
