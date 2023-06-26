import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './componets/user/user.component';
import { ChartComponent } from './componets/chart/chart.component';
import { DashboardComponent } from './componets/dashboard/dashboard.component';
import { DropdownDirective } from './directives/user-dropdown.directive';
import { UserTableComponent } from './componets/user-table/user-table.component';
import { CreateUserComponent } from './componets/create-user/create-user.component';
import { LoanComponent } from './componets/loan/loan.component';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { ShowHidddenDropDownDirective } from './directives/show-hiddden-drop-down.directive';
import { ToggleTableFromDirectiveDirective } from './directives/toggle-table-from-directive.directive';
import { RegistrationComponent } from './componets/registration/registration.component';
import { LoginComponent } from './componets/login/login.component';
import { NavbarComponent } from './componets/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ChartComponent,
    DashboardComponent,
    DropdownDirective,
    UserTableComponent,
    CreateUserComponent,
    LoanComponent,
    NavbarComponent,
    LoginComponent,
    RegistrationComponent,
    ShowHidddenDropDownDirective,
    ToggleTableFromDirectiveDirective,
    LoginComponent,

    // MouseOverDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatPaginatorModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
