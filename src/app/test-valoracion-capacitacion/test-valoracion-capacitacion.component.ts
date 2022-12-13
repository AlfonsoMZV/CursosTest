import { Component, OnInit } from '@angular/core';
import { MatRadioButton, MatRadioChange } from '@angular/material/radio';

export interface TestValoracion {
  id: string;
  pregunta: string;
}

@Component({
  selector: 'app-test-valoracion',
  templateUrl: './test-valoracion-capacitacion.component.html',
  styleUrls: ['./test-valoracion-capacitacion.component.css'],
})
export class TestValoracionCapacitacionComponent implements OnInit {
  displayedColumns: string[] = ['id', 'pregunta'];
  public dataSource: any;
  
  public cont1: number;
  public cont2: number;
  public cont3: number;
  public cont4: number;
  public cont5: number;
  public cont6: number;
  public cont7: number;
  public cont8: number;
  public cont9: number;
  public cont10: number;
  public cont11: number;
  public cont12: number;
  public cont13: number;
  public cont14: number;
  public cont15: number;
  public cont16: number;
  public cont17: number;
  public cont18: number;
  public cont19: number;
  public cont20: number;
  public cont21: number;
  public cont22: number;
  public cont23: number;
  
  public conta: number;
  public contb: number;
  public contc: number;
  public contd: number;
  public conte: number;
  
  public ELEMENT_DATA: TestValoracion[] = [];
  public selection1: string;
  public selection2: string;
  public selection3: string;
  public selection4: string;
  public selection5: string;
  public selection6: string;
  public selection7: string;
  public selection8: string;
  public selection9: string;
  public selection10: string;
  public selection11: string;
  public selection12: string;
  public selection13: string;
  public selection14: string;
  public selection15: string;
  public selection16: string;
  public selection17: string;
  public selection18: string;
  public selection19: string;
  public selection20: string;
  public selection21: string;
  public selection22: string;
  public selection23: string;

  public pertinente: string;
  public practico: string;
  public situado: string;
  public colaborativo: string;
  public inspirador: string;

  constructor() {
    this.ELEMENT_DATA = [];
    this.dataSource =[]; 
    this.selection1 = ''; 
    this.selection2 = ''; 
    this.selection3 = ''; 
    this.selection4 = ''; 
    this.selection5 = ''; 
    this.selection6 = ''; 
    this.selection7 = ''; 
    this.selection8 = ''; 
    this.selection9 = ''; 
    this.selection10 = ''; 
    this.selection11 = ''; 
    this.selection12 = ''; 
    this.selection13 = ''; 
    this.selection14 = ''; 
    this.selection15 = ''; 
    this.selection16 = ''; 
    this.selection17 = ''; 
    this.selection18 = ''; 
    this.selection19 = ''; 
    this.selection20 = ''; 
    this.selection21 = ''; 
    this.selection22 = ''; 
    this.selection23 = '';

    this.pertinente = '';
    this.practico = '';
    this.situado = '';
    this.colaborativo = '';
    this.inspirador = '';

    this.cont1 = 0;
    this.cont2 = 0;
    this.cont3 = 0;
    this.cont4 = 0;
    this.cont5 = 0;
    this.cont6 = 0;
    this.cont7 = 0;
    this.cont8 = 0;
    this.cont9 = 0;
    this.cont10 = 0;
    this.cont11 = 0;
    this.cont12 = 0;
    this.cont13 = 0;
    this.cont14 = 0;
    this.cont15 = 0;
    this.cont16 = 0;
    this.cont17 = 0;
    this.cont18 = 0;
    this.cont19 = 0;
    this.cont20 = 0;
    this.cont21 = 0;
    this.cont22 = 0;
    this.cont23 = 0;
    
    this.conta = 0;
    this.contb = 0;
    this.contc = 0;
    this.contd = 0;
    this.conte = 0;
  
  }

