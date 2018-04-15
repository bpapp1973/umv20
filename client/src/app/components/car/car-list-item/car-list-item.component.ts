import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Car } from '../../../models/cars';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CarDetailsComponent } from '../car-details/car-details.component';

@Component({
  selector: 'app-car-list-item',
  templateUrl: './car-list-item.component.html',
  styleUrls: ['./car-list-item.component.css'],
  outputs: ['view:change','remove:change']
})
export class CarListItemComponent {

  @Input() car: Car;

  @Output() remove: EventEmitter<Car> = new EventEmitter();
  @Output() view: EventEmitter<Car> = new EventEmitter();
 
  constructor(public dialog: MatDialog) { }

  viewCar(car: Car): void {
    this.view.emit(car);
    const dialogRef = this.dialog.open(CarDetailsComponent, {
      width: '500px',
      data: { car }
    });

    dialogRef.afterClosed().subscribe(result => { car
    });
  }

  removeCar(car: Car): void {
    console.log('CarListItemComponent.removeCar',car.plateNumber);
    this.remove.emit(car);
  }

}
