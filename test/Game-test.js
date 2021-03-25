const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');

describe('Game', function() {

  it('should be a function', function() {
    const game = new Game();
    expect(Game).to.be.a('function');
  });

  it('should keep track of the currentRound', function() {
    const game = new Game();
    expect(game.currentRound).to.equal(0);

    game.start();
    expect(game.currentRound).to.equal(1);
  });
});