import { Component, Inject, Input, OnInit } from '@angular/core';
import { Car } from '../../../models/cars';
import { CarsService } from '../../../services/cars/cars.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css'],
  providers: [CarsService]
})
export class CarDetailsComponent implements OnInit {

  car: Car;
  id: number;

  constructor(private router: Router, private activeRoute: ActivatedRoute, private carsService: CarsService ) {
  }

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

  close() {
    this.router.navigate(['cars']);
 //   this.dialogRef.close();
  }
}
