const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
  const cardData1 = {
    id: 1, 
    question: 'What allows you to define a set of related information using key-value pairs?', 
    answers: ['object', 'array', 'function'], 
    correctAnswer: 'object'
  }
  const cardData2 = {
    id: 2,
    question: "What is a comma-separated list of related values?",
    answers: ["array", "object", "function"],
    correctAnswer: "array"
  }

  const cardData3 = {
    id: 3,
    question: "What type of prototype method directly modifies the existing array?",
    answers: ["mutator method", "accessor method", "iteration method"],
    correctAnswer: "mutator method"
  }

  it('should be a function', function() {
    const card1 = new Card(cardData1);
    const card2 = new Card(cardData2);
    const card3 = new Card(cardData3);
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(Round).to.be.a('function');
  });

  it('should return the current card', function() {
    const card1 = new Card(cardData1);
    const card2 = new Card(cardData2);
    const card3 = new Card(cardData3);
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should update the turns count', function() {
    const card1 = new Card(cardData1);
    const card2 = new Card(cardData2);
    const card3 = new Card(cardData3);
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.turns).to.equal(0);
    
    round.takeTurn({ id: 1, guess: 'object' });
    expect(round.turns).to.equal(1);
  });

  it('should update the current card', function() {
    const card1 = new Card(cardData1);
    const card2 = new Card(cardData2);
    const card3 = new Card(cardData3);
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.currentCard).to.equal(card1);

    round.takeTurn({ id: 1, guess: 'object' });
    expect(round.currentCard).to.equal(card2);
  })

  it('should return feedback', function() {
    const card1 = new Card(cardData1);
    const card2 = new Card(cardData2);
    const card3 = new Card(cardData3);
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    let feedback = round.takeTurn({ id: 1, guess: 'object' }); // card1, correct guess
    expect(feedback).to.equal('correct!');

    feedback = round.takeTurn({ id: 2, guess: 'object' }); // card2, incorrect guess
    expect(feedback).to.equal('incorrect!');
  });

  it('should store incorrect guesses', function() {
    const card1 = new Card(cardData1);
    const card2 = new Card(cardData2);
    const card3 = new Card(cardData3);
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn({ id: 1, guess: 'object' }); // card1, correct guess
    round.takeTurn({ id: 2, guess: 'object' }); // card2, incorrect guess
    expect(round.incorrectGuesses).to.deep.equal([2]);
  });

  it('should calculate percent correct', function() {
    const card1 = new Card(cardData1);
    const card2 = new Card(cardData2);
    const card3 = new Card(cardData3);
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn({ id: 1, guess: 'object' }); // card1, correct guess
    round.takeTurn({ id: 2, guess: 'object' }); // card2, incorrect guess
    expect(round.calculatePercentCorrect()).to.equal(50);
  });
});