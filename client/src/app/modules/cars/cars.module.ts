// ng generate module cars
// move under modules folder
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsService } from '../../services/cars/cars.service';

import { CarComponent } from '../../components/car/car.component';
import { CarHeaderComponent } from '../../components/car/car-header/car-header.component';
import { CarListComponent } from '../../components/car/car-list/car-list.component';
import { CarListItemComponent } from '../../components/car/car-list-item/car-list-item.component';
import { CarFooterComponent } from '../../components/car/car-footer/car-footer.component';
import { CarDetailsComponent } from '../../components/car/car-details/car-details.component';
import { CarEditComponent } from '../../components/car/car-edit/car-edit.component';

@NgModule({
  imports: [
    CommonModule
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
      CarEditComponent
    ],
  providers: [CarsService],
})
export class CarsModule { }
