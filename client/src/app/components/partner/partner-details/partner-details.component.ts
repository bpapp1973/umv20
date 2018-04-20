import { Component, Inject, Input, OnInit } from '@angular/core';
import { Partner } from '../../../models/partner';
import { PartnerService } from '../../../services/partner/partner.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-partner-details',
  templateUrl: './partner-details.component.html',
  styleUrls: ['./partner-details.component.css'],
  providers: [PartnerService]
})
export class PartnerDetailsComponent implements OnInit {

  partner: Partner;
  id: number;

  constructor(private router: Router, private activeRoute: ActivatedRoute, private partnerService: PartnerService ) {
  }

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

  close() {
    this.router.navigate(['partner']);
 //   this.dialogRef.close();
  }
}
