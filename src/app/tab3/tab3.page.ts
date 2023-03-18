import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  tamanho = 6;
  valorAtual = 0;
  imgsDados = [
    'assets/dice-red.png',//Posição 0
    'assets/dice.gif'//Posição 1
  ]
imagemDado = this.imgsDados[0];

  constructor() {}

  jogarDado(){
    this.valorAtual= Math.floor( Math.random()* this.tamanho) + 1;
  }

}
