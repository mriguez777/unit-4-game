//testing java script. it successfully calls javascript from this file and puts in on the HTML page. 

//alert ("Hey I work!")


//setting variable to use for total value accumulated from each click. and having it randomly generate a start value between 19 - 150
var randomNumber = Math.floor(Math.random() * 150) + 19;
//and the code to send this to the index page. magicrocknum is the id calling to the span in the index page displaying the number. .text means it is showing the contents which is randomNumber. Randome number is filled with the above code. 
$("#magicRockNum").text(randomNumber);

//Now I am creating the function to collect the number of clicks from any button:
//this variable is the starting point for the player
var number = 0;
//this tells this page to get the variable "number" and send it to the index page to be displayed. 
$("#total").text(number);
//now we are setting the array of numbers that can accumulate as we click the corresponding buttons. and the loop to run it after. 
var rockValue = [3, 11, 2, 9];

for (var i = 0; i < rockValue.length; i++) {
    console.log(rockValue[Math.floor(Math.random() * 1)])
}


//creating functions for buttons when clicked.
$("#blue").on("click", function () {
    console.log("I clicked blue rock");
});

$("#green").on("click", function () {
    console.log("I clicked green rock");
});

$("#yellow").on("click", function () {
    console.log("I clicked yellow rock");
});

$("#purple").on("click", function () {
    console.log("I clicked purple rock");
});

