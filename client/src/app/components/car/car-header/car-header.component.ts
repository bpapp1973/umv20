import { Component, Inject } from '@angular/core';
import { Car } from '../../../models/car';
import { CarCreateComponent } from '../car-create/car-create.component';
import { CarService } from '../../../services/car/car.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-header',
  templateUrl: './car-header.component.html',
  styleUrls: ['./car-header.component.css'],
  providers: [CarService]
})
export class CarHeaderComponent {

  constructor(private carService: CarService, private router: Router ) {
  }

  addCar(): void {
    this.router.navigate(['car/create']);
  }
}
