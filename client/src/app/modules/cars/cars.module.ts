// ng generate module cars
// move under modules folder
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';

import { CarsService } from '../../services/cars/cars.service';

import { CarComponent } from '../../components/car/car.component';
import { CarHeaderComponent } from '../../components/car/car-header/car-header.component';
import { CarListComponent } from '../../components/car/car-list/car-list.component';
import { CarListItemComponent } from '../../components/car/car-list-item/car-list-item.component';
import { CarFooterComponent } from '../../components/car/car-footer/car-footer.component';
import { CarDetailsComponent } from '../../components/car/car-details/car-details.component';
import { CarEditComponent } from '../../components/car/car-edit/car-edit.component';
import { CarCreateComponent } from '../../components/car/car-create/car-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    CarComponent
  ],
  declarations:
    [
      CarComponent,
      CarHeaderComponent,
      CarListComponent,
      CarListItemComponent,
      CarFooterComponent,
      CarDetailsComponent,
      CarEditComponent,
      CarCreateComponent
    ],
  providers: [CarsService],
  entryComponents: [
    CarDetailsComponent,
    CarEditComponent,
    CarCreateComponent]
})
export class CarsModule { }
