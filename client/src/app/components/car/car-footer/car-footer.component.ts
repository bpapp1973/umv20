import { Component, Input } from '@angular/core';
import { Car } from '../../../models/car';

@Component({
  selector: 'app-car-footer',
  templateUrl: './car-footer.component.html',
  styleUrls: ['./car-footer.component.css']
})
export class CarFooterComponent {

  @Input() cars: Car[];

  constructor() { }

}
