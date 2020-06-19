document.write('<script src="https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>')

var total_move = 0;
var now_move = 0;
var direction = 0;
var position_x = 8;
var position_y = 0;
var virtual_direction = direction;
var virtual_position_x = position_x;
var virtual_position_y = position_y;
var red_count = 0;
var death = false;
var step = 0;


// 0为道路，1是旗子，2是墙，3是起点，4是终点
var play_map = [
    [1, 0, 0, 0, 0, 0, 0, 2, 4],
    [0, 2, 0, 2, 1, 2, 0, 2, 0],
    [0, 0, 0, 0, 0, 2, 0, 0, 0],
    [0, 2, 0, 2, 0, 0, 1, 2, 0],
    [0, 2, 0, 0, 0, 2, 0, 0, 0],
    [0, 2, 0, 2, 0, 1, 0, 2, 0],
    [0, 0, 1, 2, 0, 2, 0, 2, 0],
    [0, 2, 0, 2, 0, 2, 0, 2, 0],
    [3, 0, 0, 0, 0, 2, 0, 0, 0]];

const scene = new THREE.Scene();
const SCREEN_WIDTH = window.innerWidth, SCREEN_HEIGHT = window.innerHeight;
const VIEW_ANGLE = 45, ASPECT = 1, NEAR = 0.3, FAR = 1000;
const camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);


camera.position.set(-15, 100, 150);
camera.lookAt(new THREE.Vector3(45, -10, 40));


scene.add(camera);

const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
renderer.setSize(400, 400);
document.body.appendChild(renderer.domElement);


const light = new THREE.AmbientLight(0xaaaaaa);
scene.add(light);

const red = new THREE.MeshBasicMaterial({
    color: 0xff0000
});


const black = new THREE.MeshBasicMaterial({
    color: 0x000000
});

const grey = new THREE.MeshBasicMaterial({
    color: 0x8DB6CD
});

const white = new THREE.MeshBasicMaterial({
    color: 0xFFFFFF
});

const green = new THREE.MeshBasicMaterial({
    color: 0x00FF00

});


const textureLoader = new THREE.TextureLoader();

const WallMaterial = [
    new THREE.MeshBasicMaterial({
        map: textureLoader.load('../../asserts/game/brick_diffuse.jpg'),
        side: THREE.FrontSide
    }), // right
    new THREE.MeshBasicMaterial({
        map: textureLoader.load('../../asserts/game/brick_diffuse.jpg'),
        side: THREE.FrontSide
    }), // left
    new THREE.MeshBasicMaterial({
        map: textureLoader.load('../../asserts/game/brick_diffuse.jpg'),
        side: THREE.FrontSide
    }), // top
    new THREE.MeshBasicMaterial({
        map: textureLoader.load('../../asserts/game/brick_diffuse.jpg'),
        side: THREE.FrontSide
    }), // bottom
    new THREE.MeshBasicMaterial({
        map: textureLoader.load('../../asserts/game/brick_diffuse.jpg'),
        side: THREE.FrontSide
    }), // back
    new THREE.MeshBasicMaterial({
        map: textureLoader.load('../../asserts/game/brick_diffuse.jpg'),
        side: THREE.FrontSide
    })  // front
];

const FloorMaterial = [
    new THREE.MeshBasicMaterial({
        map: textureLoader.load('../../asserts/game/floor.png'),
        side: THREE.FrontSide
    }), // right
    new THREE.MeshBasicMaterial({
        map: textureLoader.load('../../asserts/game/floor.png'),
        side: THREE.FrontSide
    }), // left
    new THREE.MeshBasicMaterial({
        map: textureLoader.load('../../asserts/game/floor.png'),
        side: THREE.FrontSide
    }), // top
    new THREE.MeshBasicMaterial({
        map: textureLoader.load('../../asserts/game/floor.png'),
        side: THREE.FrontSide
    }), // bottom
    new THREE.MeshBasicMaterial({
        map: textureLoader.load('../../asserts/game/floor.png'),
        side: THREE.FrontSide
    }), // back
    new THREE.MeshBasicMaterial({
        map: textureLoader.load('../../asserts/game/floor.png'),
        side: THREE.FrontSide
    })  // front
];


const block = new THREE.BoxGeometry(10, 5, 10);

const people = new THREE.BoxGeometry(5, 5, 5);

var people_cube;


const edgesMtl = new THREE.LineBasicMaterial({color: 0x000000});


function reset() {
    direction = 0;
    position_x = 8;
    position_y = 0;
    virtual_direction = direction;
    virtual_position_x = position_x;
    virtual_position_y = position_y;
    red_count = 0;
    death = false;
    step = 0;
    play_map = [
        [1, 0, 0, 0, 0, 0, 0, 2, 4],
        [0, 2, 0, 2, 1, 2, 0, 2, 0],
        [0, 0, 0, 0, 0, 2, 0, 0, 0],
        [0, 2, 0, 2, 0, 0, 1, 2, 0],
        [0, 2, 0, 0, 0, 2, 0, 0, 0],
        [0, 2, 0, 2, 0, 1, 0, 2, 0],
        [0, 0, 1, 2, 0, 2, 0, 2, 0],
        [0, 2, 0, 2, 0, 2, 0, 2, 0],
        [3, 0, 0, 0, 0, 2, 0, 0, 0]];
    scene.remove(people_cube);
    people_cube.position.x = -3;
    people_cube.position.z = 85;
    scene.add(people_cube);

    Blockly.mainWorkspace.clear();

}


