var animals = [ document.getElementById("cat"), document.getElementById("dog"), document.getElementById("horse") ];
var animalType = document.getElementById("djurtyp");

animals[0].addEventListener("mouseover", function() {changeText(0);});
animals[1].addEventListener("mouseover", function() {changeText(1);});
animals[2].addEventListener("mouseover", function() {changeText(2);});

/*for (var i = 0; i < (animals.length); i++) {

    animals[i].addEventListener("mouseover", function() {changeText(i);});

}*/

function changeText(animal) { 

    switch(animal) {
        
        case 0:
            animalType.style.backgroundColor = ("lightblue");
            animalType.innerHTML = "Du pekar på en katt";
            break;
        case 1:
            animalType.style.backgroundColor = ("red");
            animalType.innerHTML = "Du pekar på en hund";
            break;
        case 2:
            animalType.style.backgroundColor = ("green");
            animalType.innerHTML = "Du pekar på en häst";
            break;
        
    }
    
}