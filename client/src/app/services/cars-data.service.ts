import {Injectable} from '@angular/core';
import {Car} from '../models/cars';
import { CarsService } from './cars.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CarsDataService {

  // Placeholder for cars
  cars: Car[] = [];

  constructor(private carService: CarsService) {
  }

  //  POST /Cars
  addCar(car: Car): Observable<Car> {
    return this.carService.createCar(car);
  }

  //  DELETE /Cars/:id
  deleteCarById(carId: number): Observable<Car> {
    return this.carService.deleteCarById(carId);
  }

  //  PUT /Cars/:id
  updateCar(car: Car): Observable<Car> {
    return this.carService.updateCar(car);
  }

  //  GET /Cars
  getAllCars(): Observable<Car[]> {
    return this.carService.getAllCars();
  }

  //  GET /cars/:id
  getCarsById(carId: number): Observable<Car> {
    return this.carService.getCarById(carId);
  }

}
