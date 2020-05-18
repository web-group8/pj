import { Component, OnInit } from '@angular/core';
import { Http,Jsonp,Headers} from '@angular/http';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  private headers =new Headers({'Content-Type': 'application/json'});
  constructor(private http:Http,private jsonp:Jsonp) { }

  ngOnInit() {
  }
  test(){
    var url="/test";
    var post_data={"id":1,"username":"刘醒","password":"梁非凡"};
    this.http.post(url,JSON.stringify(post_data),{headers:this.headers}).subscribe(function(data){
      var temp=JSON.parse(data['_body']);
      console.log(typeof(temp));
      alert(temp['id']);
        alert(temp['username']);
        alert(temp['password']);

    },function(err){
      console.log(err['_body']);
    })

  }

}
