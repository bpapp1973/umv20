// https://blog.angular-university.io/angular-http/
// https://codingthesmartway.com/angular-4-3-httpclient-accessing-rest-web-services-with-angular/
import { Component, OnInit } from '@angular/core';
import { CarsDataService } from './services/cars-data.service';
import { Car } from './models/cars';

import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

const API_URL = environment.apiUrl;
/*
export class AppComponent implements OnInit {
  title = 'Ügyfélmester 2.0';
  results = '';
  constructor(private http: HttpClient){
  }
  ngOnInit(): void {
    this.http.get(API_URL+'/Cars/3').subscribe(data => {
      console.log(data);
    });
  }
}
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CarsDataService]
})
export class AppComponent implements OnInit {

  cars: Car[] = [];

  newCar: Car = new Car();

  constructor(
    private carDataService: CarsDataService
  ) {
  }

  public ngOnInit() {
    // this.carDataService.getAllCars();

    this.carDataService
      .getAllCars()
      .subscribe(
        (cars) => {
          this.cars = cars;
        }
      );

  }

  get allCars() {
    return this.carDataService.getAllCars();
  }

  onAddCar(car) {
    this.carDataService.addCar(this.newCar);
    this.newCar = new Car();
  }

  onRemoveCar(car) {
    this.carDataService.deleteCarById(car.id);
  }
}
