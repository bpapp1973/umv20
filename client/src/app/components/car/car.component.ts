import { Component, OnInit, Input } from '@angular/core';
import { CarService } from '../../services/car/car.service';
import { Car } from '../../models/car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers: [CarService]
})
export class CarComponent implements OnInit {

  @Input() cars: Car[];

  constructor(private carService: CarService) { }

  public ngOnInit() {
    this.carService
      .getAllCars()
      .subscribe(
        (cars) => {
          this.cars = cars;
        }
      );
  }

}
