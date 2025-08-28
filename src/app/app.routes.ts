import { Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AllocationComponent } from './pages/allocation/allocation.component';
import { TradeComponent } from './pages/trade/trade.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'allocation',
    component: AllocationComponent
  },

    { path: 'sidenav', 
    component: SidenavComponent 
    },
  
   {
    path: 'trade',
    component: TradeComponent
  }
];
