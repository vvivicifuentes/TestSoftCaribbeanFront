/**into page.html there is router-outlet, it need component module, there are 2 way for resolve this problem,
 * but the best way is call RouteModule because it has context necessary to r-outlet
 */
//import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router'

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ShareModule } from '../share/share.module';
import { ComponentsModule } from '../components/components.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { TreeBPlusComponent } from './tree/tree-bplus/tree-bplus.component';
import { CustomerComponent } from './customer/customer.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    AccountSettingsComponent,
    TreeBPlusComponent,
    CustomerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ShareModule,
    RouterModule,
    ComponentsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    DashboardComponent,
    PagesComponent
  ]
})
export class PagesModule { }
