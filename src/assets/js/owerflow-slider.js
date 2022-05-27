const timeout = 10;

let btn = document.getElementById('btn');
let slide = document.getElementById('slide');
let timer, mouseX, mouseY;

document.addEventListener('mousemove', onMouseUpdate, false);
document.addEventListener('mouseenter', onMouseUpdate, false);

function onMouseUpdate(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
}

if (btn) {
    btn.addEventListener("mousedown", function () {
        timer = setInterval(function () {
           slider();
        }, timeout);
    });
    document.addEventListener("mouseup", function () {
        clearInterval(timer)
    });
} else {
    console.warn('Id btn-slider not founded!')
}

function slider() {
    btn.style.left = mouseX + "px";
    btn.style.top = mouseY + "px";
    slide.style.width = mouseX + "px";
}