import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(-360deg)' })),
      transition('rotated => default', animate('2000ms ease-out')),
      transition('default => rotated', animate('2000ms ease-in')),
    ]),
  ],
})
export class Tab1Page {
  moeda = 'assets/logo.png';
  cara = 'assets/cara.png';
  caroa = 'assets/coroa.png';
  info = 'Clique em jogar a moeda!';

  state = 'default';

  constructor() {}

  jogarmoeda() {
    this.moeda = 'assets/logo.png';
    this.info = 'Girando...';
    this.state = this.state === 'default' ? 'rotated' : 'default';

    setTimeout(() => {
      if (Math.random() < 0.5) {
        this.moeda = this.cara;
        this.info = 'cara';
      } else {
        this.moeda = this.caroa;
        this.info = 'coroa';
      }
    }, 2000);
  }
}
