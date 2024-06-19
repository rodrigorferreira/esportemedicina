// dr-selenio-media.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-dr-selenio-media',
  templateUrl: './dr-selenio-media.component.html',
  styleUrls: ['./dr-selenio-media.component.css']
})
export class DrSelenioMediaComponent {
  materias = [
    {
      titulo: 'A Busca da Medalha (BAND)',
      descricao: 'Entrevista realizada para o programa "A busca da Medalha" que foi ao ar na bandsports e você pode assistir o programa na íntegra no youtube através do link:',
      link: 'https://www.youtube.com/watch?v=BK4uKRU0k48&t=2s',
      videoPath: '../../../assets/a busca da medalha - band.mp4',
      imagePath: null
    },

    {
      titulo: 'Academia Sportfit',
      descricao: 'Entrevista realizada para a academia sportfit, esclarecendo temas importantes como a prática de atividade física na infância adolescência, consequências do uso de esteróides anabolizantes, entre outras.',
      link: 'Link: https://www.youtube.com/watch?v=IFdrZi03U5E&t=206s',
      videoPath: '../../../assets/academia sportfit.mp4',
      imagePath: null
    },

    {
      titulo: 'I Simpósio Nacional de Ciências do Esporte e Nutrição',
      descricao: 'Chamada realizada para Simpósio, idealizado pelo Dr. Selênio Campos Filho, com a ajuda de diversos profissionais do mais alto nível em diversas áreas da saúde.',
      link: null,
      videoPath: '../../../assets/I Simpósio Nacional de Ciências do Esporte e Nutrição.mp4',
      imagePath: null
    },

    {
      titulo: 'Na Nossa Rede',
      descricao: 'Entrevista realizada para o site "Na Nossa Rede", falando sobre o atleta vegano e vegetariano.',
      link: 'https://www.nanossarede.com.br/2021/11/22/carol-e-macris-reforcam-amor-pelo-veganismo-e-recebem-apoio-de-nutrologo/',
      videoPath: null,
      imagePath: '../../../assets/na nossa rede.jpeg'
    },

    {
      titulo: 'Campeonato Brasileiro de Kickboxing',
      descricao: 'Participação como médico de ringue no Campeonato Brasileiro de Kickboxing, que foi transmitido pelo canal Combate.',
      link: null,
      videoPath: '../../../assets/Campeonato Brasileiro de Kickboxing.mp4',
      imagePath: null
    },

  ];
}

