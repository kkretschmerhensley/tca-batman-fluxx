import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { saveGameToCloud, loadGamesFromCloud } from './TcaCloudApi';

interface GameResult {
  start: string;
  end: string;
  gamesWon: boolean;
  gamesLost: boolean;
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

  addGameResult = async (r: GameResult) => {
    this.gameResults = [...this.gameResults, r]

    // await this.storage.set("gameResults", this.gameResults);
    await saveGameToCloud(
      "kakretschmerhensley@madisoncollege.edu"
      , "tca-batman-fluxx"
      , r.end
      , r
    )
  };

  currentGame: CurrentGame = {
    start: ""
  };

  setCurrentGame = (g: CurrentGame) => {
    this.currentGame = g;
  };

  calculateGamesWon = () => (
    this.gameResults.filter(x => x.gamesWon).length
  );

  calculateGamesLost = () => (
    this.gameResults.filter(x => x.gamesLost).length
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

  constructor(private storageSvc: Storage) {
    this.init();
  }

  private storage: Storage = undefined;

  init = async () => {
    this.storage = await this.storageSvc.create();
    // this.gameResults = await this.storage.get("gameResults") ?? [];
    this.gameResults = await loadGamesFromCloud("kakretschmerhensley@madisoncollege.edu", "tca-batman-fluxx") ?? [];
  };
}
