import { Component, OnInit } from '@angular/core';
import { Http,Jsonp,Headers} from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    private headers =new Headers({'Content-Type': 'application/json'});
    username;
    password;
    constructor(private http:Http,private jsonp:Jsonp) { }

  ngOnInit(): void {
  }
  login(){
      var url="/login";
      var post_data={"username":this.username,"password":this.password};
      this.http.post(url,JSON.stringify(post_data),{headers:this.headers}).subscribe(function(data) {
          var temp = JSON.parse(data['_body']);
          console.log(temp);
          var bol = temp['success'];
          localStorage.setItem("login", bol);
          if (bol) {
          window.open('/', '_self');
          }
          else{
              alert("用户名或密码不正确");
          }
      },function(err){
          console.log(err['_body']);
      })
  }
}
