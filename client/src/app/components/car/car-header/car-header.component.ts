import { Component, Input, Inject } from '@angular/core';
import { Car } from '../../../models/cars';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CarDetailsComponent } from '../car-details/car-details.component';

@Component({
  selector: 'app-car-header',
  templateUrl: './car-header.component.html',
  styleUrls: ['./car-header.component.css']
})
export class CarHeaderComponent {

  @Input() cars: Car[];

  //  constructor() { }
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(CarDetailsComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
