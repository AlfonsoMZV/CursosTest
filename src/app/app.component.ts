import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name: any;
  
  constructor(){
    sessionStorage.setItem('pedagogia', '0');
    sessionStorage.setItem('tecnologico', '0');
    sessionStorage.setItem('socioefectivo', '0');
    sessionStorage.setItem('organizativo', '0');
    
    sessionStorage.setItem('modulo1', '');
    sessionStorage.setItem('modulo2', '');
    sessionStorage.setItem('modulo3', '');
    sessionStorage.setItem('modulo4', '');
    sessionStorage.setItem('tipo', '');
    sessionStorage.setItem('tipoPedagogia', '');
    sessionStorage.setItem('tipoTecnologia', '');
    sessionStorage.setItem('tipoOrganizacional', '');
    sessionStorage.setItem('tipoSocio', '');
  }

  cambia(){
    this.name = sessionStorage.getItem('tipo');
  }
  cambiaClick(){
    console.log();
   }
}
