document.write('<script src="https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>')

var a=[9,5,7,6];
var b=new Array();
var c=new Array();
var pwbnum=-1;
var total_move=0;
var now_move=0;
var vir_length = a.length;
var vic_length = 4;//c size

function check() {
    var myid=total_move;
    total_move++;

    var tick = function() {
        animation_id=requestAnimationFrame(tick);

        if(myid==now_move){
            cancelAnimationFrame(animation_id);
            now_move++;

            setTimeout(function(){
                if(c[0]==90 &&c[1]==50 &&c[2]==70 &&c[3]==60){
                    alert("恭喜你通过本关");
                }
                else{
                    alert("没有完成呢,请再思考一下");
                }
            }, 500);
        }
    };

    tick();
}
function compile()
{
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    code=code+"check();\n";
    eval(code);
}
function reset() {
    a=[9,5,7,6];
    b=new Array();
    c=new Array();
    pwbnum=-1;
    total_move=0;
    now_move=0;
    vir_length = a.length;
    vic_length = 4;

    var img=document.getElementById("people");

    img.style.left="150px";
    img.style.top="200px";

    for (i=0;i<4;i++){
        document.getElementById("pt1num"+(i+1)).innerHTML=a[i];
        document.getElementById("pt1num"+(i+1)).style.visibility="visible";
        document.getElementById("pt3num"+(i+1)).innerHTML="";
    }
    for (i=0;i<2;i++){
        document.getElementById("pt2num"+(i+1)).innerHTML="";
    }

    document.getElementById("pwblock").style.display="none";
    Blockly.mainWorkspace.clear();
}
function which_block(qid){
    var block=-1;
    block=document.getElementById(qid);
    return block;
}

function down_block(sid){
    var img=document.getElementById("people");
    var srcx=parseInt(img.style.left.substring(0,img.style.left.length-2));
    var srcy=parseInt(img.style.top.substring(0,img.style.top.length-2));

    var block=which_block(sid);

    if(block!=-1){
        var pwblock=document.getElementById("pwblock");

        pwblock.style.left=(srcx+106)+"px";
        pwblock.style.top=(srcy-90)+"px";
    }

}

function move_to_down_2(num) {
    var did="pt2num"+num;
    move(150,160,"down2",did);
}
function move_to_pick(){
    if (vir_length>0){
        var sid="pt1num"+(a.length-vir_length+1);
        move(30,160,"pick",sid);
    }
    vir_length--;
}
function move_to_down() {
    if(vic_length>0){
        var did="pt3num"+(4-vic_length+1);
        move(300,160,"down",did);
    }
    vic_length--;
}
function move_to_write(num) {
    var did="pt2num"+num;
    move(150,160,"write",did);
}
function move_to_add(num) {
    var did="pt2num"+num;
    move(150,160,"add",did);
}
function showpwbcon(addtimes,string1,string2,string3) {
    pwblock=document.getElementById("pwblock")
    if(addtimes >=66){
        pwblock.innerHTML=string3;
    }else if (addtimes >= 33){
        pwblock.innerHTML=string2;
    }else {
        pwblock.innerHTML=string1;
    }
}
function move(desx,desy,type,qid) {
    var myid=total_move;
    total_move++;
    var img=document.getElementById("people");

    var block=document.getElementById(qid);
    var pwblock=document.getElementById("pwblock");

    pwblock.style.display="block";

    var srcx=parseInt(img.style.left.substring(0,img.style.left.length-2));//150
    var srcy=parseInt(img.style.top.substring(0,img.style.top.length-2));//200


    var dx=desx-parseInt(img.style.left.substring(0,img.style.left.length-2));//-120
    if(dx==0){
        dx=1;
    }

    var dy=desy-parseInt(img.style.top.substring(0,img.style.top.length-2));//-40
    var stepx=dx>0?1:-1;//-1
    var stepy=stepx*dy/dx//-40

    if(Math.abs(stepy)>1){
        stepx=stepx/Math.abs(stepy);//-0.025
        stepy=stepy/Math.abs(stepy);//-1
    }
    var addtimes=0;

    var tick = function() {
        animation_id=requestAnimationFrame(tick);
        addtimes++;
        if(myid==now_move){
            if (type=="add"){
                stepx==0;
                stepy==0;
            }
            srcx=srcx+stepx;
            srcy=srcy+stepy;

            var new_left=srcx+'px';
            var new_top=srcy+'px';

            img.style.left=new_left;
            img.style.top=new_top;

            if (type=="add"){
                down_block(qid);
                var string1= pwbnum;
                var string2= pwbnum+"+"+block.innerHTML;
                var string3= pwbnum+parseInt(block.innerHTML);
                showpwbcon(addtimes,string1,string2,string3);
            }else{
                down_block(qid);
            }
            if(Math.abs(parseInt(new_left.substring(0,new_left.length-2))-desx)<=1 && Math.abs(parseInt(new_top.substring(0,new_top.length-2))-desy)<=1){
                if (type!="add"){
                    cancelAnimationFrame(animation_id);
                    now_move++;
                }else {
                    if (addtimes>=100){
                        cancelAnimationFrame(animation_id);
                        now_move++;
                    }
                }

                if(type=="pick"){
                    pwblock.innerHTML=block.innerHTML;
                    pwbnum=parseInt(block.innerHTML);
                    block.style.visibility="hidden";
                }else if(type=="down2"){
                    var blength= block.getAttribute("id").length;
                    var n=parseInt(block.getAttribute("id").substring((blength-1),blength));
                    b[n-1]=pwbnum;
                    block.innerHTML=pwblock.innerHTML;
                    pwblock.innerHTML="";
                    pwbnum=-1;
                }else if(type=="write"){
                    pwblock.innerHTML=block.innerHTML;
                    pwbnum=parseInt(block.innerHTML);
                }else if(type=="add"){
                    //do nothing
                }else{
                    c.push(pwbnum);
                    block.innerHTML=pwblock.innerHTML;
                    pwblock.innerHTML="";
                }

            }

        }

        else{
            srcx=parseInt(img.style.left.substring(0,img.style.left.length-2));
            srcy=parseInt(img.style.top.substring(0,img.style.top.length-2));
            dx=desx-srcx==0?1:desx-srcx;
            dy=desy-srcy;
            stepx=dx>0?1:-1;
            stepy=stepx*dy/dx;
            if(Math.abs(stepy)>1){
                stepx=stepx/Math.abs(stepy);
                stepy=stepy/Math.abs(stepy);
            }

        }

    };
    tick();

}