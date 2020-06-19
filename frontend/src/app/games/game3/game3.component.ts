import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-game3',
    templateUrl: './game3.component.html',
    styleUrls: ['./game3.component.css']
})
export class Game3Component implements OnInit {
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

        Blockly.Blocks['step1_write'] = {
            init: function () {
                this.appendDummyInput()
                    .appendField("把办公室")
                    .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"]]), "NUM")
                    .appendField("处的信件抄写一份");
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setColour(255);
                this.setTooltip("");
                this.setHelpUrl("");
            }
        };

        Blockly.JavaScript['step1_write'] = function (block) {
            var dropdown_num = block.getFieldValue('NUM');
            var code = 'move_to_write(' + dropdown_num + ');\n';
            return code;
        };
        Blockly.Blocks['step1_down_2'] = {
            init: function () {
                this.appendDummyInput()
                    .appendField("把手中的信件放在办公桌")
                    .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"]]), "NUM")
                    .appendField("处");
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setColour(255);
                this.setTooltip("");
                this.setHelpUrl("");
            }
        };
        Blockly.JavaScript['step1_down_2'] = function (block) {
            var dropdown_num = block.getFieldValue('NUM');
            var code = 'move_to_down_2(' + dropdown_num + ');\n';
            return code;
        };
        Blockly.Blocks['step1_add'] = {
            init: function () {
                this.appendDummyInput()
                    .appendField("把手中的信件的数字加在办公桌")
                    .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"]]), "NUM")
                    .appendField("处上的数字");
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setColour(255);
                this.setTooltip("");
                this.setHelpUrl("");
            }
        };
        Blockly.JavaScript['step1_add'] = function (block) {
            var dropdown_num = block.getFieldValue('NUM');
            var code = 'move_to_add(' + dropdown_num + ');\n';
            return code;
        }
        Blockly.Blocks['step2_repeat'] = {
            init: function () {
                this.appendDummyInput()
                    .appendField("重复做")
                    .appendField(new Blockly.FieldTextInput("0"), "num")
                    .appendField("次");
                this.appendStatementInput("state1")
                    .setCheck(null);
                this.setInputsInline(false);
                this.setPreviousStatement(true, "Number");
                this.setNextStatement(true, null);
                this.setColour(330);
                this.setTooltip("");
                this.setHelpUrl("");
            }
        };
        Blockly.JavaScript['step2_repeat'] = function (block) {
            var text_num = block.getFieldValue('num');
            var statements_state1 = Blockly.JavaScript.statementToCode(block, 'state1');
            var code = '';
            for (var i = 0; i < text_num; i++) {
                code = code + statements_state1;
            }
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
        //
        // }

    }
}
