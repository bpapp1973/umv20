import { Component, Input, Inject } from '@angular/core';
import { Car } from '../../../models/cars';

@Component({
  selector: 'app-car-header',
  templateUrl: './car-header.component.html',
  styleUrls: ['./car-header.component.css']
})
export class CarHeaderComponent {

  @Input() cars: Car[];

  constructor() { }
}
