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

    { name: 'Calorimetria indireta',
      image: '../../../assets/calorimetria.jpg',
      description: 'A calorimetria indireta é um exame destinado a avaliação da taxa metabólica basal, ou seja, a quantidade de calorias por dia que o organismo gasta em estado de repouso absoluto. Com esse exame, nós conseguimos dizer com grande precisão se o paciente tem um metabolismo baixo, normal ou alto, que possa interferir no seu planejamento alimentar. Com isso calculamos com maior eficiência o seu gasto calórico diário, e conseguimos prescrever um planejamento alimentar mais eficaz.'
    },

    { name: 'Bioimpedânicia',
      image: '../../../assets/bioimpedancia.jpeg',
      description: 'Método de avaliar composição corporal com grande precisão, utilizando uma maquina que alia a resistência elétrica com outros dados como peso, e altura, para avaliar sua composição corporal, entregando dados como quantidade de massa muscular e massa gorda que o paciente possui.'
    },

    { name: 'Ergoespirometria',
      image: '../../../assets/testeesforco.jpg',
      description: 'Teste para avaliação da saúde cardiovascular e pulmonar, colocando o corpo sobre o estresse do exercício físico, e com isso analisando o comportamento cardiopulmonar durante o mesmo. Conseguimos através desse teste, além de avaliar a saúde do paciente, prescrever atividade física através de zonas de treinamento, e estimar gasto calórico no exercício. Também conseguimos dizer com grande precisão, em que momento de intensidade do exercício o paciente gasta mais caloria em carboidrato ou em gordura.'
    },

  ];

  selectedSpecialty: any;

  selectSpecialty(specialty: any): void {
    this.selectedSpecialty = specialty;
  }
}
