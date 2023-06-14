import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './componets/dashboard/dashboard.component';
import { UserComponent } from './componets/user/user.component';
import { CardComponent } from './componets/card/card.component';
import { ChartComponent } from './componets/chart/chart.component';

const routes: Routes = [
  { path: '', component: CardComponent },
  { path: 'user', component: UserComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
