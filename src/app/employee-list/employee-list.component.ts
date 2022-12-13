import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';

export interface ResultadoTest {
  tipo: string;
  resultado: string;
}
export interface CursosRecomendados {
  competencia: string;
  explorador: string;
  integrador: string;
  innovador: string;
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './ubicacion.component.html',
  styles: []
})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[] = ['competencias', 'momentos'];
  public dataSource: any;
  displayedColumns2: string[] = ['competencia', 'explorador', 'integrador', 'innovador'];
  public dataSource2: any;
  
  public aa: number[] = [];
  public consultaUno!: boolean;
  public consultaDos!: boolean;
  public consultaTres!: boolean;
  public consultaCuatro!: boolean;
  
  public consultaTipoUno: any;
  public consultaTipoDos: any;
  public consultaTipoTres: any;
  public consultaTipoCuatro: any;
  
  public resultado: any;
  public ped: string | any;
  public tec: string | any;
  public soc: string | any;
  public org: string | any;

  public a: string | null | any;
  public b: string | null | any;
  public c: string | null | any;
  public d: string | null | any;
  public ELEMENT_DATA: ResultadoTest[] = [];
  public ELEMENT_DATA2: CursosRecomendados[] = [];

  public cped: string;
  public cped1: string;
  public cped2: string;
  public cped3: string;

  public ctec: string;
  public ctec1: string;
  public ctec2: string;
  public ctec3: string;
  
  public corg: string;
  public corg1: string;
  public corg2: string;
  public corg3: string;
  
  public csoc: string;
  public csoc1: string;
  public csoc2: string;
  public csoc3: string;
  
  public pedagExpl!: boolean;
  public pedagInte!: boolean;
  public pedagInno!: boolean;
  public tecnoExpl!: boolean;
  public tecnoInte!: boolean;
  public tecnoInno!: boolean;
  public socioExpl!: boolean;
  public socioInte!: boolean;
  public socioInno!: boolean;
  public organExpl!: boolean;
  public organInte!: boolean;
  public organInno!: boolean;

  constructor() { 
    this.a = '';
    this.b = '';
    this.c = '';
    this.d = '';
    this.ELEMENT_DATA = [];
    this.dataSource =[];
    this.ELEMENT_DATA2 = [];
    this.dataSource2 =[];
    this.resultado = false;
    this.consultaUno = false;
    this.consultaDos = false;
    this.consultaTres = false;
    this.consultaCuatro = false;
    this.ped = '0';
    this.tec = '0';
    this.soc = '0';
    this.org = '0';
    
    this.cped= '';
    this.cped1= '';
    this.cped2= '';
    this.cped3= '';

    this.ctec='';
    this.ctec1='';
    this.ctec2='';
    this.ctec3='';
    
    this.corg='';
    this.corg1='';
    this.corg2='';
    this.corg3='';
    
    this.csoc='';
    this.csoc1='';
    this.csoc2='';
    this.csoc3='';

    this.pedagExpl = false;
    this.pedagInte = false;
    this.pedagInno = false;
    this.tecnoExpl = false;
    this.tecnoInte = false;
    this.tecnoInno = false;
    this.socioExpl = false;
    this.socioInte = false;
    this.socioInno = false;
    this.organExpl = false;
    this.organInte = false;
    this.organInno = false;
  }

  ngOnInit() {
    this.ped = sessionStorage.getItem('graphPed');
    this.soc = sessionStorage.getItem('graphSoc');
    this.tec = sessionStorage.getItem('graphTec');
    this.org = sessionStorage.getItem('graphOrg');
    
    if(this.ped > '0' && 
       this.soc > '0' && 
       this.tec > '0' && 
       this.org > '0'){
      this.resultado = true;
      this.a = sessionStorage.getItem('tecnologico-tipo');
      this.b = sessionStorage.getItem('pedagogia-tipo');
      this.c = sessionStorage.getItem('socioefectivo-tipo');
      this.d = sessionStorage.getItem('organizativo-tipo');
      
      this.ELEMENT_DATA = [
        {tipo: 'Pedagógica', resultado: this.b},
        {tipo: 'Tecnológica', resultado: this.a},
        {tipo: 'Socioafectiva', resultado: this.c},
        {tipo: 'Organizativa', resultado: this.d}
      ];
      this.dataSource = this.ELEMENT_DATA;

      this.cursoPedagogico();
      this.cursoTecnologico();
      this.cursoOrganizativo();
      this.cursoSocio();

      this.ELEMENT_DATA2 = [
        {competencia: 'Pedagógica', explorador: this.cped1, integrador: this.cped2, innovador: this.cped3},
        {competencia: 'Tecnológica', explorador: this.ctec1, integrador: this.ctec2, innovador: this.ctec3},
        {competencia: 'Socioafectiva', explorador: this.csoc1, integrador: this.csoc2, innovador: this.csoc3},
        {competencia: 'Organizativa', explorador: this.corg1, integrador: this.corg2, innovador: this.corg3}
      ];
      this.dataSource2 = this.ELEMENT_DATA2;
      
    }
    this.aa.push(parseInt(this.ped));
    this.aa.push(parseInt(this.tec));
    this.aa.push(parseInt(this.soc));
    this.aa.push(parseInt(this.org));
    if(sessionStorage.getItem('modulo1')=='0'){
      this.consultaUno = true;
      this.consultaTipoUno = sessionStorage.getItem('tipoPedagogia');
      if(this.consultaTipoUno == 'EXPLORATORIO'){
        this.pedagExpl = true; this.pedagInte = false; this.pedagInno = false;
      }
      if(this.consultaTipoUno == 'INTEGRADOR'){
        this.pedagExpl = false; this.pedagInte = true; this.pedagInno = false;
      }
      if(this.consultaTipoUno == 'INNOVADOR'){
        this.pedagExpl = false; this.pedagInte = false; this.pedagInno = true;
      }
    }
    if(sessionStorage.getItem('modulo2')=='0'){
      this.consultaDos = true;
      this.consultaTipoDos = sessionStorage.getItem('tipoTecnologia');
      if(this.consultaTipoDos == 'EXPLORATORIO'){
        this.tecnoExpl = true; this.tecnoInte = false; this.tecnoInno = false;
      }
      if(this.consultaTipoDos == 'INTEGRADOR'){
        this.tecnoExpl = false; this.tecnoInte = true; this.tecnoInno = false;
      }
      if(this.consultaTipoDos == 'INNOVADOR'){
        this.tecnoExpl = false; this.tecnoInte = false; this.tecnoInno = true;
      }
    }
    if(sessionStorage.getItem('modulo3')=='0'){
      this.consultaTres = true;
      this.consultaTipoTres = sessionStorage.getItem('tipoSocio');
      if(this.consultaTipoTres == 'EXPLORATORIO'){
        this.socioExpl = true; this.socioInte = false; this.socioInno = false;
      }
      if(this.consultaTipoTres == 'INTEGRADOR'){
        this.socioExpl = false; this.socioInte = true; this.socioInno = false;
      }
      if(this.consultaTipoTres == 'INNOVADOR'){
        this.socioExpl = false; this.socioInte = false; this.socioInno = true;
      }
    }
    if(sessionStorage.getItem('modulo4')=='0'){
      this.consultaCuatro = true;
      this.consultaTipoCuatro = sessionStorage.getItem('tipoOrganizacional');
      if(this.consultaTipoCuatro == 'EXPLORATORIO'){
        this.organExpl = true; this.organInte = false; this.organInno = false;
      }
      if(this.consultaTipoCuatro == 'INTEGRADOR'){
        this.organExpl = false; this.organInte = true; this.organInno = false;
      }
      if(this.consultaTipoCuatro == 'INNOVADOR'){
        this.organExpl = false; this.organInte = false; this.organInno = true;
      }
    }
  }

  public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend:{
          display: false
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            var res=''
            if (context.dataset.data[context.dataIndex] == 1){
              res = "EXPLORADOR";
            }
            if (context.dataset.data[context.dataIndex] == 2){
              res = "INTEGRADOR";
            }
            if (context.dataset.data[context.dataIndex] == 3){
              res = "INNOVADOR";
            }
            return res;

            }
         },
        titleFont: {
          size: 20
        },
        bodyFont: {
          size: 18
        },
        footerFont: {
          size: 15 // there is no footer by default
        },
        
      }
    },
    scales: {
      
       r: {
           pointLabels: {
              font: {
                  family: 'Open Sans',
                  weight: 'bold',
                  size: 20
              },
              
          },
          display: true, 
          ticks: {
            font: {
                family: 'Open Sans',
                weight: 'bold',
                size: 1
            }
            
          }, 
      },
    }
   
  };
  public radarChartLabels: string[] = [ 'Pedagógica', 'Tecnológica', 'Socioafectiva', 'Organizativa'];
  
  public radarChartData: ChartData<'radar'> = {
    labels: this.radarChartLabels,
    datasets: [
      { data: this.aa },
      { data: [ 0,0,0,0 ] }
      
    ]
  };
  public radarChartType: ChartType = 'radar';

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public cursoPedagogico(){
    this.cped= 'Pedagógica';
    this.cped1= 'Diplomado Enseñanza de las Matemáticas para la Educación Futura https://credomex.edomex.gob.mx/informacion_ciencias Curso Nuevas metodologías para revolucionar el aula https://guiadeldocente.mx/curso-nuevas-metodologias-para-revolucionar-el-aula-constancia-al-finalizar-gratuito/ Curso Metodologías Activas https://365sep-my.sharepoint.com/personal/formacion_continua_nube_sep_gob_mx/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fformacion%5Fcontinua%5Fnube%5Fsep%5Fgob%5Fmx%2FDocuments%2FWeb%2FCursos%2F2021%2FOaxaca%2FMetodolog%C3%ADas%20activas&ga=1';
    this.cped2= 'Curso Herramientas Digitales para la Docencia https://pruebat.org/Aprende/CatCursos/contenidoCurso/13256 Curso Enseñanza y Aprendizaje en la Era Digital https://snte.org.mx/curso-ensenanza-y-aprendizaje-digital/';
    this.cped3= 'Curso Introducción a la Gamificación para Docentes https://guiadeldocente.mx/curso-introduccion-a-la-gamificacion-para-docentes-constancia-al-finalizar-gratuito/ Curso Enseña con STEM https://pruebat.org/Aprende/CatCursos/contenidoCurso/103 Curso Aprendizaje basado en retos https://pruebat.org/Aprende/CatCursos/contenidoCurso/10 Curso Aula Invertida https://pruebat.org/Aprende/CatCursos/contenidoCurso/9';
  }

  public cursoTecnologico(){
    this.ctec1='Curso Saberes Digitales para los Docentes nivel 1 https://mexicox.gob.mx/courses/course-v1:UV+SDPD22021X+2022_02/about Curso de Habilidades Digitales. Huawei https://e.huawei.com/en/talent/news/#/details?consultationId=1677';
    this.ctec='Tecnológico';
    this.ctec2='Curso Saberes Digitales para los Docentes nivel 2 https://mexicox.gob.mx/courses/course-v1:UV+SDPD22024X+2022_02/about Diplomado en Habilidades Digitales para la Docencia https://pruebat.org/Diplomado/InfoDiplomado/contenidoDiplomado/23877';
    this.ctec3='Curso Atrévete a crear una app https://pruebat.org/Aprende/CatCursos/contenidoCurso/524/ Curso Crea con Dispositivos Móviles https://pruebat.org/Aprende/CatCursos/contenidoCurso/15 Curso Atrévete a crear un Podcast https://pruebat.org/Aprende/CatCursos/contenidoCurso/233 Curso Atrévete a crear un Blog https://pruebat.org/Aprende/CatCursos/contenidoCurso/78';
  }

  public cursoSocio(){
    this.csoc= 'Socioafectiva';
    this.csoc1= 'Curso Comunicación Efectiva https://uveg.edu.mx/index.php/es/comunicacion-efectiva Curso Educación Socioemocional https://snte.org.mx/curso-educacion-socioemocional/';
    this.csoc2= 'Curso Convivencia Escolar desde la Perspectiva de Derechos Humanos https://cursos3.cndh.org.mx/course/view.php?id=9 Curso Derechos Humanos y Competencias Socioemocionales https://cursos3.cndh.org.mx/course/view.php?id=50 Diplomado Educación para la Paz y Derechos Humanos https://cursos3.cndh.org.mx/course/view.php?id=53 Curso Autogestivo Hacia un buen trato en la Escuela. Enfoque de Derechos Humanos https://365sep-my.sharepoint.com/:w:/g/personal/formacion_continua_nube_sep_gob_mx/ERd5UTlQrUNAla-f5YOcWJoBPTL7-tNfg5fGXRf5D3UNjQ?e=gLSA4g';
    this.csoc3= 'Diplomado en Mediación Escolar https://convivenciaescolar.edugem.gob.mx/ Curso Gestión de Riesgos y Apoyo Socioemocional en la Escuela https://guiadeldocente.mx/curso-gestion-de-riesgos-y-apoyo-socioemocional-en-la-escuela-constancia-al-finalizar-gratuito/';
  }
  
  public cursoOrganizativo(){
    this.cped= 'Organizativa';
    this.cped1= 'Curso gratis de Técnicas de Comunicación https://www.aulafacil.com/cursos/pedagogia/tecnicas-de-comunicacion-t1133';
    this.cped2= 'Curso Trabajo Colaborativo entre Docentes y Directivos https://snte.org.mx/curso-trabajo-colaborativo/ Curso gratis de Organización Escolar https://www.aulafacil.com/cursos/pedagogia/organizacion-escolar-t5192';
    this.cped3= 'Curso Gestión Estratégica Organizacional https://uveg.edu.mx/index.php/es/gestion-estrategica-organizacional Curso Comunicación y Redes https://uveg.edu.mx/index.php/es/comunicacion-y-rede';
  }

}
