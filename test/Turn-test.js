const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {
  const cardData = {
    id: 1, 
    question: 'What allows you to define a set of related information using key-value pairs?', 
    answers: ['object', 'array', 'function'], 
    correctAnswer: 'object'
  }

  it('should be a function', function() {
    const card = new Card(cardData);
    const turn = new Turn('object', card);
    expect(Turn).to.be.a('function');
  });

  it('should return the guess', function() {
    const card = new Card(cardData);
    const turn = new Turn('object', card);
    expect(turn.returnGuess()).to.equal('object');
  });

  it('should return the card', function() {
    const card = new Card(cardData);
    const turn = new Turn('object', card);
    expect(turn.returnCard()).to.deep.equal(card);
  });

  it('should evaluate the guess', function() {
    const card = new Card(cardData);
    const turn1 = new Turn('array', card);
    expect(turn1.evaluateGuess()).to.equal(false);

    const turn2 = new Turn('object', card);
    expect(turn2.evaluateGuess()).to.equal(true);
  });
})