const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {
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
    expect(Deck).to.be.a('function');
  })

  it('should know how many Cards are in the Deck', function(){
    const card1 = new Card(cardData1);
    const card2 = new Card(cardData2);
    const card3 = new Card(cardData3);
    const deck = new Deck([card1, card2, card3]);
    expect(deck.countCards()).to.equal(3);
  })
})