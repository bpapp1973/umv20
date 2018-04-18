import { Component, EventEmitter, Output, Inject } from '@angular/core';
import { Car } from '../../../models/cars';
import { CarsService } from '../../../services/cars/cars.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css'],
  providers: [CarsService]
})
export class CarCreateComponent {

  car: Car;

  constructor(private carsService: CarsService, private router: Router) {
    this.car = new Car();
  }

  cancel() {
    this.car = null;
    this.router.navigate(['cars']);
  }

  createCar(car: Car) {
    this.carsService.createCar(car)
      .subscribe(
        (newCar) => {
          this.car = newCar;
        }
      );
    this.router.navigate(['cars']);
  }

}