function check() {
    var myid = total_move;
    total_move++;
    var tick = function () {
        var animation_id = requestAnimationFrame(tick);
        if (death == true) {
            cancelAnimationFrame(animation_id);
            now_move++;
            alert("这里不能通过，请再思考一下");
        } else if (myid == now_move) {
            cancelAnimationFrame(animation_id);
            now_move++;
            setTimeout(function () {
                console.log(red_count + " , " + position_x + " , " + position_y);
                if (red_count == 5 && play_map[position_x][position_y] == 4) {
                    alert("恭喜您通关!一共走了" + step + "步");
                    if (step <= 30){
                        alert("恭喜您完成了步数挑战！")
                    }
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


function main() {
    for (var i = 0; i < play_map.length; i++) {
        for (var j = 0; j < play_map[i].length; j++) {
            switch (play_map[i][j]) {
                case 0 :
                    add_block_with_texture(FloorMaterial, 10 * j, 10 * i);
                    break;
                case 1 :
                    add_block(red, 10 * j, 10 * i);
                    break;
                case 2 :
                    add_block_with_texture(WallMaterial, 10 * j, 10 * i);
                    break;
                case 3 :
                    add_block(green, 10 * j, 10 * i);
                    add_people(white, 10 * j, 10 * i);
                    break;
                case 4 :
                    add_block(green, 10 * j, 10 * i);
                    break;
            }
        }
    }

    function render() {
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }
    render();
}

function add_block(color, x, z) {
    var cubeEdges = new THREE.EdgesGeometry(block, 1);
    var cubeLine = new THREE.LineSegments(cubeEdges, edgesMtl);
    var material = color
    var cube = new THREE.Mesh(block, material);
    cube.position.x = x;
    cube.position.z = z;
    cube.add(cubeLine);
    scene.add(cube);
}


function add_people(color, x, z) {
    var material = color
    people_cube = new THREE.Mesh(people, material);
    people_cube.position.x = x - 1.5;
    people_cube.position.y = 10;
    people_cube.position.z = z + 5;
    scene.add(people_cube);
}


function add_block_with_texture(texture, x, z) {
    var cubeEdges = new THREE.EdgesGeometry(block, 1);
    var cubeLine = new THREE.LineSegments(cubeEdges, edgesMtl);
    cube = new THREE.Mesh(block, texture);
    cube.add(cubeLine);
    cube.position.x = x;
    cube.position.z = z;
    scene.add(cube);
}


// 0是上，1是右，2是下，3是左
function which_direction_to_move() {
    switch (direction) {
        case 0:
            people_cube.position.z = people_cube.position.z - 0.1;
            break;
        case 1:
            people_cube.position.x = people_cube.position.x + 0.1;
            break;
        case 2:
            people_cube.position.z = people_cube.position.z + 0.1;
            break;
        case 3:
            people_cube.position.x = people_cube.position.x - 0.1;
            break;

    }

}


function change_position() {
    switch (direction) {
        case 0:
            position_x = position_x - 1;
            break;
        case 1:
            position_y = position_y + 1;
            break;
        case 2:
            position_x = position_x + 1;
            break;
        case 3:
            position_y = position_y - 1;
            break;

    }

}


function change_virtual_position() {
    switch (virtual_direction) {
        case 0:
            virtual_position_x = virtual_position_x - 1;
            step++;
            break;
        case 1:
            virtual_position_y = virtual_position_y + 1;
            step++;
            break;
        case 2:
            virtual_position_x = virtual_position_x + 1;
            step++;
            break;
        case 3:
            virtual_position_y = virtual_position_y - 1;
            step++;
            break;
    }
}


function turn_right() {
    var myid = total_move;
    total_move++;
    virtual_direction = (virtual_direction + 1) % 4;

    function tick() {

        var animation_id = requestAnimationFrame(tick);


        if (death == true) {
            cancelAnimationFrame(animation_id);
            now_move++;
        }

        if (myid == now_move) {
            direction = (direction + 1) % 4;
            cancelAnimationFrame(animation_id);
            now_move++;

        }

    }

    tick();
}


function turn_left() {
    var myid = total_move;
    total_move++;
    virtual_direction = (virtual_direction + 3) % 4;

    function tick() {

        var animation_id = requestAnimationFrame(tick);

        if (death == true) {
            cancelAnimationFrame(animation_id);
            now_move++;
        }

        if (myid == now_move) {
            direction = (direction + 3) % 4;
            cancelAnimationFrame(animation_id);
            now_move++;

        }

    }

    tick();
}


function move() {
    change_virtual_position();
    var myid = total_move;
    total_move++;
    var target = 10;
    var route = 0;
    function tick() {
        var animation_id = requestAnimationFrame(tick);
        if (death == true) {
            cancelAnimationFrame(animation_id);
        }
        if (myid == now_move) {
            scene.remove(people_cube);
            route = route + 0.1;
            which_direction_to_move();
            scene.add(people_cube);
            if (Math.abs(route - target) < 1e-6) {
                cancelAnimationFrame(animation_id);
                change_position();
                if (play_map[position_x][position_y] == 0) {
                    play_map[position_x][position_y] = -1;
                    red_count++;
                } else if (play_map[position_x][position_y] == 2 || position_x < 0 || position_x > 8 || position_y < 0 || position_y > 8) {
                    death = true;
                }
                now_move++;
            }

        }

    }

    tick();

}