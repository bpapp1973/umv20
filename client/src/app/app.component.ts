// https://blog.angular-university.io/angular-http/
// https://codingthesmartway.com/angular-4-3-httpclient-accessing-rest-web-services-with-angular/
import { Component, OnInit } from '@angular/core';
import { CarsDataService } from './services/cars-data.service';
import { Car } from './models/cars';

import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

const API_URL = environment.apiUrl;
const APP_TITLE = environment.appTitle;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CarsDataService]
})
export class AppComponent  implements OnInit  {
  title = APP_TITLE;
  cars: Car[] = [];

  constructor(
    private carDataService: CarsDataService
  ) {
  }

  public ngOnInit() {
    this.carDataService
      .getAllCars()
      .subscribe(
        (cars) => {
          this.cars = cars;
        }
      );

  }
/*
  get cars() {
    return this.carDataService.getAllCars();
  }
*/
  onAddTodo(car) {
    this.carDataService
      .addCar(car)
      .subscribe(
        (newCar) => {
          this.cars = this.cars.concat(newCar);
        }
      );
  }

  onRemoveTodo(car) {
    this.carDataService
      .deleteCarById(car.id)
      .subscribe(
        (_) => {
          this.cars = this.cars.filter((c) => c.id !== car.id);
        }
      );
  }
}
