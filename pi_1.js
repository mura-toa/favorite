/* pieces list */
const pieces = ["manzu1","manzu2","manzu3", "manzu4", "manzu5","manzu6","manzu7", "manzu8", "manzu9", "manzu5Red", "whiteDragon", "greenDragon", "redDragon", "reachStick"]

/* main */
var clickableDiv = document.querySelector(".mahjong-image");
    
clickableDiv.addEventListener("click", function(event) {
    var imageContainer = document.createElement("div");
    var image = document.createElement("img");
    const random_num = Math.floor(Math.random() * pieces.length);

    if ( pieces[random_num] != "reachStick") {
        image.src = "./img/" + pieces[random_num] + ".png";
        image.alt = "mahjong pi image";
        image.width = 40;
        image.height = 60;
    } else {
        image.src = "./img/reachStick.png";
        image.alt = "reach stick image";
        image.width = 120;
        image.height = 20;
    }

    
    imageContainer.appendChild(image);
    document.body.appendChild(imageContainer);
    imageContainer.classList.add("hidden");
    imageContainer.classList.remove("hidden");

    var randomRotation = Math.floor(Math.random() * 360);
    image.style.transform = "rotate(" + randomRotation + "deg)";
    
    imageContainer.style.position = "absolute";
    imageContainer.style.left = event.pageX - 50 + "px";
    imageContainer.style.top = event.pageY - 50 + "px";
});