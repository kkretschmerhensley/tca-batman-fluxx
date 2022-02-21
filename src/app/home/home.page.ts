import { Component } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  ngOnInit() {
  }

  letsPlay = () => {
    console.log("here");
  }

}

export class ModalExample {
  constructor(public routerOutlet: IonRouterOutlet) {}
}
