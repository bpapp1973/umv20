import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Car } from '../../../models/cars';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CarDetailsComponent } from '../car-details/car-details.component';

@Component({
  selector: 'app-car-list-item',
  templateUrl: './car-list-item.component.html',
  styleUrls: ['./car-list-item.component.css']
})
export class CarListItemComponent {

  @Input() car: Car;

  @Output()
  view: EventEmitter<Car> = new EventEmitter();
  remove: EventEmitter<Car> = new EventEmitter();

  constructor(public dialog: MatDialog) { }

  viewCar(): void {
    console.log('CarListItemComponent.viewCar');
   // this.view.emit(this.car);
    const dialogRef = this.dialog.open(CarDetailsComponent, {
      width: '250px',
      data: { car: this.view.emit(this.car) }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  removeCar(car: Car): void {
    console.log('car-list-item - remove car: ' + car.plateNumber);
    this.remove.emit(this.car);
  }

}
