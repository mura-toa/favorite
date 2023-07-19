/* select ink color */
var a = 0;
if (a == 0) {
    var colors = ["blue", "#FFCC00", "yellow", "lime", "fuchsia"];
    var randomcolor = colors[Math.floor(Math.random() * colors.length)];
    a = a + 1;
}
const color = randomcolor;

/* main */
var clickableDiv = document.querySelector(".splatoon");
  
clickableDiv.addEventListener("click", function(event) {
    var body = document.body;

    body.addEventListener("click", function(event) {
        var x = event.clientX;
        var y = event.clientY;
        var circle = document.createElement("div");
        var min = 60;
        var max = 80;
        var w = Math.floor(Math.random() * (max - min + 1)) + min;
        var h = Math.floor(Math.random() * (max - min + 1)) + min;

        circle.style.width = w + "px";
        circle.style.height = h + "px";
        circle.style.borderRadius = "50%";
        circle.style.backgroundColor = color;
        circle.style.position = "absolute";
        circle.style.left = x - 50 + "px";
        circle.style.top = y - 50 + "px";

        if (y<500) {
            document.body.appendChild(circle);
        }
    });
});
