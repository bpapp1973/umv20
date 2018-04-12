import { Component, Input, EventEmitter, Output, Inject } from '@angular/core';
import { Car } from '../../../models/cars';

@Component({
  selector: 'app-car-list-item',
  templateUrl: './car-list-item.component.html',
  styleUrls: ['./car-list-item.component.css']
})
export class CarListItemComponent {
  @Input() car: Car;

  @Output()
  view: EventEmitter<Car> = new EventEmitter();
  remove: EventEmitter<Car> = new EventEmitter();

  constructor() { }

  viewCar(car: Car) {
    console.log('car-list-item - view car: ' + car.plateNumber);
    this.view.emit(car);
  }
  removeCar(car: Car) {
    console.log('car-list-item - remove car: ' + car.plateNumber);
    this.remove.emit(car);
  }

}
