const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {

  it('should be a function', function() {
    const card1 = new Card();
    const card2 = new Card();
    const card3 = new Card();
    const deck = new Deck([card1, card2, card3]);
    expect(Deck).to.be.a('function');
  })

  it('should know how many Cards are in the Deck', function(){
    const card1 = new Card();
    const card2 = new Card();
    const card3 = new Card();
    const deck = new Deck([card1, card2, card3]);
    expect(deck.countCards()).to.equal(3);
  })
})