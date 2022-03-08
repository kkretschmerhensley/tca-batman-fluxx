import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.page.html',
  styleUrls: ['./play-game.page.scss'],
})
export class PlayGamePage implements OnInit {

  private rulesNumber = 0;
  private goalsNumber = 0;
  private keepersNumber = 0;
  private creepersNumber = 0;


  constructor(private gameSvc: GameService, private routerSvc: Router) { }

  private rulesIncrement () {
    this.rulesNumber++;
  }

  private goalsIncrement () {
    this.goalsNumber++;
  }

  private keepersIncrement () {
    this.keepersNumber++;
  }

  private creepersIncrement () {
    this.creepersNumber++;
  }

  private rulesDecrement () {
    this.rulesNumber--;
  }

  private goalsDecrement () {
    this.goalsNumber--;
  }

  private keepersDecrement () {
    this.keepersNumber--;
  }

  private creepersDecrement () {
    this.creepersNumber--;
  }

  ngOnInit() {
  }

  endGame = () => {

    // add new game result
    this.gameSvc.addGameResult (
      {
        start: ""
        , end: ""
        , winner: ""
        , players: []
      }
    );

    // navigate to home page
    this.routerSvc.navigateByUrl("/stats")
  }

}
