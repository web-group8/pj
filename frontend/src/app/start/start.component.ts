import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  login=false;
  url="/guidepage";
  constructor() {

  }

  ngOnInit() {
    this.login=Boolean(localStorage.getItem("login"));
  }

}
