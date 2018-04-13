import { Component, Input } from '@angular/core';
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

  constructor(private carsService: CarsService) { }

  onViewCar(car: Car) {
    this.carsService.getCarById(car.id)
      .subscribe(
        (newCar) => {
          car = newCar;
        }
      );
    console.log('CarListComponent.onViewCar ' + car.fuelNorm);
  }

  onRemoveCar(car: Car) {
    console.log('car-list - remove car: ' + car.plateNumber);
    this.carsService.deleteCarById(car.id);
//    .subscribe(
//      (_) => {
//        console.log('subscribe');
//        this.cars = this.cars.filter((c) => c.id !== car.id);
//      }
//    );
  }
}
