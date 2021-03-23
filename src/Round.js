const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.cards = deck.cards;
    this.currentCard = this.cards[0];
    this.turns = 1;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard
  }

  takeTurn(guess) {
    let turn = new Turn(guess.guess, this.currentCard)
    this.turns++
    this.cards.push(this.cards.shift());
    this.currentCard = this.cards[0];
    if(turn.evaluateGuess()) {
      return 'correct!'
    } else {
      this.incorrectGuesses.push(guess.id)
      return 'incorrect!'
    }
  }
}

module.exports = Round;