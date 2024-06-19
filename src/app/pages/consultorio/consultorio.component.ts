// consultorio.component.ts

import { Component } from '@angular/core';

interface Midia {
  tipo: 'foto' | 'video';
  path: string;
}

@Component({
  selector: 'app-consultorio',
  templateUrl: './consultorio.component.html',
  styleUrls: ['./consultorio.component.css']
})
export class ConsultorioComponent {
  midiasConsultorio: Midia[] = [

    // Caminho das imagens do consultório
    { tipo: 'foto', path:'../../../assets/consultorio/01.jpeg'},
    { tipo: 'foto', path:'../../../assets/consultorio/02.jpeg'},
    { tipo: 'foto', path:'../../../assets/consultorio/03.jpeg'},
    { tipo: 'foto', path:'../../../assets/consultorio/04.jpeg'},
    { tipo: 'foto', path:'../../../assets/consultorio/05.jpeg'},
    { tipo: 'foto', path:'../../../assets/consultorio/06.jpeg'},
    { tipo: 'foto', path:'../../../assets/consultorio/07.jpeg'},
    { tipo: 'foto', path:'../../../assets/consultorio/08.jpeg'},
    { tipo: 'foto', path:'../../../assets/consultorio/09.jpeg'},
    { tipo: 'foto', path:'../../../assets/consultorio/10.jpeg'},
    // ... adicione os caminhos para as outras fotos aqui
  ];
}
