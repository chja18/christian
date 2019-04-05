(function () {
    'use strict';

    var hangman = window.Hangman;
    var letters = document.getElementsByClassName("letters")[0];
    var result = document.getElementsByClassName("result")[0];
    var theWord = hangman.theWord().split("");
    var alpha = "ABCDEFGHIJKLMNOPQRSTVXYZÅÄÖ".split("");

    for (var i = 0; i < hangman.validParts.length; i++) {
        hangman.hide(hangman.validParts[i]);
    }

    for (i = 0; i < alpha.length; i++) {
        var temp = document.createElement("div");
        var counterNo = 0;
        var counterYes = 0;

        temp.className = "letter";
        temp.innerHTML = alpha[i];
        letters.appendChild(temp);
        temp.addEventListener("click", function(event) {
            if ((counterNo < 9) && (counterYes < theWord.length) && (
                event.target.classList.contains("letter"))) {
                event.target.classList.remove("letter");
                event.target.classList.add("clicked");
                console.log(event.target.innerHTML);
                var guessedLetter = document.getElementsByClassName("guessedLetter")[0];
                var counterGuess = 0;

                if (counterGuess < 1) {
                    var temp = document.getElementsByClassName("guess");

                    for (i = 0; i < temp.length; i++) {
                        temp[i].classList.remove("lower");
                        counterGuess += 1;
                    }
                }


                guessedLetter.innerHTML += event.target.innerHTML;

                if (theWord.includes(event.target.innerHTML)) {
                    console.log("YES");
                    for (var i = 0; i < document.getElementsByClassName(
                        event.target.innerHTML).length; i++) {
                        document.getElementsByClassName(
                            event.target.innerHTML)[i].innerHTML = event.target.innerHTML;
                        counterYes += 1;
                        if (counterYes === theWord.length) {
                            console.log("Du VANN! Prova igen, ladda om sidan");
                            temp = document.createElement("p");

                            temp.className = "win";
                            temp.innerHTML = "Du VANN! Prova igen, ladda om sidan";
                            result.appendChild(temp);
                        }
                    }
                }
                if (!theWord.includes(event.target.innerHTML)) {
                    console.log("NO");
                    hangman.show(hangman.validParts[counterNo]);
                    counterNo += 1;
                    if (counterNo === 9) {
                        console.log("Du har förlorat, prova igen, ladda om sidan");
                        temp = document.createElement("p");

                        temp.className = "lose";
                        temp.innerHTML = "Du har förlorat, prova igen, ladda om sidan";
                        result.appendChild(temp);
                    }
                }
            }
        });
    }

    for (i = 0; i < theWord.length; i++) {
        temp = document.createElement("div");

        temp.className = "theWord" + " " + theWord[i];
        temp.innerHTML = "__";
        letters.appendChild(temp);
    }
})();
