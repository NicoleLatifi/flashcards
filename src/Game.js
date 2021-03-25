const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.currentRound = 0;
  }

  start() {
    // create cards
    const cards = prototypeQuestions.map(cardData => {
      return new Card(cardData)
    })
    // puts cards in deck
    const deck = new Deck(cards);
    // creates new round using deck
    const round = new Round(deck);
    this.currentRound++
    // invokes printMessage
    this.printMessage(deck, round)
    // invokes printQuestion
    this.printQuestion(round)
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;