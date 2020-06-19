import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game6',
  templateUrl: './game6.component.html',
  styleUrls: ['./game6.component.css']
})
export class Game6Component implements OnInit {
  private workspace;
  constructor() { }

  ngOnInit() {
    this.workspace = Blockly.inject('blocklyDiv', {
      media: 'media/',
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


    Blockly.Blocks['front'] = {
      init: function () {
        this.appendDummyInput().appendField("前进一步");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(255);
        this.setTooltip("");
        this.setHelpUrl("");
      }
    };


    Blockly.JavaScript['front'] = function (block) {
      var code = 'move();\n'
      return code;
    };


    Blockly.Blocks['right'] = {
      init: function () {
        this.appendDummyInput().appendField("向右转");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(255);
        this.setTooltip("");
        this.setHelpUrl("");
      }
    };


    Blockly.JavaScript['right'] = function (block) {
      var code = 'turn_right();\n'
      return code;
    };


    Blockly.Blocks['left'] = {
      init: function () {
        this.appendDummyInput().appendField("向左转");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(255);
        this.setTooltip("");
        this.setHelpUrl("");
      }
    };


    Blockly.JavaScript['left'] = function (block) {
      var code = 'turn_left();\n'
      return code;
    };


    Blockly.Blocks['red_block'] = {
      init: function () {
        this.appendDummyInput().appendField("脚下是红砖");
        this.setOutput("Boolean");
        this.setColour(205);
        this.setTooltip("");
        this.setHelpUrl("");
      }
    };


    Blockly.JavaScript['red_block'] = function (block) {
      var code = 'play_map[virtual_position_x][virtual_position_y]==0';

      return [code, Blockly.JavaScript.ORDER_EQUALITY];
    };


    Blockly.Blocks['black_block'] = {
      init: function () {
        this.appendDummyInput().appendField("脚下是黑砖");
        this.setOutput("Boolean");
        this.setColour(205);
        this.setTooltip("");
        this.setHelpUrl("");
      }
    };


    Blockly.JavaScript['black_block'] = function (block) {
      var code = 'play_map[virtual_position_x][virtual_position_y]==5';

      return [code, Blockly.JavaScript.ORDER_EQUALITY];
    };
    // start()
    // {
    //   var video = <HTMLVideoElement>document.getElementById("video");
    //   var canvas = <HTMLCanvasElement>document.getElementById("canvas"),
    //       context = canvas.getContext("2d");
    //   var canvas_opponent = <HTMLCanvasElement>document.getElementById("canvas_opponent"),
    //       context_opponent = canvas_opponent.getContext("2d");
    //   var roomid = (<HTMLInputElement>document.getElementById("roomid")).value;
    //
    //   var getUserMedia = window.navigator['getUserMedia'] || window.navigator['webkitGetUserMedia '] || window.navigator['mozGetUserMedia'] || window.navigator['msGetUserMedia'];
    //   var options = ({
    //     "video": true,
    //     "audio": true
    //   });
    //   var host = 'localhost';
    //   var port = 8888;
    //   var url = 'ws://' + host + ':' + port + '/';
    //   var w;
    //   getUserMedia.call(navigator, options, function (stream) {
    //     video.srcObject = stream;
    //     video.play();
    //     w = new WebSocket(url);
    //     w.onopen = function () {
    //
    //       var data = {
    //         "type": "init",
    //         "roomid": roomid
    //       }
    //       w.send(JSON.stringify(data));
    //       sendImg();
    //     }
    //     w.onmessage = function (e) {
    //       console.log(e);
    //       sendImg();
    //     }
    //   }, function () {
    //     console.log("video error");
    //   });
    //
    //   function sendImg() {
    //     context.drawImage(video, 0, 0, 320, 320);
    //     var imgData = canvas.toDataURL();
    //     var data = {
    //       msg: imgData,
    //       roomid: roomid
    //     }
    //     w.send(JSON.stringify(data));
    //   }
    // }
  }

}
