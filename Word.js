var letter = require("./Letter.js");


var Word = function(word) {
    this.obj_letters = {}
    this.word = word;
    // this.arr_of_letter_obj = obj_letters;
    this.arr_of_letter_obj = this.obj_letters;
    this.letter1 = "letter1"
    // console.log("word")
    this.build_letter_arr = function(){
        for(i=0;i<this.word.length; i++){
            // obj_letters.test_word[i] = new letter();
            this.obj_letters[i] = new letter(this.word[i]);
            // var new_letter = new letter();
        }
    }

}


module.exports = Word;