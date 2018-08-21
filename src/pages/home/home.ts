import { IftarplacePage } from './../iftarplace/iftarplace';
import { GiftplacePage } from './../giftplace/giftplace';
import { GiftplacemodfyPage } from './../giftplacemodfy/giftplacemodfy';
import { IftarplacemodifyPage } from '../iftarplacemodify/iftarplacemodify';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goTo_AddGiftPage() {
    console.log('goTo_AddGiftPage');
    this.navCtrl.push(GiftplacePage);
  }
  goTo_AddIftarPage() {
    console.log('goTo_AddIftarPage');
    this.navCtrl.push(IftarplacePage);
  }
  goTo_showIftarPage() {
    // console.log('goTo_showIftarPage');
    this.navCtrl.push(IftarplacemodifyPage);
  }
  goTo_showGiftsPage() {
    this.navCtrl.push(GiftplacemodfyPage);
  }

}
