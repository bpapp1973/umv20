// https://blog.angular-university.io/angular-http/
// https://codingthesmartway.com/angular-4-3-httpclient-accessing-rest-web-services-with-angular/
import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

const API_URL = environment.apiUrl;
const APP_TITLE = environment.appTitle;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = APP_TITLE;

  constructor( ) { }

  public ngOnInit() { }
}
