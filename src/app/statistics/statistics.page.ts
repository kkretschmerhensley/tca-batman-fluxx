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
  longestGame = "";
  avgTurns = "";
  avgGoals = "";
  avgKeepers = "";
  avgCreepers = "";

  ngOnInit() {

  }

  ionViewDidEnter() {
    this.shortestGame = (this.gameSvc.calculateShortestGame() / 1000 / 60).toFixed(2);
    this.longestGame = (this.gameSvc.calculateLongestGame() / 1000 / 60).toFixed(2);
    this.avgTurns = this.gameSvc.calculateAvergeNumberOfRules().toFixed(2);
    this.avgGoals = this.gameSvc.calculateAvergeNumberOfGoals().toFixed(2);
    this.avgKeepers = this.gameSvc.calculateAvergeNumberOfKeepers().toFixed(2);
    this.avgCreepers = this.gameSvc.calculateAvergeNumberOfCreepers().toFixed(2);
  }

}
