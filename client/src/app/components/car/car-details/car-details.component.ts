import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent {

//  constructor() { }
  constructor(
    public dialogRef: MatDialogRef<CarDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  save() {
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }
}
