import { Component, OnInit } from '@angular/core';
import { Car } from '../../../models/cars';
import { CarsService } from '../../../services/cars/cars.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css'],
  providers: [CarsService]
})
export class CarEditComponent implements OnInit {

  car: Car;
  id: number;

  constructor(private carsService: CarsService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activeRoute.snapshot.params['id'];
    this.carsService
      .getCarById(this.id)
      .subscribe(
        (car) => {
          this.car = car;
        }
      );
  }

  cancel() {
    this.car = null;
    this.router.navigate(['cars']);
  }

  updateCar(car: Car) {
    this.carsService.updateCar(car)
      .subscribe(
        (updatedCar) => {
          this.car = updatedCar;
        }
      );
    this.router.navigate(['cars']);
  }

}
