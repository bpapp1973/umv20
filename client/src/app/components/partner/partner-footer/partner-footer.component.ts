import { Component, Input } from '@angular/core';
import { Partner } from '../../../models/partner';

@Component({
  selector: 'app-partner-footer',
  templateUrl: './partner-footer.component.html',
  styleUrls: ['./partner-footer.component.css']
})
export class PartnerFooterComponent {

  @Input() partners: Partner[];

  constructor() { }

}
