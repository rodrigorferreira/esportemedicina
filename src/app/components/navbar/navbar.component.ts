import { Component } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isNavbarCollapsed = true;

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  openAgenda() {
    window.open('https://www.doctoralia.com.br/selenio-campos-filho/medico-do-esporte-nutrologo', '_blank');
  }

}
