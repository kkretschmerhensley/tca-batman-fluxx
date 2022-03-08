import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.page.html',
  styleUrls: ['./play-game.page.scss'],
})
export class PlayGamePage implements OnInit {

  constructor(private gameSvc: GameService, private routerSvc: Router) { }

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
