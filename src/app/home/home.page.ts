import { Component } from '@angular/core';
import { GameService } from '../game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public gameSvc: GameService, private routerSvc: Router) {}

  ngOnInit() {
  }

  letsPlay = () => {
    // initialize the time stamp
    this.gameSvc.currentGame.start = new Date().toISOString();
    // navigate to play screen
    this.routerSvc.navigateByUrl("/play")
  }

  viewStats = () => {
    // navigate to stats screen
    this.routerSvc.navigateByUrl("/stats")
  }

  emailForEditing = "";

  saveEmail = () => {
    this.gameSvc.updateEmail(this.emailForEditing);
  };
}
