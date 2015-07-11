/*
Name: Nicholas Noriega Overly
Date: 07/11/2015
Assignment: Goal 1: Analyze Duel #1
 */

//self-executing function
(function() {

    console.log("FIGHT!!!");


    //player names
    var playerOneName = "Kabal";
    var playerTwoName = "Kratos";

    //player damage
    var player1Damage = 20;
    var player2Damage = 20;

    //player health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    var round = 1;

    function fight() {
        console.log('in the fight function');

        alert(playerOneName+':'+playerOneHealth+' *START* '+playerTwoName+':'+playerTwoHealth);

        for(var i=0; i<10; i++){

            //random formula is - Math.floor(Math.random() * (max - min) + min);

            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;
            var f1 = Math.floor(Math.random()*player1Damage-minDamage1)+minDamage1;
            var f2 = Math.floor(Math.random()*player2Damage-minDamage2)+minDamage2;

            //console.log(f1);
            //console.log(f2);

            //inflict damage
            playerOneHealth-=f1;
            playerTwoHealth-=f2;

            console.log(playerOneName+':'+playerOneHealth+playerTwoName+':'+playerTwoHealth);

            winnderCheck();

        };
    };


    function winnerCheck(){
        //code will go here
    };


    /* Where program gets started */
    console.log("program starts")
    fight();

})();


