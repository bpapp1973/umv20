import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';

import { ProductTypeService } from '../../services/producttype/producttype.service';

import { ProductTypeComponent } from '../../components/producttype/producttype.component';
import { ProductTypeHeaderComponent } from '../../components/producttype/producttype-header/producttype-header.component';
import { ProductTypeListComponent } from '../../components/producttype/producttype-list/producttype-list.component';
import { ProductTypeFooterComponent } from '../../components/producttype/producttype-footer/producttype-footer.component';
import { ProductTypeDetailsComponent } from '../../components/producttype/producttype-details/producttype-details.component';
import { ProductTypeEditComponent } from '../../components/producttype/producttype-edit/producttype-edit.component';
import { ProductTypeCreateComponent } from '../../components/producttype/producttype-create/producttype-create.component';
// import { ConfirmationDialogComponent } from '../../components/common/confirmation-dialog/confirmation-dialog.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    ProductTypeComponent
  ],
  declarations:
    [
      ProductTypeComponent,
      ProductTypeHeaderComponent,
      ProductTypeListComponent,
      ProductTypeFooterComponent,
      ProductTypeDetailsComponent,
      ProductTypeEditComponent,
      ProductTypeCreateComponent,
//      ConfirmationDialogComponent
    ],
  providers: [ProductTypeService],
  entryComponents: [
    ProductTypeDetailsComponent,
    ProductTypeEditComponent,
    ProductTypeCreateComponent,
//    ConfirmationDialogComponent,
    ]
})
export class ProductTypeModule { }
