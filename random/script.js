var quotes = [ "Donkeys are great", "The moment I dread when cs188 makes a poop of me", "Shrek 3000", "Harrybo" ];
var box = document.getElementById("ruta");
var p = document.getElementById("paragraph");

function listQuotes() {
    
    var print = "";
    
    for (var i = 0; i < quotes.length; i++) {
        
        print += quotes[i] + "<br>";
        
    }
    
    return print;
    
}

function addQuote(printType) {
    
    if (printType === "randomQuote") {
    
        box.innerHTML = quotes[randomInt(quotes.length)];
        
    } else if (printType === "all") {
        
        box.innerHTML = listQuotes();
        
        /*for (var i = 0; i < quotes.length; i++) {

            //box.appendChild("<p>" + quotes[i] + "</p><br>"); //https://www.w3schools.com/jsref/met_node_appendchild.asp
            
        }*/
        
    }
    
}

function randomInt(max) {
    
    var random = Math.floor(Math.random() * Math.floor(max));
    return random;
    
}