// Set Counters to 0, and generate random numbers for buttons and goal

let gamesWon = 0;
let gamesLost = 0;
let ringsCollected = 0;
let goal = Math.floor(Math.random() * 101) + 19;
let sonic = Math.floor(Math.random() * 12) + 1;
let knuckles = Math.floor(Math.random() * 12) + 1;
let tails = Math.floor(Math.random() * 12) + 1;
let amy = Math.floor(Math.random() * 12) + 1;

// Show starting counter values

$("#gamesWon").text("Chaos Emeralds Found: " + gamesWon);
$("#gamesLost").text("Chaos Emeralds Lost: " + gamesLost);
$("#goal").text("Goal: " + goal);
$("#ringsCollected").text("Rings Collected: " + ringsCollected);

// Create functions to add values to 'Rings Collected' when clicked

// Sonic button
$("#sonic").on("click", function(){
    ringsCollected = ringsCollected + sonic;    
    $("#ringsCollected").text("Rings Collected: " + ringsCollected);
    // Call win function if user meets the goal
    if (ringsCollected === goal) {
        win();
    }
    // Call function if user exceeds the goal
    if (ringsCollected > goal) {
        lose();
    }
})

// Knuckles button
$("#knuckles").on("click", function(){
    ringsCollected = ringsCollected + knuckles;    
    $("#ringsCollected").text("Rings Collected: " + ringsCollected);
    // Call win function if user meets the goal
    if (ringsCollected === goal) {
        win();
    }
    // Call function if user exceeds the goal
    if (ringsCollected > goal) {
        lose();
    }
})

// Tails button
$("#tails").on("click", function(){
    ringsCollected = ringsCollected + tails;    
    $("#ringsCollected").text("Rings Collected: " + ringsCollected);
    // Call win function if user meets the goal
    if (ringsCollected === goal) {
        win();
    }
    // Call function if user exceeds the goal
    if (ringsCollected > goal) {
        lose();
    }
})

// Amy button
$("#amy").on("click", function(){
    ringsCollected = ringsCollected + amy;    
    $("#ringsCollected").text("Rings Collected: " + ringsCollected);
    // Call win function if user meets the goal
    if (ringsCollected === goal) {
        win();
    }
    // Call function if user exceeds the goal
    if (ringsCollected > goal) {
        lose();
    }
})

// Define functions
function win() {
    alert("You Won! Click ok to play again!");
    reset();
    gamesWon++;
    $("#gamesWon").text("Chaos Emeralds Found: " + gamesWon);
}

function lose() {
    alert("You Lost! Click ok to play again!");
    reset();
    gamesLost++;
    $("#gamesLost").text("Chaos Emeralds Lost: " + gamesLost);
}

function reset() {
    ringsCollected = 0;
    $("#ringsCollected").text("Rings Collected: " + ringsCollected);
    goal = Math.floor(Math.random() * 101) + 19;
    $("#goal").text("Goal: " + goal);
    sonic = Math.floor(Math.random() * 12) + 1;
    knuckles = Math.floor(Math.random() * 12) + 1;
    tails = Math.floor(Math.random() * 12) + 1;
    amy = sonic = Math.floor(Math.random() * 12) + 1;
};

