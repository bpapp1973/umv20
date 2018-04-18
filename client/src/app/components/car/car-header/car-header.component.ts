import { Component, Inject } from '@angular/core';
import { Car } from '../../../models/cars';
import { CarCreateComponent } from '../car-create/car-create.component';
import { CarsService } from '../../../services/cars/cars.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-header',
  templateUrl: './car-header.component.html',
  styleUrls: ['./car-header.component.css'],
  providers: [CarsService]
})
export class CarHeaderComponent {

  constructor(private carsService: CarsService, private router: Router ) {
  }

  addCar(): void {
    this.router.navigate(['cars/create']);
  }
}
