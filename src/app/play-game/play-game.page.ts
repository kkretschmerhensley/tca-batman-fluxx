import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.page.html',
  styleUrls: ['./play-game.page.scss'],
})
export class PlayGamePage implements OnInit {

  rulesNumber = 0;
  goalsNumber = 0;
  keepersNumber = 0;
  creepersNumber = 0;
  winOrLose = "win";

  constructor(private gameSvc: GameService, private routerSvc: Router) { }

  rulesIncrement () {
    this.rulesNumber++;
  }

  goalsIncrement () {
    this.goalsNumber++;
  }

  keepersIncrement () {
    this.keepersNumber++;
  }

  creepersIncrement () {
    this.creepersNumber++;
  }

  rulesDecrement () {
    if (this.rulesNumber > 0) {
      this.rulesNumber--;
    }
  }

  goalsDecrement () {
    if (this.goalsNumber > 0) {
      this.goalsNumber--;
    }
  }

  keepersDecrement () {
    if (this.keepersNumber > 0) {
      this.keepersNumber--;
    }
  }

  creepersDecrement () {
    if (this.creepersNumber > 0) {
      this.creepersNumber--;
    }
  }

  ngOnInit() {
  }

  endGame = () => {
    // add new game result
    this.gameSvc.addGameResult (
      {
        start: this.gameSvc.currentGame.start
        , end: new Date().toISOString()
        , gamesWon: this.winOrLose === "win"
        , gamesLost: this.winOrLose === "lose"
        , numberOfRules: this.rulesNumber
        , numberOfGoals: this.goalsNumber
        , numberOfKeepers: this.keepersNumber
        , numberOfCreepers: this.creepersNumber
      }
    );

    // navigate to stats page
    this.routerSvc.navigateByUrl("/stats")
  }

  quitGame = () => {
    // naviate to home screen
    this.routerSvc.navigateByUrl("/home")
  }

}
