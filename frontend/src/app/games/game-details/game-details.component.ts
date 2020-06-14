import { Component, OnInit } from '@angular/core';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
  private workspace;




    constructor() { }

  ngOnInit() {
        this.workspace = Blockly.inject('blocklyDiv', {
          media: '../../assets/blockly/media/',
          toolbox: document.getElementById('toolbox'),
          //放大，缩小，还原和垃圾箱位置
          horizontalLayout: false,
          toolboxPosition: 'start',
          comments: false,
          disable: false,
          zoom: {
              controls: true,
              wheel: true,
              startScale: 1,
              maxScale: 1.5,
              minScale: 0.8,
              scaleSpeed: 1.2
          },
          trashcan: true
      });





      Blockly.Blocks['stage1_get']={
          init:function(){
              this.appendDummyInput().appendField("从左边拿取排在第一的邮件");
              this.setPreviousStatement(true);
              this.setNextStatement(true);
              this.setColour(255);
              this.setTooltip("");
              this.setHelpUrl("");
          }
      };





      Blockly.JavaScript['stage1_get']=function(block){
          var code='move_to_pick();\n'
          return code;
      };


      Blockly.Blocks['stage1_set']={
          init:function(){
              this.appendDummyInput().appendField("将拿到的邮件放在右边");
              this.setPreviousStatement(true);
              this.setNextStatement(true);
              this.setColour(255);
              this.setTooltip("");
              this.setHelpUrl("");
          }
      };





      Blockly.JavaScript['stage1_set']=function(block){
          var code='move_to_down();\n'
          return code;
      };

  }




    compile()
    {
        clear();
        var code = Blockly.JavaScript.workspaceToCode(this.workspace);
        code=code+"check();\n";
      //  alert(code);
       eval(code);
    }

  start(){
      var video = <HTMLVideoElement>document.getElementById("video");
      var canvas = <HTMLCanvasElement> document.getElementById("canvas"),
          context = canvas.getContext("2d");
      var canvas_opponent = <HTMLCanvasElement>document.getElementById("canvas_opponent"),
          context_opponent = canvas_opponent.getContext("2d");
      var roomid=(<HTMLInputElement>document.getElementById("roomid")).value;

      var getUserMedia=window.navigator['getUserMedia']||window.navigator['webkitGetUserMedia ']||window.navigator['mozGetUserMedia']||window.navigator['msGetUserMedia'];
      var options=({
          "video": true,
          "audio": true
      });
      var host = 'localhost';
      var port = 8888;
      var url = 'ws://' + host + ':' + port + '/';
      var w;
      getUserMedia.call(navigator, options, function(stream) {
          video.srcObject = stream;
          video.play();
          w = new WebSocket(url);
          w.onopen = function () {

              var data={
                  "type":"init",
                  "roomid":roomid
              }
              w.send(JSON.stringify(data));



              sendImg();



          }
          w.onmessage = function (e) {
              console.log(e);
              sendImg();
          }

      }, function () {
          console.log("video error");
      });

      function sendImg()
      {
          context.drawImage(video, 0, 0, 320, 320);
          var imgData = canvas.toDataURL();
          var data={
              msg:imgData,
              roomid:roomid
          }
          w.send(JSON.stringify(data));

      }



      }


}
