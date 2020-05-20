import { Component, OnInit } from '@angular/core';
import { games } from './game-list';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games;
  constructor() {
    this.games = games;
  }

  ngOnInit() {
  }

}
