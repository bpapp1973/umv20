import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarComponent } from './components/car/car.component';
const routes: Routes = [
    // full : makes sure the path is absolute path
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'cars', component: CarComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}
