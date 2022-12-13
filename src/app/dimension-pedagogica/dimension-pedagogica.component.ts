import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-dimension-pedagogica',
  templateUrl: './dimension-pedagogica.component.html',
  styles: []
})
export class DimensionPedagogicaComponent implements OnInit {
  public preguntaUno!: boolean;
  public preguntaDos!: boolean;
  public preguntaTres!: boolean;
  public preguntaCuatro!: boolean;
  public preguntaCinco!: boolean;
  public preguntaSeis!: boolean;
  public preguntaSiete!: boolean;
  public preguntaOcho!: boolean;
  public preguntaNueve!: boolean;
  public preguntaDiez!: boolean;
  name!: string;
  public display: string | undefined;
  constructor(public dialog: MatDialog) { 
    this.preguntaUno = true;
    this.preguntaDos = false;
    this.preguntaTres = false;
    this.preguntaCuatro = false;
    this.preguntaCinco = false;
    this.preguntaSeis = false;
    this.preguntaSiete = false;
    this.preguntaOcho = false;
    this.preguntaNueve = false;
    this.preguntaDiez = false;
    this.display='none';
  }

  ngOnInit() {
  }
  onAcceptUno() { this.preguntaUno = false; this.preguntaDos = true; this.onWriteResultado('1');}
  onAcceptDos() { this.preguntaDos = false; this.preguntaTres = true; this.onWriteResultado('2');}
  onAcceptTres() { this.preguntaTres = false; this.preguntaCuatro = true; this.onWriteResultado('3');}
  onAcceptCuatro() { this.preguntaCuatro = false; this.preguntaCinco = true; this.onWriteResultado('4');}
  onAcceptCinco() { this.preguntaCinco = false; this.preguntaSeis = true; this.onWriteResultado('5');}
  onAcceptSeis() { this.preguntaSeis = false; this.preguntaSiete = true; this.onWriteResultado('6');}
  onAcceptSiete() { this.preguntaSiete = false; this.preguntaOcho = true; this.onWriteResultado('7');}
  onAcceptOcho() { this.preguntaOcho = false; this.preguntaNueve = true; this.onWriteResultado('8');}
  onAcceptNueve() { 
    this.preguntaNueve = false; 
    this.preguntaDiez = true; 
    this.onWriteResultado('9');
    this.finishTestResultado();
  }
  
  onWriteResultado(numero: string) {
    sessionStorage['pedagogia'] = numero
    console.log("pedagogia: " + sessionStorage.getItem('pedagogia'));
  }
  finishTestResultado(){
    let resultado = Number(sessionStorage.getItem('pedagogia')) 
    sessionStorage.setItem('pedagogia-tipo', '');
    sessionStorage.setItem('graphPed', '');
    
    if(resultado <= 3){
      this.openDialog("EXPLORATORIO");
      sessionStorage['graphPed'] = 1;
    }
    if(resultado > 3 && resultado <= 6){
      this.openDialog("INTEGRADOR");
      sessionStorage['graphPed'] = 2;
    }
    if(resultado > 6 && resultado <= 9){
      this.openDialog("INNOVADOR");
      sessionStorage['graphPed'] = 3;
    }
  }
  openDialog(nivel: string): void {
    sessionStorage['pedagogia-tipo'] = nivel;
    sessionStorage['tipo'] = nivel;
    sessionStorage['tipoPedagogia'] = nivel;
    let element: HTMLElement = document.getElementsByClassName('btn')[0] as HTMLElement;
    element.click();
    //sessionStorage['tipo'] = "EXPLORATORIO";
    sessionStorage['modulo1'] = '0';
  }
}