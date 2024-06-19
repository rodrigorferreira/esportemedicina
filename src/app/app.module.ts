import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppointmentsComponent } from './pages/appointments/appointments.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './pages/about/about.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SpecialtiesComponent } from './pages/specialties/specialties.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SpecialtyDetailDialogComponent } from './pages/specialties/dialogs/specialty-detail-dialog/specialty-detail-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { YoutubeVideoCardComponent } from './pages/youtube-video-card/youtube-video-card.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { LoginComponent } from './pages/login/login.component';
import { DrSelenioMediaComponent } from './pages/dr-selenio-media/dr-selenio-media.component';
import { ConsultorioComponent } from './pages/consultorio/consultorio.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AppointmentsComponent,
    AboutComponent,
    SpecialtiesComponent,
    ContactComponent,
    SpecialtyDetailDialogComponent,
    YoutubeVideoCardComponent,
    TestimonialsComponent,
    LoginComponent,
    DrSelenioMediaComponent,
    ConsultorioComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    NgbCollapseModule,
    MatDialogModule,
    MatCardModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
