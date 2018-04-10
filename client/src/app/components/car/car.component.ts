// ng generate component Car --module modules/cars/cars.module.ts
// move under components folder
// https://www.sitepoint.com/understanding-component-architecture-angular/
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Car } from '../../models/cars';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {

  @Input() car: Car;

  @Output()
  remove: EventEmitter<Car> = new EventEmitter();

  constructor() { }

  onRemoveCar(car: Car) {
    this.remove.emit(car);
  }

}
