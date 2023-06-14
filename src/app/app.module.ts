import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './componets/user/user.component';
import { ChartComponent } from './componets/chart/chart.component';
import { DashboardComponent } from './componets/dashboard/dashboard.component';
import { UserDropdownDirective } from './directives/user-dropdown.directive';
import { CardComponent } from './componets/card/card.component';
import { UserTableComponent } from './user-table/user-table.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { LoanComponent } from './loan/loan.component';
// import { MouseOverDirective } from './mouse-over.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ChartComponent,
    DashboardComponent,
    UserDropdownDirective,
    CardComponent,
    UserTableComponent,
    CreateUserComponent,
    LoanComponent,
    // MouseOverDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}