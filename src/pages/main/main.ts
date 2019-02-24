import { Component, Renderer, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, DomController } from 'ionic-angular';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  parentMessage = "message from parent";
  title = "Main Page"
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public domCtrl: DomController, public renderer: Renderer, public element: ElementRef) {
  }
  navi() {
    this.navCtrl.push("mainPage");
  }

  ngAfterViewInit() {
    //this.renderer.setElementStyle(this.element.nativeElement, 'position', 'absolute');
    //this.renderer.setElementStyle(this.element.nativeElement, 'left', 15 + 'px');
    // this.renderer.setElementStyle(this.element.nativeElement, 'top', 20 + 'px');

    let hammer = new window['Hammer'](this.element.nativeElement);
    hammer.get('pan').set({ direction: window['Hammer'].DIRECTION_ALL });

    hammer.on('pan', (ev) => {
      this.handlePan(ev);
    });

  }

  handlePan(ev) {

    //let newLeft = ev.center.x;
    let newTop = ev.center.y;
    // console.log(JSON.stringify(ev.target));
    //console.log(ev);
    let target: string = ev.target.innerText;
    let color = "aa";
    this.renderer.setElementStyle(this.element.nativeElement, 'transition', "none");
    if (target.indexOf(this.title) != -1) {
      this.domCtrl.write(() => {
        //this.renderer.setElementStyle(this.element.nativeElement, 'left', newLeft + 'px');
        console.log(this.element);

        this.renderer.setElementStyle(this.element.nativeElement, 'top', newTop + 'px');
        //this.renderer.setElementStyle(this.element.nativeElement.children[0].children[0].children[0], 'background', this.getRandomColor());

      });
      if (ev.isFinal && newTop < 150) {
        this.domCtrl.write(() => {
          //this.renderer.setElementStyle(this.element.nativeElement, 'left', newLeft + 'px');
          this.renderer.setElementStyle(this.element.nativeElement, 'transition', "1s all");
          this.renderer.setElementStyle(this.element.nativeElement, 'top', 0 + 'px');



        });
      }
      else if (newTop > 150 && ev.isFinal) {
        this.back();
      }
    }

  }

  close() {



  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  back() {
    this.viewCtrl.dismiss().catch(() => { });
  }

}
