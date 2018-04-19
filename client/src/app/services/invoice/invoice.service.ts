import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http, Response } from '@angular/http';
import { Invoice } from '../../models/invoice';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl + '/Invoices';

@Injectable()
export class InvoiceService {

  constructor(private http: Http) { }

  // API: GET /invoice
  public getAllInvoices(): Observable<Invoice[]> {
    return this.http
      .get(API_URL)
      .map(response => {
        const invoices = response.json();
        return invoices.map((invoice) => new Invoice(invoice));
      })
      .catch(this.handleError);
  }

  // API: GET /invoice/:id
  public getInvoiceById(invoiceId: number): Observable<Invoice> {
    return this.http
      .get(API_URL + '/' + invoiceId)
      .map(response => {
        return new Invoice(response.json());
      })
      .catch(this.handleError);
  }

  // API: POST /invoice
  public createInvoice(invoice: Invoice): Observable<Invoice> {
    return this.http
      .post(API_URL, invoice)
      .map(response => {
        return new Invoice(response.json());
      })
      .catch(this.handleError);
  }

  // API: PUT /invoice/:id
  public updateInvoice(invoice: Invoice): Observable<Invoice> {
    return this.http
      .put(API_URL + '/' + invoice.id, invoice)
      .map(response => {
        return new Invoice(response.json());
      })
      .catch(this.handleError);
  }

  public deleteInvoiceById(invoiceId: number): Observable<null> {
    return this.http
      .delete(API_URL + '/' + invoiceId)
      .map(response => null)
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error('InvoiceService::handleError', error);
    return Observable.throw(error);
  }

}
