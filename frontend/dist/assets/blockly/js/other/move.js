var a = 0;
function run(srcx, srcy, desx, desy) {
    var tick = function () {
        console.log(a);
        a++;
        animation_id = requestAnimationFrame(tick, c);
    };
    tick();
}
function move() {
    img = document.getElementById("people");
    var tick = function () {
        var new_left = (parseInt(img.style.left.substring(0, img.style.left.length - 2)) - 2) + 'px';
        var new_top = (parseInt(img.style.top.substring(0, img.style.left.length - 2)) - 2) + 'px';
        img.style.left = new_left;
        img.style.top = new_top;
        animation_id = requestAnimationFrame(tick);
        if (new_left == "0px") {
            cancelAnimationFrame(animation_id);
        }
    };
    tick();
}
//# sourceMappingURL=move.js.map