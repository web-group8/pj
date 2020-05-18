import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-start',
  templateUrl: './quick-start.component.html',
  styleUrls: ['./quick-start.component.css']
})
export class QuickStartComponent implements OnInit {

  private stepMessage: string = "我们提供了7个有关计算思维的游戏场景！我们推荐的游玩顺序是由易到难，当然你可以选择你喜欢的游戏先游玩";
  private stepImg: string = "../../assets/guide/step1.PNG";

  constructor() { }

  ngOnInit(): void {


  }
  test(){
    localStorage.setItem("login","true");
  }

  scrollTo(id: string) {
    var _id = document.getElementById(id);

    window.scrollTo(0,_id.offsetTop);
  }

  getStep(step: string){
    switch (step) {
      case "2":{
        this.stepMessage = "这是一个工具栏，我们可以从这里面移出完成右侧的游戏所需要的积木块，进行拼接最后得到我们要的积木";
        this.stepImg = "../../assets/guide/step2.PNG";
      }break;
      case "3":{
        this.stepMessage = "当你用工具栏里的积木拼成你满意的组合， 下面你需要做的就是验证你的组合啦！我们建议每个游戏场景通过之后再进行下一个, " +
            "但是我们仍然允许你先看一看后面的场景， 你可以在右边的游戏界面看到你的积木组合的运行过程，方便帮助你找出问题";
        this.stepImg = "../../assets/guide/step3.PNG";
      }break;
      default:{
        this.stepMessage = "我们提供了7个有关计算思维的游戏场景！我们推荐的游玩顺序是由易到难，当然你可以选择你喜欢的游戏先游玩";
        this.stepImg = "../../assets/guide/step1.PNG";
      }

    }

  }

}
