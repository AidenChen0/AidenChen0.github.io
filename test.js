let dotBeingDragged = false;

let dots = document.querySelectorAll(".dot");
let size = dots[0].offsetWidth;

for (const dot of dots) {

    dot.style.left = Math.floor(Math.random() * 400) + "px";
    dot.style.top = Math.floor(Math.random() * 400) + 100 + "px";

    dot.addEventListener("mousedown", function(mouseEvent) {
        mouseEvent.preventDefault();
        dotBeingDragged = mouseEvent.target.id;
    });
}


window.addEventListener("mouseup", function() {
    dotBeingDragged = false;
});

window.addEventListener("mousemove", function(mouseEvent) {
    mouseEvent.preventDefault()
    if (dotBeingDragged) {
        let dot = document.getElementById(dotBeingDragged);
        dot.style.left = mouseEvent.x - size/2 + "px";
        dot.style.top = mouseEvent.y - size/2 + "px";
    }
});