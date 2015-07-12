/*
Name: Nicholas Noriega Overly
Date: 07/11/2015
Assignment: Goal 1: Analyze Duel #1
 */

//self-executing function
(function() {
    //Checks that html script works
    console.log("FIGHT!!!");


    //setting player names
    var playerOneName = "Kabal";
    var playerTwoName = "Kratos";

    //setting player damage
    var player1Damage = 20;
    var player2Damage = 20;

    //setting starting player health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;
    // setting round start
    var round = 0;
    //players will deal damage to each other for the next 10 rounds
    function fight() {
        console.log('in the fight function');
        // display starting healths and beginning of the fight to user
        alert(playerOneName+':'+playerOneHealth+' *START* '+playerTwoName+':'+playerTwoHealth);
        //round will start at 0 and increment by 1 each time
        for(var i=0; i<10; i++){

            //random formula is - Math.floor(Math.random() * (max - min) + min);
            // minimum damage is set to 10 for each player
            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;
            //players will do damage equal to a random number between 0-20 and variable will be rounded down to nearest 10th
            var f1 = Math.floor(Math.random()*player1Damage-minDamage1)+minDamage1;
            var f2 = Math.floor(Math.random()*player2Damage-minDamage2)+minDamage2;

            //console.log(f1);
            //console.log(f2);

            //inflict damage
            playerOneHealth-=f1;
            playerTwoHealth-=f2;
            //displays current health after damage
            console.log(playerOneName+':'+playerOneHealth+playerTwoName+':'+playerTwoHealth);
            var results = winnerCheck();
            console.log(results);
            //if there is no winner, go to the next round
            if(results ==='no winner'){
                //adds a round if no winner
                round++;
                //alerts user that round is over and displays current health
                alert(playerOneName+':'+playerOneHealth+' *ROUND '+round+' OVER* '+playerTwoName+':'+playerTwoHealth);
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
        if(playerOneHealth<1 && playerTwoHealth<1){
            //displays tie result
            result = 'You Both Die';
        // if players do not tie, and player one is below 1 health, player 2 wins
        }else if(playerOneHealth<1){
            result =playerTwoName+' WINS!!!'
        // if players do not tie, and player two is below 1 health, player 1 wins
        }else if(playerTwoHealth<1){
            result=playerOneName+ ' WINS!!!'
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