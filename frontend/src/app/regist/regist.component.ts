import { Component, OnInit } from '@angular/core';
import { Http,Jsonp,Headers} from '@angular/http';


@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css']
})
export class RegistComponent implements OnInit {
    private headers =new Headers({'Content-Type': 'application/json'});
    username;
    password;
    email;
  constructor(private http:Http,private jsonp:Jsonp) { }

  ngOnInit(): void {
  }
   regist(){
       var url="/regist";
          var post_data={"username":this.username,"password":this.password,"email":this.email};
   //    var post_data={"username":this.username,"password":this.password};
       this.http.post(url,JSON.stringify(post_data),{headers:this.headers}).subscribe(function(data) {
           var temp = JSON.parse(data['_body']);
           console.log(temp);
           var bol = temp['success'];
           localStorage.setItem("login", bol);
           if (bol) {
               window.open('/', '_self');
           }
           else{
               alert("用户名已经存在,注册失败");
           }
       },function(err){
           console.log(err['_body']);
       })
   }
}
