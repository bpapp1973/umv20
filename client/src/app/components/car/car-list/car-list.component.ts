import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CarsService } from '../../../services/cars/cars.service';
import { Car } from '../../../models/cars';
import { CarDetailsComponent } from '../car-details/car-details.component';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
  providers: [CarsService]
})
export class CarListComponent implements AfterViewInit {

  @Input() cars: Car[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = ['id', 'plateNumber', 'fuelNorm', 'fuelType', 'companyId', 'carsDeleted', 'remove'];
  dataSource = new MatTableDataSource();

  constructor(private carsService: CarsService, private dialog: MatDialog) {
    this.carsService
      .getAllCars()
      .subscribe(
        (cars) => {
          this.dataSource.data = cars;
        }
      );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  viewCar(selectedCar: Car): void {
    const dialogRef = this.dialog.open(CarDetailsComponent, {
      width: '500px',
      data: { selectedCar }
    });

    dialogRef.afterClosed().subscribe(result => { });
  }

  removeCar(car: Car) {
    this.carsService.deleteCarById(car.id)
      .subscribe(
        (_) => {
          console.log('subscribe');
          this.cars = this.cars.filter((c) => c.id !== car.id);
        }
      );
  }

}
