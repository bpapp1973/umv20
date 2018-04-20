import { Component, Input } from '@angular/core';
import { ProductType } from '../../../models/producttype';

@Component({
  selector: 'app-producttype-footer',
  templateUrl: './producttype-footer.component.html',
  styleUrls: ['./producttype-footer.component.css']
})
export class ProductTypeFooterComponent {

  @Input() producttypes: ProductType[];

  constructor() { }

}
