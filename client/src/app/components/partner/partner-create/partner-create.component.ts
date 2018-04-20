import { Component, EventEmitter, Output, Inject } from '@angular/core';
import { Partner } from '../../../models/partner';
import { PartnerService } from '../../../services/partner/partner.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partner-create',
  templateUrl: './partner-create.component.html',
  styleUrls: ['./partner-create.component.css'],
  providers: [PartnerService]
})
export class PartnerCreateComponent {

  partner: Partner;

  constructor(private partnerService: PartnerService, private router: Router) {
    this.partner = new Partner();
  }

  cancel() {
    this.partner = null;
    this.router.navigate(['partner']);
  }

  createPartner(partner: Partner) {
    this.partnerService.createPartner(partner)
      .subscribe(
        (newPartner) => {
          this.partner = newPartner;
        }
      );
    this.router.navigate(['partner']);
  }

}
