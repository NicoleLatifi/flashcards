const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.cards = deck.cards;
    this.currentCard = this.cards[0];
    this.turns = 0;
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

  calculatePercentCorrect() {
    return this.incorrectGuesses.length / this.turns * 100
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
  }
}

module.exports = Round;