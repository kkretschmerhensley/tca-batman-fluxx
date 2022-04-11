import { Injectable } from '@angular/core';

interface GameResult {
  start: string;
  end: string;
  gamesWon: number;
  numberOfRules: number;
  numberOfGoals: number;
  numberOfKeepers: number;
  numberOfCreepers: number;
}

interface CurrentGame {
  start: string;
}

@Injectable({
  providedIn: 'root'
})
export class GameService {

  gameResults = [];

  addGameResult = (r: GameResult) => {
    this.gameResults = [...this.gameResults, r]
  };

  currentGame: CurrentGame = {
    start: ""
  };

  setCurrentGame = (g: CurrentGame) => {
    this.currentGame = g;
  };

  calculateGamesWon = () => (
    this.gameResults.reduce(
      (acc, x) => acc + x.gamesWon
      , 0
    ) / this.gameResults.length
  );

  calculateShortestGame = () => (
    Math.min(
        ...this.gameResults.map(x => Date.parse(x.end) - Date.parse(x.start))
    )
  );

  calculateLongestGame = () => (
    Math.max(
        ...this.gameResults.map(x => Date.parse(x.end) - Date.parse(x.start))
    )
  );

  calculateAvergeNumberOfRules = () => (
    this.gameResults.reduce(
      (acc, x) => acc + x.numberOfRules
      , 0
    ) / this.gameResults.length
  );

  calculateAvergeNumberOfGoals = () => (
    this.gameResults.reduce(
      (acc, x) => acc + x.numberOfGoals
      , 0
    ) / this.gameResults.length
  );

  calculateAvergeNumberOfKeepers = () => (
    this.gameResults.reduce(
      (acc, x) => acc + x.numberOfKeepers
      , 0
    ) / this.gameResults.length
  );

  calculateAvergeNumberOfCreepers = () => (
    this.gameResults.reduce(
      (acc, x) => acc + x.numberOfCreepers
      , 0
    ) / this.gameResults.length
  );

  constructor() { }
}
