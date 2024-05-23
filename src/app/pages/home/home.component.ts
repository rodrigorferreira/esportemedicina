import { Component } from '@angular/core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  faWhatsapp = faWhatsapp;
  videoIds: any;


}
