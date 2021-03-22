class Turn {
  constructor(guess, {id, question, answers, correctAnswer} = card) {
    this.guess = guess,
    this.id = id,
    this.question = question,
    this.answers = answers,
    this.correctAnswer = correctAnswer
  }

  returnGuess() {
    return this.guess
  }

  returnCard() {
    return {
      id: this.id,
      question: this.question,
      answers: this.answers,
      correctAnswer: this.correctAnswer
    }
  }

  evaluateGuess() {
    return (this.guess === this.correctAnswer)
  }
}

module.exports = Turn;