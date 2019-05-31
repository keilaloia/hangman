    //if no alert bye

    var guess = ["race", "soul", "rank", "suit", "boss"];
    var guessHint = ["often associated with rats", "easy to sell yet hard to grasp", "hierarchy", "uniform", "person who rules over you"];

    var correct = 0;
    var numGuess = 5;
    var curGuess = numGuess;
    var playagain = false
    //word picker
    
    var current = "";
    var plGuessed = [];
    
    var hint  = document.getElementById("hint");
    var left  = document.getElementById("left");
    var first  = document.getElementById("f");
    var second = document.getElementById("s");
    var third  = document.getElementById("t");
    var fourth = document.getElementById("ft");
    var pLetters = document.getElementById("printLetters");
    document.getElementById("button").addEventListener("click", function()
    {
        playagain = true;
        gameController();
    });
    function reset()   
    {
        plGuessed = [];
        first.textContent = "_";
        second.textContent = "_";
        third.textContent = "_";
        fourth.textContent = "_";
        //pLetters = [];
        curGuess = numGuess;
    }

    function gameController()
    {

        if(playagain)
        {
            reset();
            var randomizer = Math.floor(Math.random() * guess.length);
            hint.textContent = ("Word Hint", guessHint[randomizer]);
            document.onkeyup = function(event)
            {     
                current = event.key;
                var match = false;
                var temp = -1;
                console.log(guess[randomizer]); 
                //loop through each char in string and compare to user input
                for (var i = 0; i < guess[randomizer].length; i++) 
                {
                     if(current === guess[randomizer].charAt(i))
                     {
                        correct++;
                        match = true;
                        temp = i;
                        break;
                     }
                     else
                        match = false;


                }
                if(match)//if found match compare results and fill accordingly
                {
                    switch(temp)
                    {
                        case 0:
                            first.textContent = guess[randomizer].charAt(temp);
                            break;
                        case 1:
                            second.textContent= guess[randomizer].charAt(temp);       
                            break;
                        case 2:
                            third.textContent = guess[randomizer].charAt(temp);                  
                            break;
                        case 3:
                            fourth.textContent= guess[randomizer].charAt(temp);
                            break;
                        default:
                            break;
                    }
                    if (correct >= guess[randomizer].length) 
                    {
                        alert("Game Won!")
                        alert("Click Play Game to try again");
                    }

                }
                else//if missed guess check for game loss and alert player
                {
                    curGuess--;
                    if(curGuess > 0)
                    {
                        plGuessed.push(current);
                        pLetters.textContent = ("", plGuessed);
                        left.textContent = ("Guesses left: " + curGuess);

                    }
                    else
                    {
                        playagain = false;
                        reset();
                        pLetters.textContent = ("_");
                        alert("Game Lost!")
                        alert("Click Play Game to try again")
                    }
                }
            }

        }
    }

        //button to start game


    
 