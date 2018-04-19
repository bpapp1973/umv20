import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu.component';
import { AppRoutingModule } from './app.routing.module';
// import { ConfirmationDialogComponent } from './components/common/confirmation-dialog/confirmation-dialog.component';

/* imports start */
import { CarModule } from './modules/car/car.module';
import { InvoiceModule } from './modules/invoice/invoice.module';
/* imports end */

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
    AppRoutingModule,
    MaterialModule,
//    ConfirmationDialogComponent,
    /* imports array start */
    CarModule,
    InvoiceModule,
    /* imports array end */
  ],
  exports: [
    FormsModule
  ],
  entryComponents: [
//    ConfirmationDialogComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
