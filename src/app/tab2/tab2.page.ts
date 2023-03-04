import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  valendo = 1;

  pontosTime1 = 0;
  pontosTIme2 = 0;

  partidasTime1 = 0;
  partidasTim2 = 0;
   
  constructor(
    private alertController: AlertController,
    private toasttController: ToastController  
  ) {}

  pontuacaoAtual(pontos: number) {
    this.valendo = pontos;

    if (pontos == 3) {
      this.presentToast('TRUCO!');
    } else if (pontos == 6) {
      this.presentToast('SEIS!');
    } else if (pontos == 9) {
      this.presentToast('NOVE!');
    } else if (pontos == 12) {
      this.presentToast('DOZE!');
    }
  }

  pontuacaoTime: number , operacao: string) {
    if (time == 1) {
      if (operacao == '+') {
        this.pontosTime1 += this.valendo;
        this.pontosTime1 = this.pontosTime1 > 12 ? 12 : this.pontosTime1;
      } else {
        this.pontosTime1 -= this.valendo;
        this.pontosTime1 = this.pontosTime1 < 0 ? 0 : this.pontosTime1;
      }
    } else {
      if (operacao == '+') {
        this.pontosTime2 += this.valendo;
        this.pontosTime2 = this.pontosTime2 > 12 ? 12 : this.pontosTime2;
      } else {
        this.pontosTime2 -= this.valendo;
        this.pontosTime2 = this.pontosTime2 < 0 ? 0 : this.pontosTime2;
      }
  } 

  if (this.pontosTime1 == 12 || this .pontosTime2 == 12) {
    this.finalizarPartida(); 
     