import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
import { Router } from '@angular/router';
import { Player, GameService } from '../game.service';

interface AvailablePlayerChoice extends Player {
  checked: boolean;
}

@Component({
  selector: 'app-setup-game',
  templateUrl: './setup-game.page.html',
  styleUrls: ['./setup-game.page.scss'],
})
export class SetupGamePage implements OnInit {

  constructor(private gameSvc: GameService, private routerSvc: Router) { }

  ngOnInit() {
    this.availablePlayers = this.gameSvc.getUniquePlayers().map(x => ({
      name: x
      , order: 0
      , checked: false
    }));
  }

  playGame = () => {
    this.routerSvc.navigateByUrl("/play")
  }

  availablePlayers: AvailablePlayerChoice[] = [];
}

export class ModalExample {
  constructor(public routerOutlet: IonRouterOutlet) {}
}
