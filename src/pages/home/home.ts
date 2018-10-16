import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SpPage } from '../sp/sp';
import { TvPage } from '../tv/tv';
import { BocinaPage } from '../bocina/bocina';
import { LamparaPage } from '../lampara/lampara';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  SmP= SpPage;
  TeleV=TvPage;
  Boc=BocinaPage;
  Lamp=LamparaPage;

  constructor(public navCtrl: NavController) {

  }

  SP(){
    this.navCtrl.push(this.SmP);
  }
  TV(){
    this.navCtrl.push(this.TeleV);

  }
  Bocina(){
    this.navCtrl.push(this.Boc);

  }
  Lampara(){
    this.navCtrl.push(this.Lamp);

  }



}
