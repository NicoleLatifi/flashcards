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
    const card2 = new Card(2);
    const card3 = new Card(3);
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.equal(deck[0]);
  });

  it('should update the turns count', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2);
    const card3 = new Card(3);
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.turns).to.equal(0);
    
    round.takeTurn({ guess: 'object', id: 1});
    expect(round.turns).to.equal(1);
  });
})