import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../../../models/cars';

@Component({
  selector: 'app-car-footer',
  templateUrl: './car-footer.component.html',
  styleUrls: ['./car-footer.component.css']
})
export class CarFooterComponent implements OnInit {

  @Input() cars: Car[];

  constructor() { }

  ngOnInit() {
  }

}
