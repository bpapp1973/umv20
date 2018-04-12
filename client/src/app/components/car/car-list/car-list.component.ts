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
    console.log('car-list - view car: ' + car.plateNumber);
    this.carsService.getCarById(car.id);
  }

  onRemoveCar(car: Car) {
    console.log('car-list - remove car: ' + car.plateNumber);
    this.carsService.deleteCarById(car.id);
  }
}
