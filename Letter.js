
var Letter = function(letter_1) {
    this.str_val = letter_1;

    this.been_guessed = false;
    this.if_guesses = function(letter_1){
        if(this.been_guessed){
            return letter_1;
        }else{
            return '_';
        }

    };
    this.check_char = function(some_char){
        if(some_char == this.str_val){
            been_guessed = true;
        }else{
            console.log('guess - ',some_char," - is not correct")
        }

    }

    this.print = function(){
        console.log('letter.this.print')
    };

    
}


module.exports = Letter;