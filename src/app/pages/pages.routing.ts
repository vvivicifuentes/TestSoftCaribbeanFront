import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TreeBPlusComponent } from './tree/tree-bplus/tree-bplus.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { CustomerComponent } from './customer/customer.component';

/**item router child section 4 class 35 */
const routes: Routes = [
    {
        /**add childrens path, this pages load with template diferenct of login and register */
        path: 'dashboard',
        component: PagesComponent,
        children: [
            { path: '', component: DashboardComponent, data: { title: 'Dashboard' } },
            { path: 'account-settings', component: AccountSettingsComponent, data: { title: 'Theme' } },
            { path: 'tree', component: TreeBPlusComponent, data: { title: 'Tree B Plus' } },
            { path: 'customer', component: CustomerComponent, data: { title: 'Create Customer' } },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
