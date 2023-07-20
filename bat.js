document.addEventListener("DOMContentLoaded", function() {
    const cursorArea = document.querySelector(".bat-container");
    const customCursor = document.createElement("img");
    customCursor.setAttribute("src", "img/bat.png");
    customCursor.classList.add("custom-cursor");
    document.body.appendChild(customCursor);
  
    let isRotated = false;
  
    document.addEventListener("mousemove", function(e) {
      customCursor.style.left = e.pageX - customCursor.width / 2 + "px";
      customCursor.style.top = e.pageY - customCursor.height / 2 + "px";
    });
  
    cursorArea.addEventListener("mouseenter", function() {
      customCursor.style.display = "block";
    });
  
    cursorArea.addEventListener("mouseleave", function() {
      customCursor.style.display = "none";
    });
  
    cursorArea.addEventListener("click", function() {
      if (isRotated) {
        customCursor.style.transform = "none";
      } else {
        customCursor.style.transform = "rotate(-90deg)";
      }
      isRotated = !isRotated;
    });
  });