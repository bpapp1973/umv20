export class ProductType {
  id?: number;
  productTypeName?: string;
  productTypeDeleted?: number;
  companyId?: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
