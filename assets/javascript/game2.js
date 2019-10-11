let characters = {
    sonic: {name: "Sonic", value: 0},
    knuckles: {name: "Knuckles", value: 0},
    tails: {name: "Tails", value: 0},
    amy: {name: "Amy", value: 0}
}

let gamesWon = 0;
let gamesLost = 0;
let goal = 0;
let ringsCollected = 0;
let sonic = 0;
let knuckles = 0;
let tails = 0;
let amy = 0;
let isFinished = false;

$("#gamesWon").html("Chaos Emeralds Found: " + gamesWon);
$("#gamesLost").html("Chaos Emeralds Lost: " + gamesLost);
$("#goal").html("Goal: " + goal);
$("#ringsCollected").html("Rings Collected: " + ringsCollected);

$("#start").on("click", function(){
    for (let i = 1; i < 12; i++) {        
        let charVal = Math.floor(Math.random() * 12) + 1;      
        sonic = charVal
    }

    $("#sonic").val(sonic)

    for (let i = 1; i < 12; i++) {        
        let charVal = Math.floor(Math.random() * 12) + 1;      
        knuckles = charVal
    }

    $("#knuckles").val(knuckles)

    for (let i = 1; i < 12; i++) {        
        let charVal = Math.floor(Math.random() * 12) + 1;      
        tails = charVal
    }

    $("#tails").val(tails)

    for (let i = 1; i < 12; i++) {        
        let charVal = Math.floor(Math.random() * 12) + 1;      
        amy = charVal
    }

    $("#amy").val(amy)

    for (let i = 0; i < 101; i++) {        
        let randNum = Math.floor(Math.random() * 101) + 19;    
        goal = randNum
    }

    $("#goal").html("Goal: " + goal);
    
    ringsCollected = 0;

    $("#ringsCollected").html("Rings Collected: " + ringsCollected);
    

});


