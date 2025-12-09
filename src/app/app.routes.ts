import { Routes } from '@angular/router';
import { NavComponent } from './shared/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { BudgetDetailsComponent } from './pages/budget-details/budget-details.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: HomeComponent
    },
        {
        path: 'details/id',
        component: BudgetDetailsComponent
    },

        {
        path: 'create-account',
        component: CreateAccountComponent
    },
];