  ngOnInit() {
    this.ELEMENT_DATA = [
      {id: 'btn1', pregunta: '1.- ¿El proceso de desarrollo profesional atiende los intereses y necesidades de los docentes teniendo en cuenta su rol? Por ejemplo, tiene una orientación diferente cuando es para directivos o coordinadores de la que tiene para docentes.'},
      {id: 'btn2', pregunta: '2.- ¿El proceso de desarrollo profesional atiende los intereses y necesidades de los docentes teniendo en cuenta su área de formación? Por ejemplo, ¿tiene una orientación diferente para los docentes de artes de la que tiene para los de matemáticas y ciencias? Es decir, presentan aproximaciones diferenciadas para que los docentes entren en contacto con aplicaciones especificas para su campo de formación o área de desempeño.'},
      {id: 'btn3', pregunta: '3.- ¿El proceso de desarrollo profesional atiende los intereses y necesidades de los docentes teniendo en cuenta el nivel educativo en el que enseñan? Por ejemplo, están diseñados específicamente para docentes de educación básica para docentes que hacen investigación con estudiantes de posgrado o para docentes de preescolar.'},
      {id: 'btn4', pregunta: '4.- ¿El proceso de desarrollo profesional atiende los intereses y necesidades de los docentes teniendo en cuenta sus saberes previos? Por ejemplo, se consideró el momento en el que se encuentran los docentes en el desarrollo de sus competencias y la preparación y conocimientos que ya tienen los docentes.'},
      {id: 'btn5', pregunta: '5.- ¿El proceso de desarrollo profesional atiende los intereses y necesidades de los docentes teniendo en cuenta los recursos con los que cuentan? Por ejemplo, utilizan software que estará fácilmente disponible para los docentes después de la formación.'},
      {id: 'btn6', pregunta: '6.- ¿El proceso de desarrollo profesional atiende los intereses y necesidades de los docentes teniendo en cuenta el contexto cultural en el que se desenvuelven? Por ejemplo, están pensados para escuelas rurales que usan metodologías diversas o para estudiantes que hablan otra lengua.'},
      {id: 'btn7', pregunta: '7.- ¿Los programas de desarrollo profesional apuntan a mejorar el aprendizaje de los estudiantes? Esto quiere decir que la formación no solo busca el mejoramiento de las competencias de docente, sino finalmente va enfocada a que el docente aplique lo aprendido tanto para su beneficio como para el de sus estudiantes.'},
      
      {id: 'btn8', pregunta: '8.- ¿Los docentes van a aprender utilizando directamente las TIC? Por ejemplo, durante el proceso de desarrollo profesional cada educador tiene a su disposición una computadora o dispositivo con el software y la conectividad necesarios.'},
      {id: 'btn9', pregunta: '9.- ¿Los docentes van a tener la posibilidad de explorar las herramientas de manera vivencial? Por ejemplo, los docentes van a ir probando lo que van aprendiendo, haciendo ejercicios por si mismos y ensayando sus propias ideas con las herramientas que están aprendiendo a usar.'},
      {id: 'btn10', pregunta: '10.- ¿Los docentes van a poder aplicar lo aprendido en situaciones cotidianas de su profesión? Por ejemplo, para preparar alguna de sus clases para aplicar en sus investigaciones o para hacer gestión escolar.'},
      
      {id: 'btn11', pregunta: '11.- ¿Los procesos de desarrollo profesional se concentran en la institución educativa y en el aula, abordando la didáctica? Por ejemplo, durante la formación los docentes planearán actividades de enseñanza y aprendizaje a desarrollar con sus estudiantes.'},
      {id: 'btn12', pregunta: '12.- ¿Se brindará un acompañamiento a los docentes durante la formación? Por ejemplo, está prevista una mesa de ayuda o un tutor presencial o virtual al que los docentes puedan recurrir en caso de dudas, o puedan tener como modelo, o que simplemente brinde apoyo en la aplicación en contexto de lo aprendido.'},
      {id: 'btn13', pregunta: '13.- ¿Se dará acompañamiento a los docentes, que los lleve a la transformación de sus prácticas, después de la formación? Por ejemplo, está prevista la continuación de la mesa de ayuda o tutores como se describen en la pregunta anterior.'},
      
      {id: 'btn14', pregunta: '14.- ¿Los procesos de desarrollo profesional facilitan el aprendizaje conjunto? Por ejemplo, hay momentos para aprender junto con otros a través de dinámicas grupales o de recibir realimentación de los compañeros.'},
      {id: 'btn15', pregunta: '15.- ¿Los procesos de desarrollo profesional facilitan la creación colectiva? Por ejemplo, con ejercicios que requieran unir fuerzas para lograr una meta o diseñando actividades, estrategias o productos en los que el resultado de las participaciones genere resultados mayores a la suma de las contribuciones individuales o a través del uso de herramientas como wikis y documentos compartidos.'},
      {id: 'btn16', pregunta: '16.- ¿Los procesos de desarrollo profesional facilitan el intercambio entre pares y la participación en redes y comunidades de práctica? Conteste que sí, únicamente si el intercambio o la participación en redes tiene la intención de permanecer en el tiempo.'},
      
      {id: 'btn17', pregunta: '17.- ¿Los procesos de desarrollo profesional incitan la imaginación? Por ejemplo, se invita a los participantes a pensar en diversas alternativas, proponer soluciones múltiples a un problema, ponerse en los zapatos de los otros y describir el mundo desde otras perspectivas o conjeturar posibilidades futuras.'},
      {id: 'btn18', pregunta: '18.- ¿Los procesos de desarrollo profesional fomentan la exploración? Por ejemplo, se comparten herramientas o metodologías que ayudan a encontrar nuevas ideas y hay tiempo destinado a que cada uno investigue asuntos relacionados con lo que se está aprendiendo, pero profundizando en un aspecto particular de su propio interés, que puede ser diferente al de otras personas tomando el mismo curso'},
      {id: 'btn19', pregunta: '19.- ¿Los procesos de desarrollo profesional favorecen la reflexión? Por ejemplo, hay oportunidades para compartir las actividades que realizan y las ideas que tienen con compañeros y pares de manera presencial o virtual en las que discuten sus estrategias y reciben realimentación que los llevan a considerarcambios a sus planes o planteamientos iniciales.'},

      {id: 'btn20', pregunta: '20.- ¿Los procesos de desarrollo profesional promueven el pensamiento crítico? Por ejemplo, analizando cómo interactúan las partes con el todo para producir resultados complejos o interpretando información contradictoria de múltiples fuentes a partir de la evaluación de evidencias, argumentos y creencias.'},
      {id: 'btn21', pregunta: '21.- ¿Los procesos de desarrollo profesional estimulan la creatividad? Por ejemplo, adaptando ideas a su propio contexto y combinando diversidad de lenguajes, medios y herramientas tecnológicas para crear algo nuevo, teniendo en cuenta que la primera versión no es necesariamente la final, sino que probablemente hay que experimentar y hacer ajustes a lo largo del camino.'},
      {id: 'btn22', pregunta: '22.- ¿Los procesos de desarrollo profesional desarrollan los talentos de cada uno de los participantes? Por ejemplo, hay variedad de opciones que llaman la atención tanto a los que prefieren espacios cerrados como a los que funcionan mejor al aire libre, a los que procesan más fácilmente información auditiva como a los que se les facilita la presentación visual o escrita.'},
      {id: 'btn23', pregunta: '23.- ¿Los procesos de desarrollo profesional fomentan el deseo de aprender a aprender? Por ejemplo, el programa está hechù para motivar a los docentes a continuar aprendiendo por su cuenta después de la culminación del proceso formal ya sea con materiales entregados durante la formación o con recursos que han aprendido a encontrar como tutoriales en línea.'},
    ];
    this.dataSource = this.ELEMENT_DATA;
  }
  onChange(mrChange: MatRadioChange) {
    console.log(mrChange.value);
    let mrButton: MatRadioButton = mrChange.source;
    console.log(mrButton.checked);
    if(mrChange.value == 'btn11' || mrChange.value == 'btn12'){if(mrChange.value == 'btn11') {this.selection1 = ''+mrButton.checked; this.cont1 =  1;}else {this.selection1 = 'false'; this.cont1 = 0; }}    
    if(mrChange.value == 'btn21' || mrChange.value == 'btn22'){if(mrChange.value == 'btn21') {this.selection2 = ''+mrButton.checked; this.cont2 =  1;}else{ this.selection2 = 'false'; this.cont2 = 0; }}    
    if(mrChange.value == 'btn31' || mrChange.value == 'btn32'){if(mrChange.value == 'btn31') {this.selection3 = ''+mrButton.checked; this.cont3 =  1;}else{ this.selection3 = 'false'; this.cont3 = 0; }}
    if(mrChange.value == 'btn41' || mrChange.value == 'btn42'){if(mrChange.value == 'btn41') {this.selection4 = ''+mrButton.checked; this.cont4 =  1;}else{ this.selection4 = 'false'; this.cont4 = 0; }}
    if(mrChange.value == 'btn51' || mrChange.value == 'btn52'){if(mrChange.value == 'btn51') {this.selection5 = ''+mrButton.checked; this.cont5 =  1;}else{ this.selection5 = 'false'; this.cont5 = 0; }}
    if(mrChange.value == 'btn61' || mrChange.value == 'btn62'){if(mrChange.value == 'btn61') {this.selection6 = ''+mrButton.checked; this.cont6 =  1;}else{ this.selection6 = 'false'; this.cont6 = 0; }} 
    if(mrChange.value == 'btn71' || mrChange.value == 'btn72'){if(mrChange.value == 'btn71') {this.selection7 = ''+mrButton.checked; this.cont7 =  1;}else{ this.selection7 = 'false'; this.cont7 = 0; }}

    if(mrChange.value == 'btn81' || mrChange.value == 'btn82'){if(mrChange.value == 'btn81') {this.selection8 = ''+mrButton.checked; this.cont8 =  1;}else{ this.selection8 = 'false'; this.cont8 =  0;}}    
    if(mrChange.value == 'btn91' || mrChange.value == 'btn92'){if(mrChange.value == 'btn91') {this.selection9 = ''+mrButton.checked; this.cont9 =  1;}else{ this.selection9 = 'false'; this.cont9 =  0;}}    
    if(mrChange.value == 'btn101' || mrChange.value == 'btn102'){if(mrChange.value == 'btn101') {this.selection10 = ''+mrButton.checked; this.cont10 =  1;}else{ this.selection10 = 'false'; this.cont10 = 0;}}
    
    if(mrChange.value == 'btn111' || mrChange.value == 'btn112'){if(mrChange.value == 'btn111'){ this.selection11 = ''+mrButton.checked; this.cont11 =  1;} else{ this.selection11 = 'false'; this.cont11 = 0;}}    
    if(mrChange.value == 'btn121' || mrChange.value == 'btn122'){if(mrChange.value == 'btn121'){ this.selection12 = ''+mrButton.checked; this.cont12 =  1;} else{ this.selection12 = 'false'; this.cont12 = 0;}}    
    if(mrChange.value == 'btn131' || mrChange.value == 'btn132'){if(mrChange.value == 'btn131'){ this.selection13 = ''+mrButton.checked; this.cont13 =  1;} else{ this.selection13 = 'false'; this.cont13 = 0;}}    
    
    if(mrChange.value == 'btn141' || mrChange.value == 'btn142'){if(mrChange.value == 'btn141'){ this.selection14 = ''+mrButton.checked; this.cont14 =  1;}else{ this.selection14 = 'false'; this.cont14 = 0;}}    
    if(mrChange.value == 'btn151' || mrChange.value == 'btn152'){if(mrChange.value == 'btn151'){ this.selection15 = ''+mrButton.checked; this.cont15 =  1;}else{ this.selection15 = 'false'; this.cont15 = 0;}}    
    if(mrChange.value == 'btn161' || mrChange.value == 'btn162'){if(mrChange.value == 'btn161'){ this.selection16 = ''+mrButton.checked; this.cont16 =  1;}else{ this.selection16 = 'false'; this.cont16 = 0;}}    
    
    if(mrChange.value == 'btn171' || mrChange.value == 'btn172'){if(mrChange.value == 'btn171'){ this.selection17 = ''+mrButton.checked; this.cont17 =  1;}else{ this.selection17 = 'false'; this.cont17 = 0;}}   
    if(mrChange.value == 'btn181' || mrChange.value == 'btn182'){if(mrChange.value == 'btn181'){ this.selection18 = ''+mrButton.checked; this.cont18 =  1;}else{ this.selection18 = 'false'; this.cont18 = 0;}}    
    if(mrChange.value == 'btn191' || mrChange.value == 'btn192'){if(mrChange.value == 'btn191'){ this.selection19 = ''+mrButton.checked; this.cont19 =  1;}else{ this.selection19 = 'false'; this.cont19 = 0;}}    
    if(mrChange.value == 'btn201' || mrChange.value == 'btn202'){if(mrChange.value == 'btn201'){ this.selection20 = ''+mrButton.checked; this.cont20 =  1;}else{ this.selection20 = 'false'; this.cont20 = 0;}}    
    if(mrChange.value == 'btn211' || mrChange.value == 'btn212'){if(mrChange.value == 'btn211'){ this.selection21 = ''+mrButton.checked; this.cont21 =  1;}else{ this.selection21 = 'false'; this.cont21 = 0;}}    
    if(mrChange.value == 'btn221' || mrChange.value == 'btn222'){if(mrChange.value == 'btn221'){ this.selection22 = ''+mrButton.checked; this.cont22 =  1;}else{ this.selection22 = 'false'; this.cont22 = 0;}}       
    if(mrChange.value == 'btn231' || mrChange.value == 'btn232'){if(mrChange.value == 'btn231'){ this.selection23 = ''+mrButton.checked; this.cont23 =  1;}else{ this.selection23 = 'false'; this.cont23 = 0;}}       
 } 

