import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http, Response } from '@angular/http';
import { Partner } from '../../models/partner';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl + '/Partners';

@Injectable()
export class PartnerService {

  constructor(private http: Http) { }

  // API: GET /partner
  public getAllPartners(): Observable<Partner[]> {
    return this.http
      .get(API_URL)
      .map(response => {
        const partners = response.json();
        return partners.map((partner) => new Partner(partner));
      })
      .catch(this.handleError);
  }

  // API: GET /partner/:id
  public getPartnerById(partnerId: number): Observable<Partner> {
    return this.http
      .get(API_URL + '/' + partnerId)
      .map(response => {
        return new Partner(response.json());
      })
      .catch(this.handleError);
  }

  // API: POST /partner
  public createPartner(partner: Partner): Observable<Partner> {
    return this.http
      .post(API_URL, partner)
      .map(response => {
        return new Partner(response.json());
      })
      .catch(this.handleError);
  }

  // API: PUT /partner/:id
  public updatePartner(partner: Partner): Observable<Partner> {
    return this.http
      .put(API_URL + '/' + partner.id, partner)
      .map(response => {
        return new Partner(response.json());
      })
      .catch(this.handleError);
  }

  public deletePartnerById(partnerId: number): Observable<null> {
    return this.http
      .delete(API_URL + '/' + partnerId)
      .map(response => null)
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error('PartnerService::handleError', error);
    return Observable.throw(error);
  }

}
