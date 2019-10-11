// Set Counters to 0, and generate random numbers for buttons and goal

let gamesWon = 0;
let gamesLost = 0;
let ringsCollected = 0;
let goal = Math.floor(Math.random() * 101) + 19;
let sonic = Math.floor(Math.random() * 12) + 1;
let knuckles = Math.floor(Math.random() * 12) + 1;
let tails = Math.floor(Math.random() * 12) + 1;
let amy = Math.floor(Math.random() * 12) + 1;
let startGame = true;
let endGame = false;

// Show starting counter values

$("#gamesWon").text("Chaos Emeralds Found: " + gamesWon);
$("#gamesLost").text("Chaos Emeralds Lost: " + gamesLost);
$("#goal").text("Goal: " + goal);
$("#ringsCollected").text("Rings Collected: " + ringsCollected);
$("#playAgain").hide();

// Create functions to add values to 'Rings Collected' when clicked

$("#sonic").on("click", function(){
    ringsCollected = ringsCollected + sonic;    
    $("#ringsCollected").text("Rings Collected: " + ringsCollected);
    if (ringsCollected === goal) {
        win();
    }
    if (ringsCollected > goal) {
        lose();
    }
})

$("#knuckles").on("click", function(){
    ringsCollected = ringsCollected + knuckles;    
    $("#ringsCollected").text("Rings Collected: " + ringsCollected);
    if (ringsCollected === goal) {
        win();
    }
    if (ringsCollected > goal) {
        lose();
    }
})

$("#tails").on("click", function(){
    ringsCollected = ringsCollected + tails;    
    $("#ringsCollected").text("Rings Collected: " + ringsCollected);
    if (ringsCollected === goal) {
        win();
    }
    if (ringsCollected > goal) {
        lose();
    }
})

$("#amy").on("click", function(){
    ringsCollected = ringsCollected + amy;    
    $("#ringsCollected").text("Rings Collected: " + ringsCollected);
    if (ringsCollected === goal) {
        win();
    }
    if (ringsCollected > goal) {
        lose();
    }
})

function win() {
    alert("You Won!");
    reset();
    gamesWon++;
    $("#gamesWon").text("Chaos Emeralds Found: " + gamesWon);
}

function lose() {
    alert("You Lost");
    reset();
    gamesLost++;
    $("#gamesLost").text("Chaos Emeralds Lost: " + gamesLost);
}

function reset() {
    ringsCollected = 0;
    $("#ringsCollected").text("Rings Collected: " + ringsCollected);
    goal = Math.floor(Math.random() * 101) + 19;
    sonic = Math.floor(Math.random() * 12) + 1;
    knuckles = Math.floor(Math.random() * 12) + 1;
    tails = Math.floor(Math.random() * 12) + 1;
    amy = sonic = Math.floor(Math.random() * 12) + 1;
};