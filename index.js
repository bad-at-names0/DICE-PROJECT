var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;

var imagesPath1 = "images/dice" + randomNumber1 + ".png";

var source1 = document.querySelectorAll("img")[0];

source1.setAttribute("src", imagesPath1);



var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6) + 1;

var imagesPath2 = "images/dice" + randomNumber2 + ".png";

var source2 = document.querySelectorAll("img")[1];

source2.setAttribute("src", imagesPath2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "PLayer 1 Wins";
} else if ( randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML ="Player 2 Wins";
} else {
    document.querySelector("h1").innerHTML ="Draw !";
}

