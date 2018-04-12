import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../../../models/cars';

@Component({
  selector: 'app-car-header',
  templateUrl: './car-header.component.html',
  styleUrls: ['./car-header.component.css']
})
export class CarHeaderComponent implements OnInit {

  @Input() cars: Car[];

  constructor() { }

  ngOnInit() {
  }

}
