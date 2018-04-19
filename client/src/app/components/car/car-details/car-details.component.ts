import { Component, Inject, Input, OnInit } from '@angular/core';
import { Car } from '../../../models/car';
import { CarService } from '../../../services/car/car.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css'],
  providers: [CarService]
})
export class CarDetailsComponent implements OnInit {

  car: Car;
  id: number;

  constructor(private router: Router, private activeRoute: ActivatedRoute, private carService: CarService ) {
  }

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

  close() {
    this.router.navigate(['car']);
  }
}
