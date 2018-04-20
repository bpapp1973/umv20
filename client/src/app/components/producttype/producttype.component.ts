import { Component, OnInit, Input } from '@angular/core';
import { ProductTypeService } from '../../services/producttype/producttype.service';
import { ProductType } from '../../models/producttype';

@Component({
  selector: 'app-producttype',
  templateUrl: './producttype.component.html',
  styleUrls: ['./producttype.component.css'],
  providers: [ProductTypeService]
})
export class ProductTypeComponent implements OnInit {

  @Input() producttypes: ProductType[];

  constructor(private producttypeService: ProductTypeService) { }

  public ngOnInit() {
    this.producttypeService
      .getAllProductTypes()
      .subscribe(
        (producttypes) => {
          this.producttypes = producttypes;
        }
      );
  }

}
