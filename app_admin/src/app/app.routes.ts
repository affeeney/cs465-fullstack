import { Routes } from '@angular/router';
import { AddTripComponent } from './add-trip/add-trip.component';
import { TripLiastingComponent } from './trip-liasting/trip-liasting.component';
import { EditTripComponent } from './edit-trip/edit-trip.component';

export const routes: Routes = [
    { path: 'add-trip', component: AddTripComponent },
    { path: 'edit-trip', component: EditTripComponent },
    { path: '', component: TripLiastingComponent, pathMatch: 'full' }
 ];
