/**
 * Showing off how to display/hide parts of a SVG-image.
 */
window.Hangman = (function () {
    "use strict";

    var theWord;
    var wordlist = ["LEJON", "ÖKEN", "KATT", "ZEBRA", "SAFARI"];
    var hangman;

    hangman = {

        // Get all elements as their id
        "partAsElement": {
            "hill": document.getElementById('hang_hill'),
            "gallow": document.getElementById('hang_construction'),
            "body": document.getElementById('hang_body'),
            "rightarm": document.getElementById('hang_rightarm'),
            "leftarm": document.getElementById('hang_leftarm'),
            "rightleg": document.getElementById('hang_rightleg'),
            "leftleg": document.getElementById('hang_leftleg'),
            "rope": document.getElementById('hang_rope'),
            "head": document.getElementById('hang_head')
        },

        // Create an array with all valid parts
        "validParts": [
            "hill",
            "gallow",
            "body",
            "rightarm",
            "leftarm",
            "rightleg",
            "leftleg",
            "rope",
            "head"
        ],


        /**
         * Check if part a valid part, writes error message to console if the part is invalid.
         *
         * @param string part Name of the part to check.
         *
         * @returns boolean true if valid part, else false.
         */
        "isValid": function (part) {
            if (this.validParts.indexOf(part) === -1) {
                window.console.log("The part is not valid: " + part);
                return false;
            }
            window.console.log("The part is valid: " + part);
            return true;
        },


        /**
         * Hide a part.
         *
         * @param string part Name of the part to hide.
         *
         * @returns void.
         */
        "hide": function (part) {
            if (this.isValid(part)) {
                window.console.log("Hiding part: " + part);
                this.partAsElement[part].style.display = "none";
            }
        },


        /**
         * Show a part.
         *
         * @param string part Name of the part to show.
         *
         * @returns void.
         */
        "show": function (part) {
            if (this.isValid(part)) {
                window.console.log("Showing part: " + part);
                this.partAsElement[part].style.display = "inline";
            }
        },

        // function to show all possible words
        "wordlist": function() {
            return wordlist;
        },

        // function for ranomize a word from wordlist
        "randomWord": function() {
            var newWord = wordlist[Math.floor(Math.random() * wordlist.length)];

            return newWord;
        },

        // function that allows user to peek at the correct word
        "peek": function() {
            console.log("The word is " + theWord);
        },

        // function that show the program main file the word
        "theWord": function() {
            return theWord;
        }
    };
    theWord = hangman.randomWord();
    //
    // window.console.log("You can now use the hangman object as a part of the window-object." +
    // "Try\n\nwindow.Hangman.hide('gallow')\nwindow.Hangman.show('gallow')" +
    // "\n\nHere are all the parts you can work on.");
    // window.console.log(hangman.validParts);

    // Return the object to make it visible.
    return hangman;
})();
