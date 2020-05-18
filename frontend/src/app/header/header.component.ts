import { Component, OnInit } from '@angular/core';
import { Http,Jsonp,Headers} from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  checkout(){
    alert("成功退出登录");
    localStorage.removeItem("login");
      window.open('/','_self');
  }

}
