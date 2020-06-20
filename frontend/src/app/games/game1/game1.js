document.write('<script src="https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>')






var a = ['a', 'b', 'c'];
var b = new Array();
var now = -1;
var total_move = 0;
var now_move = 0;
var virtual_length = a.length;
// var workspace=1;
// export{workspace}
var workspace;


// function test() {
//
//     alert('TestingFunction')
//
// }


function check() {
    var myid = total_move;
    total_move++;

// console.log(myid+" , "+now_move);

    var tick = function () {


        var animation_id = requestAnimationFrame(tick);

        if (myid == now_move) {
            cancelAnimationFrame(animation_id);
            now_move++;

            setTimeout(function () {

                if (b[0] == 'a' && b[1] == 'b' && b[2] == 'c') {
                    alert("恭喜你通过本关");
                    new_result();
                    new_history("1");
                }

                else {
                    alert("没有完成呢,请再思考一下");
                    new_history("0");
                }


            }, 500);


        }

    };
    tick();
}


function new_result() {
    //    console.log(localStorage.getItem("username"));
    $.ajax({
        type: "POST",
        dataType: "json",
        url: '/new_play_result',
        contentType: "application/x-www-form-urlencoded",
        data: {
            "username": localStorage.getItem("username"),
            "game_id": "1"
        },
        success: function (result) {
            //              console.log("成功");
        }
    });
}

function new_history(pass) {
    $.ajax({
        type: "POST",
        dataType: "json",
        url: '/new_play_history',
        contentType: "application/x-www-form-urlencoded",
        data: {
            "username": localStorage.getItem("username"),
            "game_id": "1",
            "pass": pass
        },
        success: function (result) {
            //      console.log("成功");
        }
    });
}


function reset() {

    a = ['a', 'b', 'c'];
    b.length = 0;
    now = -1;
    var img = document.getElementById("people");

    img.style.left = "150px"
    img.style.top = "200px";
    virtual_length = a.length;

    var x = document.getElementById("a");

    x.style.left = "10px"
    x.style.top = "10px";
    x.style.visibility = "visible";

    var y = document.getElementById("b");

    y.style.left = "10px"
    y.style.top = "30px";
    y.style.visibility = "visible";

    var z = document.getElementById("c");

    z.style.left = "10px"
    z.style.top = "50px";
    z.style.visibility = "visible";

    Blockly.mainWorkspace.clear();
}

function clear() {

    a = ['a', 'b', 'c'];
    b.length = 0;
    now = -1;
    var img = document.getElementById("people");

    img.style.left = "150px"
    img.style.top = "200px";
    virtual_length = a.length;

    var x = document.getElementById("a");

    x.style.left = "10px"
    x.style.top = "10px";
    x.style.visibility = "visible";

    var y = document.getElementById("b");

    y.style.left = "10px"
    y.style.top = "30px";
    y.style.visibility = "visible";

    var z = document.getElementById("c");

    z.style.left = "10px"
    z.style.top = "50px";
    z.style.visibility = "visible";
}


// export var compile=function() {
//     // clear();
//     var code = Blockly.JavaScript.workspaceToCode(this.workspace);
//     code = code + "check();\n";
//     //  alert(code);
//     // eval(code);
// }

function compile(){
    //   console.log(workspace);
    // clear();
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    code = code + "check();\n";
    //     alert(code);
    eval(code);
}

function set(t){
    //    console.log(t);
    workspace=t;
}

function which_block() {

    var img = document.getElementById("people");
    var srcx = parseInt(img.style.left.substring(0, img.style.left.length - 2));
    var srcy = parseInt(img.style.top.substring(0, img.style.top.length - 2));

    var block = -1;

    switch (now) {
        case 'a' :
            block = document.getElementById("a");
            break;
        case 'b' :
            block = document.getElementById("b");
            break;
        case 'c' :
            block = document.getElementById("c");
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
        var n = now.charCodeAt() - 97;


        block.style.left = (srcx + 60) + "px";
        block.style.top = (srcy - 100 - 50 * n) + "px"

    }


}


function set_block() {

    var img = document.getElementById("people");
    var srcx = parseInt(img.style.left.substring(0, img.style.left.length - 2));
    var srcy = parseInt(img.style.top.substring(0, img.style.top.length - 2));


    var block = which_block();

    if (block != -1) {

        var n = now.charCodeAt() - 97;

        block.style.left = (srcx + 120) + "px";
        block.style.top = (srcy - 50 - 50 * n) + "px"

    }

    now = -1;

}


function move_to_pick() {
    move(30, 60 + 80 * (3 - virtual_length), "pick");

    if (virtual_length > 0) {
        virtual_length = virtual_length - 1;
    }

}

function move_to_down() {
    move(330, 60 + 80 * b.length, "down");
}


function move_with_blocks() {

    var img = document.getElementById("people");
    var srcx = parseInt(img.style.left.substring(0, img.style.left.length - 2));
    var srcy = parseInt(img.style.top.substring(0, img.style.top.length - 2));


    var block = which_block();

    if (block != -1) {

        block.style.left = (srcx + 60) + "px";
        block.style.top = (srcy - 100) + "px"

    }


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


        var animation_id = requestAnimationFrame(tick);


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
                }

                else {
                    if (now != -1) {
                        b.push(now);
                    }
                    set_block();
                }


                cancelAnimationFrame(animation_id);
                now_move++;
            }


        }

        else {
            srcx = parseInt(img.style.left.substring(0, img.style.left.length - 2));
            srcy = parseInt(img.style.top.substring(0, img.style.top.length - 2));
            if (type == "pick") {
                desy = 60 + 80 * (3 - a.length);
            }
            else {
                desy = 60 + 80 * b.length;
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

export{compile,reset,set}





