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
  public winOrLose = "win";

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
    if (this.rulesNumber > 0) {
      this.rulesNumber--;
    }
  }

  private goalsDecrement () {
    if (this.goalsNumber > 0) {
      this.goalsNumber--;
    }
  }

  private keepersDecrement () {
    if (this.keepersNumber > 0) {
      this.keepersNumber--;
    }
  }

  private creepersDecrement () {
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
