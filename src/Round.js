const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.currentCard = deck[(this.turns - 1)];
    this.turns = 1;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard
  }

  takeTurn(guess) {
    let turn = new Turn(guess, currentCard)
    this.turn++
    if(guess.guess !== currentCard.correctAnswer) {
      return 'correct!'
    } else {
      this.incorrectGuesses.push(guess.id)
      return 'incorrect!'
    }
  }
}

module.exports = Round;