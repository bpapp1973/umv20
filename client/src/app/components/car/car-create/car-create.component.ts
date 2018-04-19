import { Component, EventEmitter, Output, Inject } from '@angular/core';
import { Car } from '../../../models/car';
import { CarService } from '../../../services/car/car.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css'],
  providers: [CarService]
})
export class CarCreateComponent {

  car: Car;

  constructor(private carService: CarService, private router: Router) {
    this.car = new Car();
  }

  cancel() {
    this.car = null;
    this.router.navigate(['car']);
  }

  createCar(car: Car) {
    this.carService.createCar(car)
      .subscribe(
        (newCar) => {
          this.car = newCar;
        }
      );
    this.router.navigate(['car']);
  }

}
