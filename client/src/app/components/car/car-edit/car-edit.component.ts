import { Component, OnInit } from '@angular/core';
import { Car } from '../../../models/car';
import { CarService } from '../../../services/car/car.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css'],
  providers: [CarService]
})
export class CarEditComponent implements OnInit {

  car: Car;
  id: number;

  constructor(private carService: CarService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activeRoute.snapshot.params['id'];
    this.carService
      .getCarById(this.id)
      .subscribe(
        (car) => {
          this.car = car;
        }
      );
  }

  cancel() {
    this.car = null;
    this.router.navigate(['car']);
  }

  updateCar(car: Car) {
    this.carService.updateCar(car)
      .subscribe(
        (updatedCar) => {
          this.car = updatedCar;
        }
      );
    this.router.navigate(['car']);
  }

}
