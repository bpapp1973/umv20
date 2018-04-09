// ng generate component Car --module modules/cars/cars.module.ts
// move under components folder
// https://www.sitepoint.com/understanding-component-architecture-angular/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
