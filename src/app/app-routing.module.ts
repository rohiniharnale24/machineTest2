import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './componets/dashboard/dashboard.component';
import { UserComponent } from './componets/user/user.component';
import { ChartComponent } from './componets/chart/chart.component';
import { UserTableComponent } from './componets/user-table/user-table.component';
import { CreateUserComponent } from './componets/create-user/create-user.component';
import { LoginComponent } from './componets/login/login.component';
import { RegistrationComponent } from './componets/registration/registration.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  { path: '', component: LoginComponent },
  { path: 'user', component: UserComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'usertable', component: UserTableComponent },
  {
    path: 'createuser',
    component: CreateUserComponent,
  },

  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
