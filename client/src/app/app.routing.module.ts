import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* imports start */
import { CarComponent } from './components/car/car.component';
import { CarDetailsComponent } from './components/car/car-details/car-details.component';
import { CarCreateComponent } from './components/car/car-create/car-create.component';
import { CarEditComponent } from './components/car/car-edit/car-edit.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { InvoiceDetailsComponent } from './components/invoice/invoice-details/invoice-details.component';
import { InvoiceCreateComponent } from './components/invoice/invoice-create/invoice-create.component';
import { InvoiceEditComponent } from './components/invoice/invoice-edit/invoice-edit.component';
/* imports end */

const routes: Routes = [
    // full : makes sure the path is absolute path
    { path: '', redirectTo: '/', pathMatch: 'full' },
    /* routes start */
    { path: 'car', component: CarComponent },
    { path: 'car/details/:id', component: CarDetailsComponent },
    { path: 'car/create', component: CarCreateComponent },
    { path: 'car/edit/:id', component: CarEditComponent },
    { path: 'invoice', component: InvoiceComponent },
    { path: 'invoice/details/:id', component: InvoiceDetailsComponent },
    { path: 'invoice/create', component: InvoiceCreateComponent },
    { path: 'invoice/edit/:id', component: InvoiceEditComponent },
    /* routes end */
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}
