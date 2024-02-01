let script = document.createElement('script');
script.src = 'jquery-3.7.1.js';
document.getElementsByTagName('head')[0].appendChild(script);

// Dice Pictures
let diceArray = [
    'assets/dice-six-faces-one.png',
    'assets/dice-six-faces-two.png',
    'assets/dice-six-faces-three.png',
    'assets/dice-six-faces-four.png',
    'assets/dice-six-faces-five.png',
    'assets/dice-six-faces-six.png'
]

// Sets Random values between 0 and 5
let randDice1 = Math.floor(Math.random() * 6);
let randDice2 = Math.floor(Math.random() * 6);

// Variable Declarations
let timer; // Timer to run dice
let timer2; // Timer to run the Dice Counter
let counter; // Dice Counter
let currentPoints = 0; // Current Points

// Starts Dice Roll
function startDice () {

    timer = window.setInterval('RollDice()', 400);
    timer2 = window.setInterval('DiceCounter()', 400);

}
// Stops Game
function stopGame () {

    window.clearInterval(timer);

}
// Rolls the Dice
function RollDice () {

        // Makes button un-clickable after one click
        let btn = document.getElementById('roll_btn')
        $(btn).addClass('disabled');

        // Gets dice images
        let img1 = document.getElementById('dice_one')
        let img2 = document.getElementById('dice_two')

        // Sets random dice values from 0-5
        randDice1 = Math.floor(Math.random() * 6);
        randDice2 = Math.floor(Math.random() * 6);

        //Debug Logs the values
        console.log(randDice1);
        console.log(randDice2);

        // Sets the dice images to the value
        img1.src = diceArray[randDice1]
        img2.src = diceArray[randDice2]

        // Makes button enabled again for next roll
        $(btn).removeClass('disabled');

}

// Adds up the dice values by adding the index's and adding 2
function DiceCounter (){

    counter = randDice1 + randDice2 + 2
    let text = document.getElementById('roll_text')
    //text.innerHTML = `Current Roll [${counter}]`;

}

// Once they roll once, PlayAgain is called to roll again
function playAgain(){

    if (currentPoints === 0){
        currentPoints = counter;
        let text = document.getElementById('roll_text')
        text.innerHTML = `Your Point [${currentPoints}]`
    }

    startDice();
    setTimeout(() => { stopGame();  }, 1500);
    setTimeout(() => {

        if (counter === currentPoints) {

            let text = document.getElementById('roll_text')
            text.innerHTML = 'YOU ARE A WINNER!'

            $(" ").replaceAll("#roll_btn");

            console.log(counter)

            console.log("Winner")
            //Winner

        } else if (counter === 7) {

            let text = document.getElementById('roll_text')
            text.innerHTML = 'YOU HAVE LOST!'

            $(" ").replaceAll("#roll_btn");

            console.log("Loser")
            //Loser

        }
    }, 1500);

}

// Plays the game by calling all the functions and checking the results
function playGame() {

    startDice();
    setTimeout(() => { stopGame();  }, 1500);
    setTimeout(() => {

        if (counter === 7 || counter === 11){

            let text = document.getElementById('roll_text')
            text.innerHTML = 'YOU ARE A WINNER!'

            $(" ").replaceAll("#roll_btn");

            console.log(counter)

            console.log("Winner")
            //Winner

        }
        else if (counter === 2 || counter === 3 || counter === 12){

            let text = document.getElementById('roll_text')
            text.innerHTML = 'YOU HAVE LOST!'

            $(" ").replaceAll("#roll_btn");

            console.log("Loser")
            //Loser

        }
        else{

            $("<a id=\"roll_btn\" onclick=\"playAgain()\" class=\"btn-large elevated blue darken-2 center-align\">\n" +
                "                        Hit your Point\n" +
                "                    </a>").replaceAll("#roll_btn");

        }

    }, 1500);

}