import { Component, EventEmitter, Output, Inject } from '@angular/core';
import { ProductType } from '../../../models/producttype';
import { ProductTypeService } from '../../../services/producttype/producttype.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producttype-create',
  templateUrl: './producttype-create.component.html',
  styleUrls: ['./producttype-create.component.css'],
  providers: [ProductTypeService]
})
export class ProductTypeCreateComponent {

  producttype: ProductType;

  constructor(private producttypeService: ProductTypeService, private router: Router) {
    this.producttype = new ProductType();
  }

  cancel() {
    this.producttype = null;
    this.router.navigate(['producttype']);
  }

  createProductType(producttype: ProductType) {
    this.producttypeService.createProductType(producttype)
      .subscribe(
        (newProductType) => {
          this.producttype = newProductType;
        }
      );
    this.router.navigate(['producttype']);
  }

}
