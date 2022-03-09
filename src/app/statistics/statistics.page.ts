import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage implements OnInit {

  constructor(private gameSvc: GameService) { }

  shortestGame = "";

  ngOnInit() {

  }

  ionViewDidEnter() {
    this.shortestGame = (this.gameSvc.calculateShortestGame() / 1000 / 60).toFixed(2);
  }

}
