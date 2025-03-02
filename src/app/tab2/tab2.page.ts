import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

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
  ) { }

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

  pontuacaoTime(Time: number, operacao: string) {
    if (Time == 1) {
      if (operacao == '+') {
        this.pontosTime1 += this.valendo;
        this.pontosTime1 = this.pontosTime1 > 12 ? 12 : this.pontosTime1;
      } else {
        this.pontosTime1 -= this.valendo;
        this.pontosTime1 = this.pontosTime1 < 0 ? 0 : this.pontosTime1;
      }
    } else {
      if (operacao == '+') {
        this.pontosTIme2 += this.valendo;
        this.pontosTIme2 = this.pontosTIme2 > 12 ? 12 : this.pontosTIme2;
      } else {
        this.pontosTIme2 -= this.valendo;
        this.pontosTIme2 = this.pontosTIme2 < 0 ? 0 : this.pontosTIme2;
      }
    }

    if (this.pontosTime1 == 12 || this.pontosTIme2 == 12) {
      this.finalizarPartida();
    }
    this.valendo = 1;
  }
  async finalizarPartida() {
    const time = this.pontosTime1 == 12 ? 1 : 2;
    const alert = await this.alertController.create({
      header: 'Olha os patos!!!',
      message: `o <b> Time ${time} </b> ganhou a partida?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'Cancel',
          handler: () => { },
        },
        {
          text: 'LIMPAR!',
          role: 'confirm',
          handler: () => {
            if (time == 1) {
              this.partidasTime1 += 1;
            } else {
              this.partidasTim2 += 1;
            }
            this.pontosTime1 = 0;
            this.pontosTIme2 = 0;
          },
        },
      ],
    })

    await alert.present();
  }

  async limpar() {
    const alert = await this.alertController.create({
      header: 'Acabou marrecada???',
      message: `Vocês tem certeza que querem zerar todo o placar?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => { },
        },
        {
          text: 'GANHOU!',
          role: 'confirm',
          handler: () => {
            this.valendo = 0;
            this.partidasTime1 = 0;
            this.partidasTim2 = 0;
            this.pontosTime1 = 0;
            this.pontosTIme2 = 0;
          },
        },
      ],
    });
    await alert.present();
  }

  async presentToast(msg: string) {
    const toast = await this.toasttController.create({
      message: msg,
      duration: 1500,
      color: 'danger',
      position: 'bottom',
    });

    await toast.present();
  }
}


