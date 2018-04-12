import { Routes, RouterModule } from '@angular/router';
import { CarComponent } from './components/car/car.component';
const MAINMENU_ROUTES: Routes = [
    // full : makes sure the path is absolute path
    { path: '', redirectTo: '/car', pathMatch: 'full' },
    { path: 'car', component: CarComponent },
];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);
