import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomComponent } from './welcom/welcom.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmergenciesComponent } from './emergencies/emergencies.component';
import { AmbulancesComponent } from './ambulances/ambulances.component';
import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [
  { path: '', component: WelcomComponent },
  { path: 'choose-auth', component: LandingComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'emergencies', component: EmergenciesComponent },
      { path: 'ambulances', component: AmbulancesComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }