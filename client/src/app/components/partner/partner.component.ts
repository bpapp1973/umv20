import { Component, OnInit, Input } from '@angular/core';
import { PartnerService } from '../../services/partner/partner.service';
import { Partner } from '../../models/partner';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css'],
  providers: [PartnerService]
})
export class PartnerComponent implements OnInit {

  @Input() partners: Partner[];

  constructor(private partnerService: PartnerService) { }

  public ngOnInit() {
    this.partnerService
      .getAllPartners()
      .subscribe(
        (partners) => {
          this.partners = partners;
        }
      );
  }

}
