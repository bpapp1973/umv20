import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CarsModule } from './modules/cars/cars.module';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu.component';
import { AppRoutingModule } from './app.routing.module';
// import { CarDetailsComponent } from './components/car/car-details/car-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    CarsModule,
    AppRoutingModule,
    MaterialModule
  ],
  exports: [
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
