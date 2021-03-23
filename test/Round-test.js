const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {

  it('should be a function', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2);
    const card3 = new Card(3);
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(Round).to.be.a('function');
  });

  it('should return the current card', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should update the turns count', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.turns).to.equal(0);
    
    round.takeTurn({ id: 1, guess: 'object' });
    expect(round.turns).to.equal(1);
  });

  it('should update the current card', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.currentCard).to.equal(card1);

    round.takeTurn({ id: 1, guess: 'object' });
    expect(round.currentCard).to.equal(card2);
  })

  it('should return feedback', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    let feedback = round.takeTurn({ id: 1, guess: 'object' }); // card1, correct guess
    expect(feedback).to.equal('correct!')

    feedback = round.takeTurn({ id: 2, guess: 'object' }); // card2, incorrect guess
    expect(feedback).to.equal('incorrect!')
  })

  it('should store incorrect guesses', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn({ id: 1, guess: 'object' }); // card1, correct guess
    round.takeTurn({ id: 2, guess: 'object' }); // card2, incorrect guess
    expect(round.incorrectGuesses).to.deep.equal([2])
  })

  it('should calculate percent correct', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn({ id: 1, guess: 'object' }); // card1, correct guess
    round.takeTurn({ id: 2, guess: 'object' }); // card2, incorrect guess
    expect(round.calculatePercentCorrect()).to.equal(50)
  })
})