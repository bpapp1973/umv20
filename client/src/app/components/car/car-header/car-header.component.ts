import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Car } from '../../../models/cars';
import { CarCreateComponent } from '../car-create/car-create.component';
import { CarsService } from '../../../services/cars/cars.service';

@Component({
  selector: 'app-car-header',
  templateUrl: './car-header.component.html',
  styleUrls: ['./car-header.component.css'],
  providers: [CarsService]
})
export class CarHeaderComponent {

//  @Output() create: EventEmitter<Car> = new EventEmitter();

  constructor(private carsService: CarsService, private dialog: MatDialog) {
  }

  addCar(): void {
    let car = new Car();
    const dialogRef = this.dialog.open(CarCreateComponent, {
      width: '500px',
      data: { car }
    });

    dialogRef.afterClosed().subscribe(result => {
      car = result;
      if (car) {
        this.onCreateCar(car);
        console.log('Saved', car.plateNumber);
      }
    });
  }

  onCreateCar(car: Car) {
    this.carsService.createCar(car)
      .subscribe(
        (newCar) => {
         // this.cars = this.cars.concat(newCar);
        }
      );
    console.log('CarHeaderComponent.onCreateCar', car.plateNumber);
  }

}
