// ng generate component Car --module modules/cars/cars.module.ts
// move under components folder
// https://www.sitepoint.com/understanding-component-architecture-angular/
import { Component, OnInit, Input } from '@angular/core';
import { CarsService } from '../../services/cars/cars.service';
import { Car } from '../../models/cars';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers: [CarsService]
})
export class CarComponent implements OnInit {

  @Input() cars: Car[];

  constructor(private carsService: CarsService) { }

  public ngOnInit() {
    this.carsService
      .getAllCars()
      .subscribe(
        (cars) => {
          this.cars = cars;
        }
      );
  }

}
