import { Component, Input, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { CarsService } from '../../../services/cars/cars.service';
import { Car } from '../../../models/cars';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
  providers: [CarsService]
})
export class CarListComponent {

  @Input() cars: Car[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = ['id', 'plateNumber', 'fuelNorm', 'fuelType', 'companyId', 'carsDeleted'];
  dataSource: MatTableDataSource<Car>;

  constructor(private carsService: CarsService) {
    this.dataSource = new MatTableDataSource(this.cars);
  }

  onViewCar(car: Car) {
    const id = this.cars.indexOf(car);
    this.carsService.getCarById(car.id)
      .subscribe(
        (newCar) => {
          this.cars[id] = newCar;
        }
      );
  }

  onRemoveCar(car: Car) {
    this.carsService.deleteCarById(car.id)
      .subscribe(
        (_) => {
          console.log('subscribe');
          this.cars = this.cars.filter((c) => c.id !== car.id);
        }
      );
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}