 evaluar(){
  if(this.selection1 == '' || this.selection2 == '' || this.selection3 == '' || this.selection4 == '' || 
     this.selection5 == '' || this.selection6 == '' || this.selection7 == '' || this.selection8 == '' || 
     this.selection9 == '' || this.selection10 == '' || this.selection11 == '' || this.selection12 == '' || 
     this.selection13 == '' || this.selection14 == '' || this.selection15 == '' || this.selection16 == '' || 
     this.selection17 == '' || this.selection18 == '' || this.selection19 == '' || this.selection20 == '' || 
     this.selection21 == '' || this.selection22 == '' || this.selection23 == ''){
     alert("Seleccione todos los campos");
  }else{
    this.evalua();
  }
 }
 cambiaClick(){
  console.log();
 }
 evalua(){
  
  this.conta = this.cont1 + this.cont2 + this.cont3 + this.cont4 + this.cont5 + this.cont6 + this.cont7;
  this.contb = this.cont8 + this.cont9 + this.cont10;
  this.contc = this.cont11 + this.cont12 + this.cont13;
  this.contd = this.cont14 + this.cont15 + this.cont16;
  this.conte = this.cont17 + this.cont18 + this.cont19 + this.cont20 + this.cont21 + this.cont22 + this.cont23;

  if(this.conta >= 4){
      this.pertinente = '🟩' + ' SI'
  } else { this.pertinente = '🟥' + ' NO'}

  if(this.contb >=2 ){
      this.practico = '🟩' + ' SI'
  } else { this.practico = '🟥' + ' NO'}

  if(this.contc >=2 ){
    this.situado = '🟩' + ' SI'
  } else { this.situado = '🟥' + ' NO'}

  if(this.contd >=2){
    this.colaborativo = '🟩' + ' SI'
  } else { this.colaborativo = '🟥' + ' NO'}

  if(this.conte >=4){
    this.inspirador = '🟩' + ' SI'
  } else { this.inspirador = '🟥' + ' NO'}

 }
}
