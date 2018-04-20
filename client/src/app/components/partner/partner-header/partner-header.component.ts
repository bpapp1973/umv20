import { Component, Inject } from '@angular/core';
import { Partner } from '../../../models/partner';
import { PartnerCreateComponent } from '../partner-create/partner-create.component';
import { PartnerService } from '../../../services/partner/partner.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partner-header',
  templateUrl: './partner-header.component.html',
  styleUrls: ['./partner-header.component.css'],
  providers: [PartnerService]
})
export class PartnerHeaderComponent {

  constructor(private partnerService: PartnerService, private router: Router ) {
  }

  addPartner(): void {
    this.router.navigate(['partner/create']);
  }
}
