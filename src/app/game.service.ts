import { Injectable } from '@angular/core';

interface GameResult {
  start: string;
  end: string;
  winner: string;
  numberOfRules: number;
  numberOfGoals: number;
  numberOfKeepers: number;
  numberOfCreepers: number;
}

interface CurrentGame {
  start: string;
}

// const game1: GameResult = {
//     start: "2022-02-14T15:14:30"
//     , end: "2022-02-14T15:20:00"
//     , winner: "Me"
//     , players: [{name: "Me", order: 1}, {name: "Marge", order: 2}, {name: "Bart", order: 3}, {name: "Lisa", order: 4}, {name: "Homer", order: 5}]
// };
//
// const game2: GameResult = {
//     start: "2022-02-14T21:00:30"
//     , end: "2022-02-14T21:30:30"
//     , winner: "Lisa"
//     , players: [{name: "Me", order: 1}, {name: "Marge", order: 2}, {name: "Bart", order: 3}, {name: "Lisa", order: 4}]
// };

@Injectable({
  providedIn: 'root'
})
export class GameService {

  gameResults = [];

  addGameResult = (r: GameResult) => {
    this.gameResults = [...this.gameResults, r]
  };

  // getUniquePlayers = () => (
  //   [...new Set(this.gameResults.flatMap(x => x.players.map(y => y.name)))]
  // );

  currentGame: CurrentGame = {
    start: ""
  };

  setCurrentGame = (g: CurrentGame) => {
    this.currentGame = g;
  };

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
