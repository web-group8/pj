document.write('<script src="https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>')

var index = ['f', 'e', 'o', 'f', 't', 'r'];

var a = [0, 1, 2, 3, 4, 5];
var b = new Array();
var desk = [-1];
var now = -1;
var total_move = 0;
var now_move = 0;


function check() {
    var myid = total_move;
    total_move++;
// console.log(myid+" , "+now_move);
    var tick = function () {
        animation_id = requestAnimationFrame(tick);
        if (myid == now_move) {
            cancelAnimationFrame(animation_id);
            now_move++;
            setTimeout(function () {
                var temp = "";
                for (var i = 0; i < b.length; i++) {
                    temp = temp + index[b[i]];
                }
                console.log(temp);
                if (temp == "effort") {
                    alert("恭喜你通过本关");
                } else {
                    alert("没有完成呢,请再思考一下");
                }
            }, 500);
        }
    };
    tick();
}

function compile() {
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    code = code + "check();\n";
    eval(code);
}

function reset() {
    var a = [0, 1, 2, 3, 4, 5];
    b.length = 0;
    desk[0] = -1;
    now = -1;
    var img = document.getElementById("people");
    img.style.left = "300px"
    img.style.top = "200px";
    for (var i = 0; i < 6; i++) {
        var x = document.getElementById(i);
        x.style.left = "10px"
        x.style.top = (10 + 20 * i) + "px";
        x.style.visibility = "visible";
    }
    Blockly.mainWorkspace.clear();

}

function which_block() {
    var img = document.getElementById("people");
    var srcx = parseInt(img.style.left.substring(0, img.style.left.length - 2));
    var srcy = parseInt(img.style.top.substring(0, img.style.top.length - 2));
    var block = -1;
    switch (now) {
        case 0 :
            block = document.getElementById("0");
            break;
        case 1 :
            block = document.getElementById("1");
            break;
        case 2 :
            block = document.getElementById("2");
            break;
        case 3 :
            block = document.getElementById("3");
            break;
        case 4 :
            block = document.getElementById("4");
            break;
        case 5 :
            block = document.getElementById("5");
            break;
    }
    return block;
}


function get_block() {
    var img = document.getElementById("people");
    var srcx = parseInt(img.style.left.substring(0, img.style.left.length - 2));
    var srcy = parseInt(img.style.top.substring(0, img.style.top.length - 2));
    var block = which_block();

    if (block != -1) {
        var n = now;
        block.style.left = (srcx - 100) + "px";
        block.style.top = (srcy - 100 - 45 * n) + "px"
    }
}

function set_block() {
    var img = document.getElementById("people");
    var srcx = parseInt(img.style.left.substring(0, img.style.left.length - 2));
    var srcy = parseInt(img.style.top.substring(0, img.style.top.length - 2));
    var block = which_block();
    if (block != -1) {
        var n = now;
        block.style.left = (srcx - 40) + "px";
        block.style.top = (srcy - 50 - 45 * n) + "px"
    }
    now = -1;
}

function set_block_on_desk() {
    var block = which_block();
    if (block != -1) {
        var n = now;
        block.style.left = "210px";
        block.style.top = (-50 - 45 * n) + "px";
    }
    now = -1;
}

function move_to_pick() {
    move(160, 60 + 65 * (6 - a.length), "pick");

}

function test() {
    move(160, 60, "pick");
    move(300, 60, "desk_down");
}

function move_to_desk_pick() {
    move(300, 60, "desk_pick");
}

function move_to_down() {
    move(440, 60 + 65 * b.length, "down");
}

function move_to_desk_down() {
    move(300, 60, "desk_down");
}

function move(desx, desy, type) {
    var myid = total_move;
    total_move++;
    var img = document.getElementById("people");

    var srcx = parseInt(img.style.left.substring(0, img.style.left.length - 2));
    var srcy = parseInt(img.style.top.substring(0, img.style.top.length - 2));
    var dx = desx - parseInt(img.style.left.substring(0, img.style.left.length - 2));
    if (dx == 0) {
        dx = 1;
    }

    var dy = desy - parseInt(img.style.top.substring(0, img.style.top.length - 2));
    var stepx = dx > 0 ? 1 : -1;
    var stepy = stepx * dy / dx
    if (Math.abs(stepy) > 1) {
        stepx = stepx / Math.abs(stepy);
        stepy = stepy / Math.abs(stepy);
    }
    var first = true;

    var tick = function () {
        animation_id = requestAnimationFrame(tick);
        if (myid == now_move) {
            var new_left = srcx + 'px';
            var new_top = srcy + 'px';
            img.style.left = new_left;
            img.style.top = new_top;
            srcx = srcx + stepx;
            srcy = srcy + stepy;
            get_block();
            if (Math.abs(parseInt(new_left.substring(0, new_left.length - 2)) - desx) <= 1 && Math.abs(parseInt(new_top.substring(0, new_top.length - 2)) - desy) <= 1) {
                var len = a.length;

                if (type == "pick") {
                    if (now != -1) {
                        var block = which_block();
                        block.style.visibility = "hidden";
                    }
                    if (len > 0) {
                        now = a[0];
                        a.splice(0, 1);
                    }
                    get_block();
                } else if (type == "down") {
                    if (now != -1) {
                        b.push(now);
                    }
                    set_block();
                } else if (type == "desk_pick") {
                    if (now != -1 && desk[0] != -1) {
                        var block = which_block();
                        block.style.visibility = "hidden";
                    }
                    if (desk[0] != -1) {
                        now = desk[0];
                        desk[0] = -1;
                    }
                } else if (type == "desk_down") {
                    if (now != -1) {
                        desk[0] = now;
                    }
                    set_block_on_desk();
                }
                cancelAnimationFrame(animation_id);
                now_move++;
            }

        } else {
            srcx = parseInt(img.style.left.substring(0, img.style.left.length - 2));
            srcy = parseInt(img.style.top.substring(0, img.style.top.length - 2));
            if (type == "pick") {
                desy = 60 + 65 * (6 - a.length);
            } else if (type == "down") {
                desy = 60 + 65 * b.length;
            }
            dx = desx - srcx == 0 ? 1 : desx - srcx;
            dy = desy - srcy;
            stepx = dx > 0 ? 1 : -1;
            stepy = stepx * dy / dx;
            if (Math.abs(stepy) > 1) {
                stepx = stepx / Math.abs(stepy);
                stepy = stepy / Math.abs(stepy);
            }
        }
    };
    tick();

}
