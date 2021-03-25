class Card {
  constructor({ id, question, answers, correctAnswer } = cardData) {
    this.id = id,
    this.question = question,
    this.answers = answers,
    this.correctAnswer = correctAnswer
  }
}

module.exports = Card;