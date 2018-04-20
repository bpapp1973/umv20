import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http, Response } from '@angular/http';
import { ProductType } from '../../models/producttype';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl + '/ProductTypes';

@Injectable()
export class ProductTypeService {

  constructor(private http: Http) { }

  // API: GET /producttype
  public getAllProductTypes(): Observable<ProductType[]> {
    return this.http
      .get(API_URL)
      .map(response => {
        const producttypes = response.json();
        return producttypes.map((producttype) => new ProductType(producttype));
      })
      .catch(this.handleError);
  }

  // API: GET /producttype/:id
  public getProductTypeById(producttypeId: number): Observable<ProductType> {
    return this.http
      .get(API_URL + '/' + producttypeId)
      .map(response => {
        return new ProductType(response.json());
      })
      .catch(this.handleError);
  }

  // API: POST /producttype
  public createProductType(producttype: ProductType): Observable<ProductType> {
    return this.http
      .post(API_URL, producttype)
      .map(response => {
        return new ProductType(response.json());
      })
      .catch(this.handleError);
  }

  // API: PUT /producttype/:id
  public updateProductType(producttype: ProductType): Observable<ProductType> {
    return this.http
      .put(API_URL + '/' + producttype.id, producttype)
      .map(response => {
        return new ProductType(response.json());
      })
      .catch(this.handleError);
  }

  public deleteProductTypeById(producttypeId: number): Observable<null> {
    return this.http
      .delete(API_URL + '/' + producttypeId)
      .map(response => null)
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error('ProductTypeService::handleError', error);
    return Observable.throw(error);
  }

}
