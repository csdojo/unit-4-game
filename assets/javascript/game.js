// Grab reference to DOM elements
var $numberToGuess = document.getElementById("number-to-guess");
var $alerts = document.getElementById("alerts");
var $wins = document.getElementById("wins");
var $losses = document.getElementById("losses");
var $yourscores = document.getElementById("yourscores");

// set wins / losses/ your scores to 0
var wins = 0;
var losses = 0;
var yourscores = 0;

$wins.textContent = wins;
$losses.textContent = losses;

// number-to-guess is waiting for number to be generated;
var numberToGuess;

// set pickedNumber an empty array
var pickedNumber = [];
var alerts = "";

//set random number from 19-120


numberToGuess = Math.floor(Math.random() * 102) + 19;

$("#number-to-guess").text(numberToGuess);

var counter = 0;

var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

var fourArray = numberOptions.sort(function () { return 0.5 - Math.random(); }).slice(0, 4);


for (var i = 0; i < fourArray.length; i++) {
    // for each iteration, we will create an imageDiamond
    var imageDiamond = $("<img>");
    imageDiamond.addClass("diamond-image");
    imageDiamond.attr("id", "diamond-" + (i + 1).toString())
    imageDiamond.attr("src", "assets/images/d" + (i + 1).toString() + ".png");
    imageDiamond.attr("data-diamondvalue", fourArray[i]);
    $("#diamond").append(imageDiamond);
}


function resetGame() {
    counter = 0;

    numberToGuess = Math.floor(Math.random() * 102) + 19;

    $("#number-to-guess").text(numberToGuess);

    fourArray = numberOptions.sort(function () { return 0.5 - Math.random(); }).slice(0, 4);

    for (var i = 0; i < fourArray.length; i++) {
        $("#diamond-" + (i + 1).toString()).attr("data-diamondvalue", fourArray[i]);
    }

    $yourscores.textContent = counter;

    $numberToGuess = numberToGuess;
}


$(".diamond-image").on("click", function () {
    if (counter === 0){
        $("#alerts").text("");
    }
    var diamondValue = ($(this).attr("data-diamondvalue"));
    diamondValue = parseInt(diamondValue);
    counter += diamondValue;
    $("#yourscores").text(counter);

    if (counter === numberToGuess) {
        $("#alerts").text("You win!");
        wins++;
        $wins.textContent = wins;
        resetGame();
    }
    else if (counter > numberToGuess) {
        $("#alerts").text("You loss!");
        losses++;
        $losses.textContent = losses;
        resetGame();
    }
})






