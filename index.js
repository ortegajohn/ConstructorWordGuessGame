var word = require("./Word.js");
var inquirer = require('inquirer');
var test_word = "Star Wars";
var new_word ;
var guesses = 10;
var win = false;

var guess_array = ["United States Of America", "Star Wars", "The Lord Of The Rings"
    , "Jabba the Hutt", "Empire State Building", "Mozilla Firefox", "JavaScript",
    "Microsoft SQL server management studio", "Indiana Jones", "Darth Maul",
    "Fingolfin", "Morgoth"]
function randomIntFromInterval(min, max) // min and max included
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

///
function set_word(){
    var random_word_index = randomIntFromInterval(0, guess_array.length - 1)

    new_word = new word(guess_array[random_word_index]);
    new_word.build_letter_arr()
}

start_game()


function start_game() {
    set_word()
    build_display()
    prompt_user_for_letter()
}

function build_display() {
    console.log("Guesses Left: ", guesses)
    var display = []
    for (i = 0; i < new_word.word.length; i++) {

        if (new_word.word[i] == " ") {
            display.push(" ")
        } else if (new_word.arr_of_letter_obj[i].been_guessed) {
            display.push(new_word.arr_of_letter_obj[i].str_val + " ")
        } else {
            display.push("_ ")
        }

    }
    var display_str = display.join(" ")
    console.log(display_str);

    if (display_str.indexOf("_") == -1) {

        win = true;
    }


}


function prompt_user_for_letter() {
    inquirer.prompt([
        {
            type: "input",
            message: "Guess a letter!",
            name: "guess_letter_name"
        }
    ]).then(function (res) {
        // console.log(res.guess_letter_name)
        check_letter(res.guess_letter_name)
        check_guess_count()
    });
}
function check_guess_count() {
    if (guesses != 0) {
        build_display()
        if (win) {
            console.log("YOU WIN!")
            prompt_newgame_question()
        } else {
            prompt_user_for_letter()
        }

    } else {
        console.log("game over")
        prompt_newgame_question()
    }
}

function prompt_newgame_question(){
    inquirer
    .prompt([
        /* Pass your questions in here */
        {
            type: "list",
            message: "New game?",
            choices: ["Yes", "No"],
            name: "select"
        }
    ]).then(function (res) {
        if(res.select == "Yes"){
            console.log("Yes")
            win = false;
            guesses = 10;
            start_game()
        }else if(res.select == "No"){
            console.log("Goodbye!")
        }


    });
}


function check_letter(a) {
    if (new_word.word.toLowerCase().indexOf(a) > -1) {
        console.log(a, " is in the word(s)");
        for (i = 0; i < new_word.word.length; i++) {
            if (new_word.arr_of_letter_obj[i].str_val.toLowerCase() == a) {
                new_word.arr_of_letter_obj[i].been_guessed = true;
            }
        }

    } else {
        console.log(a," not in the word(s)")
        guesses--;
        // console.log("Guesses Left: ",guesses)
    }

}
