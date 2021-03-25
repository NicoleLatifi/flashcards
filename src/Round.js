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

  takeTurn(guessData) {
    let turn = new Turn(guessData, this.currentCard)
    this.turns++
    // this.cards.push(this.cards.shift());
    // this.currentCard = this.cards[0];
    this.currentCard = this.cards[this.turns]
    if(turn.evaluateGuess()) {
      return 'correct!'
    } else {
      this.incorrectGuesses.push(guessData)
      return 'incorrect!'
    }
  }

  calculatePercentCorrect() {
    return 100 - (this.incorrectGuesses.length / this.turns * 100)
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
  }
}

module.exports = Round;