import { Component, OnInit } from '@angular/core';
import { Partner } from '../../../models/partner';
import { PartnerService } from '../../../services/partner/partner.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-partner-edit',
  templateUrl: './partner-edit.component.html',
  styleUrls: ['./partner-edit.component.css'],
  providers: [PartnerService]
})
export class PartnerEditComponent implements OnInit {

  partner: Partner;
  id: number;

  constructor(private partnerService: PartnerService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activeRoute.snapshot.params['id'];
    this.partnerService
      .getPartnerById(this.id)
      .subscribe(
        (partner) => {
          this.partner = partner;
        }
      );
  }

  cancel() {
    this.partner = null;
    this.router.navigate(['partner']);
  }

  updatePartner(partner: Partner) {
    this.partnerService.updatePartner(partner)
      .subscribe(
        (updatedPartner) => {
          this.partner = updatedPartner;
        }
      );
    this.router.navigate(['partner']);
  }

}
