import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    { path: 'user', component: UserComponent },
    { path: '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent },
];
