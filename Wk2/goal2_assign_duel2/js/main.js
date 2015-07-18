/*
Name: Nicholas Noriega Overly
Date: 07/18/2015
Assignment: Goal 2: Develop Duel #2
 */

//self-executing function
(function() {
    //Checks that html script works
    console.log("FIGHT!!!");

    //Array with players info: Name, DMG, Health
var playerOne = ["Kabal", 20, 100];
var playerTwo = ["Kratos", 20, 100];

    /*
    //setting player names
    var playerOneName = "Kabal";
    var playerTwoName = "Kratos";

    //setting player damage
    var player1Damage = 20;
    var player2Damage = 20;

    //setting starting player health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;
    */
    // setting round start
    var round = 0;
    //players will deal damage to each other for the next 10 rounds
    function fight() {
        console.log('in the fight function');
        // display starting healths and beginning of the fight to user
        //changed variables to Array items
        alert(playerOne[0]+':'+playerOne[2]+' *START* '+playerTwo[0]+':'+playerTwo[2]);
        //round will start at 0 and increment by 1 each time
        for(var i=0; i<10; i++){

            //random formula is - Math.floor(Math.random() * (max - min) + min);
            // minimum damage is set to 10 for each player
            //Changed to Array items (DMG)
            var minDamage1 = playerOne[1] * .5;
            var minDamage2 = playerTwo[1] * .5;
            //players will do damage equal to a random number between 0-20 and variable will be rounded down to nearest 10th
            //Changed to Array items (DMG)
            var f1 = Math.floor(Math.random()*playerOne[1]-minDamage1)+minDamage1;
            var f2 = Math.floor(Math.random()*playerTwo[1]-minDamage2)+minDamage2;

            //console.log(f1);
            //console.log(f2);

            //inflict damage
            //Changed to Array items (Health)
            playerOne[2]-=f1;
            playerTwo[2]-=f2;
            //displays current health after damage
            //Changed to Array (Name and Health)
            console.log(playerOne[0]+':'+playerOne[2]+playerTwo[0]+':'+playerTwo[2]);
            var results = winnerCheck();
            console.log(results);
            //if there is no winner, go to the next round
            if(results ==='no winner'){
                //adds a round if no winner
                round++;
                //alerts user that round is over and displays current health
                //Changed to Array items (Name, Health)
                alert(playerOne[0]+':'+playerOne[1]+' *ROUND '+round+' OVER* '+playerTwo[0]+':'+playerTwo[2]);
            }else{
                //if there is a winner or a tie, displays result and stops code
                alert(results);
                break;
            };

        };
    };

    // this function will check for a winner
    function winnerCheck(){
        //console.log('in winnerCheck FN');


        var result='no winner';
        //if both players are below 1 health in a same round- it is a tie (both die)
        //Changed to Array item (Health)
        if(playerOne[2]<1 && playerTwo[2]<1){
            //displays tie result
            result = 'You Both Die';
        // if players do not tie, and player one is below 1 health, player 2 wins
            //Changed to Array item (Health)
        }else if(playerOne[2]<1){
            //Changed to Array item (Name)
            result =playerTwo[0]+' WINS!!!'
        // if players do not tie, and player two is below 1 health, player 1 wins
            //Changed to Array item (Health)
        }else if(playerTwo[2]<1){
            //Changed to Array item (Name)
            result=playerOne[0]+ ' WINS!!!'
        };
        // function will get sent the information and check the outcome and finish code if one of the above is met
        return result;

    };


    /* Where program gets started */
    console.log("program starts")
    // calls function to start program
    fight();

})();

/*
Pseudocode:

set player one and two names, health, and damage
set rounds
set minimum damage
set damage to randomize between base damage and a minimum damage

once duel begins players will be dealt damage
 after each round, check for results
 display results to user after each round
if a player reaches 0 health before the other, he loses
if players both reach 0 health at the same time, it is a tie


 */