import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-game2',
    templateUrl: './game2.component.html',
    styleUrls: ['./game2.component.css']
})
export class Game2Component implements OnInit {
    private workspace;

    constructor() {
    }

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


        Blockly.Blocks['stage1_get'] = {
            init: function () {
                this.appendDummyInput().appendField("从左边拿取排在第一的邮件");
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setColour(255);
                this.setTooltip("");
                this.setHelpUrl("");
            }
        };


        Blockly.JavaScript['stage1_get'] = function (block) {
            var code = 'move_to_pick();\n'
            return code;
        };


        Blockly.Blocks['stage1_set'] = {
            init: function () {
                this.appendDummyInput().appendField("将拿到的邮件放在右边");
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setColour(255);
                this.setTooltip("");
                this.setHelpUrl("");
            }
        };


        Blockly.JavaScript['stage1_set'] = function (block) {
            var code = 'move_to_down();\n'
            return code;
        };


        Blockly.Blocks['get_desk'] = {
            init: function () {
                this.appendDummyInput().appendField("从办公桌上取信件");
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setColour(155);
                this.setTooltip("");
                this.setHelpUrl("");
            }
        };


        Blockly.JavaScript['get_desk'] = function (block) {
            var code = 'move_to_desk_pick();\n'
            return code;
        };


        Blockly.Blocks['set_desk'] = {
            init: function () {
                this.appendDummyInput().appendField("将拿到的信件放到办公桌上");
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setColour(155);
                this.setTooltip("");
                this.setHelpUrl("");
            }
        };


        Blockly.JavaScript['set_desk'] = function (block) {
            var code = 'move_to_desk_down();\n'
            return code;
        };

        // start()
        // {
        //     var video = <HTMLVideoElement>document.getElementById("video");
        //     var canvas = <HTMLCanvasElement>document.getElementById("canvas"),
        //         context = canvas.getContext("2d");
        //     var canvas_opponent = <HTMLCanvasElement>document.getElementById("canvas_opponent"),
        //         context_opponent = canvas_opponent.getContext("2d");
        //     var roomid = (<HTMLInputElement>document.getElementById("roomid")).value;
        //
        //     var getUserMedia = window.navigator['getUserMedia'] || window.navigator['webkitGetUserMedia '] || window.navigator['mozGetUserMedia'] || window.navigator['msGetUserMedia'];
        //     var options = ({
        //         "video": true,
        //         "audio": true
        //     });
        //     var host = 'localhost';
        //     var port = 8888;
        //     var url = 'ws://' + host + ':' + port + '/';
        //     var w;
        //     getUserMedia.call(navigator, options, function (stream) {
        //         video.srcObject = stream;
        //         video.play();
        //         w = new WebSocket(url);
        //         w.onopen = function () {
        //
        //             var data = {
        //                 "type": "init",
        //                 "roomid": roomid
        //             }
        //             w.send(JSON.stringify(data));
        //             sendImg();
        //         }
        //         w.onmessage = function (e) {
        //             console.log(e);
        //             sendImg();
        //         }
        //     }, function () {
        //         console.log("video error");
        //     });
        //
        //     function sendImg() {
        //         context.drawImage(video, 0, 0, 320, 320);
        //         var imgData = canvas.toDataURL();
        //         var data = {
        //             msg: imgData,
        //             roomid: roomid
        //         }
        //         w.send(JSON.stringify(data));
        //     }
        // }
    }

}
