import { Component, OnInit } from '@angular/core';
import { accounts } from "../../assets/personal/account-list"
import { gameloads } from "../../assets/personal/game-load-list"
import { gamerecords } from "../../assets/personal/game-record-list"

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  private stepNum: string = "1";
  accounts;
  gameloads;
  gamerecords;
  constructor() {
    this.accounts = accounts;
    this.gameloads = gameloads;
    this.gamerecords = gamerecords;
  }

  ngOnInit() {
  }
  setStepNum(step: string){
    switch (step) {
      case "2":{
        this.stepNum = "2";
      }break;
      case "3":{
        this.stepNum = "3";
      }break;
      default:{
        this.stepNum = "1";
      }

    }

  }
}
