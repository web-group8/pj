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
    var new_left = (parseInt(img.style.left.substring(0, img.style.left.length - 2)) - 10) + 'px';
    var new_top = (parseInt(img.style.top.substring(0, img.style.left.length - 2)) - 10) + 'px';
    img.style.left = new_left;
    img.style.top = new_top;
}
//# sourceMappingURL=move - 副本.js.map