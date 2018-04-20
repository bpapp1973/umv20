import { Component, Inject, Input, OnInit } from '@angular/core';
import { ProductType } from '../../../models/producttype';
import { ProductTypeService } from '../../../services/producttype/producttype.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producttype-details',
  templateUrl: './producttype-details.component.html',
  styleUrls: ['./producttype-details.component.css'],
  providers: [ProductTypeService]
})
export class ProductTypeDetailsComponent implements OnInit {

  producttype: ProductType;
  id: number;

  constructor(private router: Router, private activeRoute: ActivatedRoute, private producttypeService: ProductTypeService ) {
  }

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

  close() {
    this.router.navigate(['producttype']);
 //   this.dialogRef.close();
  }
}
