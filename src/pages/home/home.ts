import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modlCtrl: ModalController) {

  }
  navi() {
    let modal = this.modlCtrl.create('MainPage')
    modal.present().then((e) => {
        console.log(e);
        
    }).catch()
    {
      
    }

    //this.navCtrl.push('MainPage');

  }
}
