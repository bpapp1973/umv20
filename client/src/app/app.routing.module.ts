import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CarDetailsComponent } from './components/car/car-details/car-details.component';
import { CarCreateComponent } from './components/car/car-create/car-create.component';
import { CarEditComponent } from './components/car/car-edit/car-edit.component';

const routes: Routes = [
    // full : makes sure the path is absolute path
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'cars', component: CarComponent },
    { path: 'cars/details/:id', component: CarDetailsComponent },
    { path: 'cars/create', component: CarCreateComponent },
    { path: 'cars/edit/:id', component: CarEditComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}
