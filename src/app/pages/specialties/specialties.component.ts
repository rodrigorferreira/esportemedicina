import { Component } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-specialties',
  templateUrl: './specialties.component.html',
  styleUrl: './specialties.component.css'
})

export class SpecialtiesComponent {

  specialties = [
    {
      name: 'Dietoterapia',
      image: '../../../assets/dietoterapia.jpg',
      description: 'Nela definiremos a dieta ideal para o paciente, ajudando ao paciente a atingir seu objetivo, seja de emagrecimento saudável, ganho de massa magra(hipertrofia), controle da diabetes, pressão alta por exemplo. Mas nunca com a manutenção eterna da mesma dieta. Nós sempre planejaremos ciclos para cada momento que nós desejamos para alcançar nossos objetivos. Realizando um tipo específico de dieta para cada ciclo.',
    },

    { name: 'Atividade Física',
      image: '../../../assets/atividade_fisica.jpg',
      description: 'Avaliamos a saúde e o objetivo de cada paciente, através de uma criteriosa anamnese e exame físico, para prescrever a atividade física ideal para que cada paciente conquiste o que almeja. Nunca mantemos sempre o mesmo treinamento, criando para cada paciente ciclos específicos de treinamentos, para que o objetivo seja alcançado mais rapidamente.'
    },

    { name: 'Composição Corporal',
      image: '../../../assets/composicao_corporal.jpg',
      description: 'Através de um estadiômetro, avaliamos com exatidão a altura do paciente, para posteriormente pesarmos o nosso paciente em uma balança de Bioimpedância com 8 eletrodos táteis da InBody, conseguindo com ela saber com grande qualidade, sua quantidade de gordura corpórea e sua quantidade de massa muscular. Essa balança da Inbody é uma das melhores e mais precisas que existem no mundo.'
    },

    { name: 'Avaliação Clínica',
      image: '../../../assets/avaliacao_clinica.jpg',
      description: 'Realizamos criteriosa anamnese, com toda atenção para o paciente, seguida de um exame físico completo em que observamos se há alterações nos principais sistemas do nosso corpo, como o pulmonar e o cardiovascular.'
    },

    { name: 'Medicação',
      image: '../../../assets/medicacao.jpg',
      description: 'Iniciamos medicação somente quando necessário e quando há critérios clínicos ou laboratoriais preenchidos, de acordo com as principais diretrizes de instituições mundiais. Mas sempre que necessário, iniciaremos as medicações mais indicadas, que ajudem ao paciente a alcançar o objetivo que lhe motivou a ir na consulta.'
    },

  ];

  selectedSpecialty: any;

  selectSpecialty(specialty: any): void {
    this.selectedSpecialty = specialty;
  }
}
