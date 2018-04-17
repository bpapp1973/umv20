import { Component, EventEmitter, Output, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Car } from '../../../models/cars';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css']
})
export class CarCreateComponent {

  @Output() create: EventEmitter<Car> = new EventEmitter();

  constructor(public dialogRef: MatDialogRef<CarCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  cancel() {
    console.log('CarCreateComponent.cancel');
    this.data.car = null;
    this.dialogRef.close();
  }

  createCar(car: Car) {
    this.create.emit(car);
    console.log('fired');
  }

}
