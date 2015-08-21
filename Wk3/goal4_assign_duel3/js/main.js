/*
Name: Nicholas Noriega Overly
Date: 07/18/2015
Assignment: Goal 2: Develop Duel #2
 */

//self-executing function
(function() {
    //Checks that html script works
    console.log("FIGHT!!!");

    //DOM pieces
    var fighter1_txt = document.querySelector("#kabal").querySelector("p");

    var fighter2_txt = document.querySelector("#kratos").querySelector("p");

    var round_txt = document.querySelector("h4");

    var button = document.getElementById("fight_btn");

    console.log();

    //Button setup with click event calls fight function
    button.addEventListener("click", fight, false);

    // Array with Objects with players properties(keys): Name, DMG, Health
    var fighters = [
        {
            //Index 0
            name:"Kabal", damage:20, health:100
        },

        {
            //Index 1
            name:"Kratos", damage:20, health:100
        }];




    // Variable that will keep track of rounds
    var round = 1;

    //Starts DOM innerHTML txt for top of page
    round_txt.innerHTML = "Click FIGHT BUTTON to Start!";
    //Get fighters name from index 0 and fighters health
    fighter1_txt.innerHTML = fighters[0].name + ":   " + fighters[0].health;
    //Get fighters name from index 1 and fighters health
    fighter2_txt.innerHTML = fighters[1].name + ":   " + fighters[1].health;



    //players will deal damage to each other for the next 10 rounds
    function fight() {
        console.log('in the fight function');
        // display starting healths and beginning of the fight to user
        //changed variables to Array items
        //alert commented out: alert(playerOne[0]+':'+playerOne[2]+' *START* '+playerTwo[0]+':'+playerTwo[2]);

        fighter1_txt.innerHTML = fighters[0].name + ":   " + fighters[0].health;
        fighter2_txt.innerHTML = fighters[1].name + ":   " + fighters[1].health;



        //round will start at 0 and increment by 1 each time
        //for(var i=0; i<10; i++){

            //random formula is - Math.floor(Math.random() * (max - min) + min);
            // minimum damage is set to 10 for each player
            //Changed to Array items (DMG)
            //var minDamage1 = playerOne[1] * .5;
            //var minDamage2 = playerTwo[1] * .5;
            //players will do damage equal to a random number between 0-20 and variable will be rounded down to nearest 10th
            //Changed to Array items (DMG)
            //Code change: uses array of objects
            var f1 = Math.floor(Math.random() * fighters[0].damage + fighters[0].damage * .5);
            var f2 = Math.floor(Math.random() * fighters[1].damage + fighters[1].damage * .5);

            //console.log(f1);
            //console.log(f2);

            //inflict damage
            //Changed to Array items (Health)

            //Code change: uses array of objects
            fighters[0].health -= f1;
            fighters[1].health -= f2;
            //displays current health after damage
            //Changed to Array (Name and Health)
            //console.log(playerOne[0]+':'+playerOne[2]+playerTwo[0]+':'+playerTwo[2]);

            var results = winnerCheck();
            console.log(results);

            //if there is no winner, go to the next round
            //Uses innerHTML to show round number and results
            round_txt.innerHTML = "ROUND #" + round + " Results:";

            //Add round with increment
            round++;

            if(results ==='no winner'){
                //alerts user that round is over and displays current health
                //Changed to Array items (Name, Health)
                //alert(playerOne[0]+':'+playerOne[1]+' *ROUND '+round+' OVER* '+playerTwo[0]+':'+playerTwo[2]);

                fighter1_txt.innerHTML = fighters[0].name + ":   " + fighters[0].health;
                fighter2_txt.innerHTML = fighters[1].name + ":   " + fighters[1].health;

            }else{
                //if there is a winner or a tie, displays result and stops code
                //alert(results);
                //break;
            //};
                fighter1_txt.innerHTML = results;
                fighter2_txt.innerHTML = "";

                //Disable button
                button.removeEventListener("click", fight, false);

                //Finding element with class buttonblue
                document.querySelector(".buttonblue").innerHTML = "DONE!!!";
        };
    };

    // this function will check for a winner
    function winnerCheck(){
        //console.log('in winnerCheck FN');


        var result='no winner';
        //if both players are below 1 health in a same round- it is a tie (both die)
        //Changed to Array item (Health)
        if(fighters[0].health <1 && fighters[1].health <1){
            //displays tie result
            result = 'You Both Die';
        // if players do not tie, and player one is below 1 health, player 2 wins
            //Changed to Array item (Health)
        }else if(fighters[0].health <1){
            //Changed to Array item (Name)
            result = fighters[1].name+' WINS!!!';
        // if players do not tie, and player two is below 1 health, player 1 wins
            //Changed to Array item (Health)
        }else if(fighters[1].health <1){
            //Changed to Array item (Name)
            result=fighters[0].name+ ' WINS!!!';
        };
        // function will get sent the information and check the outcome and finish code if one of the above is met
        return result;

    };


    /* Where program gets started */
    console.log("program starts");
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