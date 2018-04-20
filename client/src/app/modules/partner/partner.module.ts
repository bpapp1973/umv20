import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';

import { PartnerService } from '../../services/partner/partner.service';

import { PartnerComponent } from '../../components/partner/partner.component';
import { PartnerHeaderComponent } from '../../components/partner/partner-header/partner-header.component';
import { PartnerListComponent } from '../../components/partner/partner-list/partner-list.component';
import { PartnerFooterComponent } from '../../components/partner/partner-footer/partner-footer.component';
import { PartnerDetailsComponent } from '../../components/partner/partner-details/partner-details.component';
import { PartnerEditComponent } from '../../components/partner/partner-edit/partner-edit.component';
import { PartnerCreateComponent } from '../../components/partner/partner-create/partner-create.component';
// import { ConfirmationDialogComponent } from '../../components/common/confirmation-dialog/confirmation-dialog.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    PartnerComponent
  ],
  declarations:
    [
      PartnerComponent,
      PartnerHeaderComponent,
      PartnerListComponent,
      PartnerFooterComponent,
      PartnerDetailsComponent,
      PartnerEditComponent,
      PartnerCreateComponent,
//      ConfirmationDialogComponent
    ],
  providers: [PartnerService],
  entryComponents: [
    PartnerDetailsComponent,
    PartnerEditComponent,
    PartnerCreateComponent,
//    ConfirmationDialogComponent,
    ]
})
export class PartnerModule { }
