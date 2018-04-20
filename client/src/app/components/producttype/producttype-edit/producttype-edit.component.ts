import { Component, OnInit } from '@angular/core';
import { ProductType } from '../../../models/producttype';
import { ProductTypeService } from '../../../services/producttype/producttype.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-producttype-edit',
  templateUrl: './producttype-edit.component.html',
  styleUrls: ['./producttype-edit.component.css'],
  providers: [ProductTypeService]
})
export class ProductTypeEditComponent implements OnInit {

  producttype: ProductType;
  id: number;

  constructor(private producttypeService: ProductTypeService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activeRoute.snapshot.params['id'];
    this.producttypeService
      .getProductTypeById(this.id)
      .subscribe(
        (producttype) => {
          this.producttype = producttype;
        }
      );
  }

  cancel() {
    this.producttype = null;
    this.router.navigate(['producttype']);
  }

  updateProductType(producttype: ProductType) {
    this.producttypeService.updateProductType(producttype)
      .subscribe(
        (updatedProductType) => {
          this.producttype = updatedProductType;
        }
      );
    this.router.navigate(['producttype']);
  }

}
