import { Component, OnInit } from '@angular/core';
import { accounts } from "../../assets/personal/account-list"
import { gameloads } from "../../assets/personal/game-load-list"
import { gamerecords } from "../../assets/personal/game-record-list"
import { Http,Jsonp,Headers} from '@angular/http';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  private stepNum: string = "1";
    private headers =new Headers({'Content-Type': 'application/json'});
    private stage_list=['收发室初级','收发室高级','十倍放大镜','光线检测','绿野仙踪'];
  accounts;
  gameloads;
  gamerecords;
  constructor(private http:Http,private jsonp:Jsonp) {
    this.accounts = accounts;
    this.gameloads = gameloads;
    this.gamerecords = gamerecords;
  }

  ngOnInit() {
      this.find_user_info();
      this.find_play_result();
      this.find_play_history();
  }
  find_user_info(){
     var url="/find_user_info";
      var ajax_this=this;
     var username=localStorage.getItem("username");
      var post_data={"username":username};
      this.http.post(url,JSON.stringify(post_data),{headers:this.headers}).subscribe(function(data) {
          var temp = JSON.parse(data['_body']);
          var msg=temp['msg'];
          ajax_this.accounts[0].name=msg['username'];
          ajax_this.accounts[0].rgstime=msg['createTime'];
          ajax_this.accounts[0].email=msg['email'];
      },function(err){
          console.log(err['_body']);
      })
  }

    find_play_result(){
        var url="/find_play_result";
        var ajax_this=this;
        var username=localStorage.getItem("username");
        var post_data={"username":username};
        this.http.post(url,JSON.stringify(post_data),{headers:this.headers}).subscribe(function(data) {
            var temp = JSON.parse(data['_body']);
            var msg=temp['msg'];
            for(var i=0;i<msg.length;i++){
                if(msg[i]){
                    ajax_this.gameloads[i].finish="已完成";
                }
                else{
                    ajax_this.gameloads[i].finish="未完成";
                }
            }
        },function(err){
            console.log(err['_body']);
        })
    }

    find_play_history(){
        var url="/find_play_history";
        var ajax_this=this;
        var username=localStorage.getItem("username");
        var post_data={"username":username};
        this.http.post(url,JSON.stringify(post_data),{headers:this.headers}).subscribe(function(data) {
            var temp = JSON.parse(data['_body']);
            var msg=temp['msg'];
            for(var i=0;i<msg.length;i++){
                var pass=msg[i]['pass']==0?"未通过":"已通过";
                var res={
                    name: ajax_this.stage_list[msg[i]['stage']],
                        playtime:[msg[i]['createTime']],
                    pass: pass
                };
                ajax_this.gamerecords.push(res);
            }
        },function(err){
            console.log(err['_body']);
        })
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
