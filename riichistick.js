var clickableDiv = document.querySelector(".mahjong-image");
    
clickableDiv.addEventListener("click", function(event) {
    var imageContainer = document.createElement("div");
    var image = document.createElement("img");
    
    image.src = "img/riichistick.png";
    image.alt = "mahjong tile image";
    image.width = 100;
    image.height = 20;
    
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