//testing java script. it successfully calls javascript from this file and puts in on the HTML page. 

//alert ("Hey I work!")


//setting variable to use for total value accumulated from each click. and having it randomly generate a start value between 19 - 150
var randomNumber = Math.floor(Math.random() * 150) + 19;
//and the code to send this to the index page. magicrocknum is the id calling to the span in the index page displaying the number. .text means it is showing the contents which is randomNumber. Randome number is filled with the above code. 
$("#magicRockNum").text(randomNumber);

//Now I am creating the function to collect the number of clicks from any button:
//this variable is the starting point for the player
var number = 0;

//variables set to count wins and loses. 
var winner = "0";
var loser = "0";


//this tells this page to get the variable "number" and send it to the index page to be displayed. 
$("#total").text(number);

//now we are setting the array of numbers that can accumulate as we click the corresponding buttons. and the loop to run it after. 
var rockValue = [3, 11, 2, 9];

for (var i = 0; i < rockValue.length; i++) {
    console.log(rockValue[Math.floor(Math.random() * 1)])
    var button = $("<img>");
    button.addClass("rock");
    button.attr("src", "https://cdn11.bigcommerce.com/s-hgy8hs1a/images/stencil/2048x2048/products/6962/11370/Fluorite_7121K__03952.1530399608.jpg?c=2");
    button.attr("data", rockValue[i]);
    $("#game").append(button);
}

$(".rock").on("click", function () {


    var value = ($(this).attr("data"));
    value = parseInt(value);

    number += value;

    alert("New score: " + number);

    if (number === randomNumber) {
        alert("You win!");
    }

    else if (cnumber >= randomNumber) {
        alert("You lose!!");
    }

});


//this is the function I was going to write to calculate all the totals each time a button was pressed. 
function counting () {
    var 
}

//Below is code I started with but ditched because I was not get the functionality I needed. I would still need to add a counting function for the players total, wins and losses. I would also need to include functionality to check if the players number reaches the "magic rock number" and if not count it as a loss. 

//creating functions for buttons when clicked.
//$("#blue").on("click", function () {
    //console.log("I clicked blue rock");

//});

//$("#green").on("click", function () {
   // console.log("I clicked green rock");
    //number++;
//});

//$("#yellow").on("click", function () {
    //console.log("I clicked yellow rock");
    //number++;
//});

//$("#purple").on("click", function () {
    //console.log("I clicked purple rock");
    //number++;
//});

