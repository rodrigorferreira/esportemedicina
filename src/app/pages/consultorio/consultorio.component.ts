// consultorio.component.ts

import { Component } from '@angular/core';

interface Midia {
  tipo: 'foto';
  path: string;
  nomeConsultorio: string;
}

@Component({
  selector: 'app-consultorio',
  templateUrl: './consultorio.component.html',
  styleUrls: ['./consultorio.component.css']
})
export class ConsultorioComponent {
  midiasConsultorio: Midia[] = [
    // Caminho das imagens do consultório da Barra
    { tipo: 'foto', path:'../../../assets/consultorio/01.jpeg', nomeConsultorio: 'barra'},
    { tipo: 'foto', path:'../../../assets/consultorio/02.jpeg', nomeConsultorio: 'barra'},
    { tipo: 'foto', path:'../../../assets/consultorio/03.jpeg', nomeConsultorio: 'barra'},
    { tipo: 'foto', path:'../../../assets/consultorio/04.jpeg', nomeConsultorio: 'barra'},
    { tipo: 'foto', path:'../../../assets/consultorio/05.jpeg', nomeConsultorio: 'barra'},
    { tipo: 'foto', path:'../../../assets/consultorio/06.jpeg', nomeConsultorio: 'barra'},
    { tipo: 'foto', path:'../../../assets/consultorio/07.jpeg', nomeConsultorio: 'barra'},
    { tipo: 'foto', path:'../../../assets/consultorio/08.jpeg', nomeConsultorio: 'barra'},
    { tipo: 'foto', path:'../../../assets/consultorio/09.jpeg', nomeConsultorio: 'barra'},
    { tipo: 'foto', path:'../../../assets/consultorio/10.jpeg', nomeConsultorio: 'barra'},
    // Caminho das imagens do consultório de Niterói
    { tipo: 'foto', path:'../../../assets/consultorio-niteroi/niteroi01.jpeg', nomeConsultorio: 'niteroi'},
    { tipo: 'foto', path:'../../../assets/consultorio-niteroi/niteroi02.jpeg', nomeConsultorio: 'niteroi'},
  ];

  getMidiasPorConsultorio(nomeConsultorio: string) {
    return this.midiasConsultorio.filter(midia => midia.nomeConsultorio === nomeConsultorio);
  }
}
