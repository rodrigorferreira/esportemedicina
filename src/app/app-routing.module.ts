import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AppointmentsComponent } from './pages/appointments/appointments.component';
import { SpecialtiesComponent } from './pages/specialties/specialties.component';

import { ContactComponent } from './pages/contact/contact.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'specialties', component: SpecialtiesComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'appointments', component: AppointmentsComponent},
  { path: 'testimonials', component: TestimonialsComponent},
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
