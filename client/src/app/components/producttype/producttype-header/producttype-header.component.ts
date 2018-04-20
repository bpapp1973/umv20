import { Component, Inject } from '@angular/core';
import { ProductType } from '../../../models/producttype';
import { ProductTypeCreateComponent } from '../producttype-create/producttype-create.component';
import { ProductTypeService } from '../../../services/producttype/producttype.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producttype-header',
  templateUrl: './producttype-header.component.html',
  styleUrls: ['./producttype-header.component.css'],
  providers: [ProductTypeService]
})
export class ProductTypeHeaderComponent {

  constructor(private producttypeService: ProductTypeService, private router: Router ) {
  }

  addProductType(): void {
    this.router.navigate(['producttype/create']);
  }
}
