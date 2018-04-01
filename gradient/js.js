var height = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
var divBackground = document.getElementById("background");

function resize() {
    
    divBackground.style.height = "200px";
    
}