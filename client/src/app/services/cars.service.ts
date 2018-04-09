import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Response } from '@angular/http';
import { Car } from '../models/cars';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl+'/Cars';

@Injectable()
export class CarsService {

  constructor(private http: Http) { }

  // API: GET /cars
  public getAllCars_() {
    // will use this.http.get()
  }
  public getAllCars(): Observable<Car[]> {
    return this.http
      .get(API_URL)
      .map(response => {
        const cars = response.json();
        return cars.map((car) => new Car(car));
      })
      .catch(this.handleError);
  }
  
  // API: POST /cars
  public createCar(car: Car): Observable<Car> {
    return this.http
      .post(API_URL, car)
      .map(response => {
        return new Car(response.json());
      })
      .catch(this.handleError);
  }

  // API: GET /cars/:id
  public getCarById(carId: number): Observable<Car> {
    return this.http
      .get(API_URL + '/' + carId)
      .map(response => {
        return new Car(response.json());
      })
      .catch(this.handleError);
  }
  
  // API: PUT /cars/:id
  public updateCar(car: Car): Observable<Car> {
    return this.http
      .put(API_URL + '/' + car.id, car)
      .map(response => {
        return new Car(response.json());
      })
      .catch(this.handleError);
  }

  public deleteCarById(carId: number): Observable<null> {
    return this.http
      .delete(API_URL + '/' + carId)
      .map(response => null)
      .catch(this.handleError);
  }
  private handleError (error: Response | any) {
    console.error('CarsService::handleError', error);
    return Observable.throw(error);
  }
  
}
