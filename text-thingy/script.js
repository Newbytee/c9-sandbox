"use strict";

const text = document.getElementById("testText");

setInterval(function() {
    text.removeAttribute("style");
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            text.style.transform = "rotateX(180deg)";
            break;
        case 1:
            text.style.transform = "rotateY(180deg)";
            break;
    }
}, 1000);