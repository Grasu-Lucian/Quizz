import "./App.scss";
import { useState } from "react";

function App() {
  const questions = [
    {
      questionText: "Where did The Flowerpot Men want to go in 1967?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "San Francisco", isCorrect: true },
        { answerText: "Woodstock", isCorrect: false },
        { answerText: "Memphis", isCorrect: false },
      ],
    },
    {
      questionText: "How many earths would fit inside the sun?",
      answerOptions: [
        { answerText: "circa 100", isCorrect: false },
        { answerText: "circa 1,000,000	", isCorrect: true },
        { answerText: "	circa 10,000", isCorrect: false },
        { answerText: "circa 100,000", isCorrect: false },
      ],
    },
    {
      questionText: "What is the more usual name for Roentgen Rays?",
      answerOptions: [
        { answerText: "X Rays", isCorrect: true },
        { answerText: "Gamma Rays", isCorrect: false },
        { answerText: "	Ultraviolet Rays", isCorrect: false },
        { answerText: "Magnetic Resonance", isCorrect: false },
      ],
    },
    {
      questionText: "A 'Miller' is a move in which sport?",
      answerOptions: [
        { answerText: "Ice Hockey", isCorrect: false },
        { answerText: "Trampolining", isCorrect: true },
        { answerText: "Diving", isCorrect: false },
        { answerText: "Chess", isCorrect: false },
      ],
    },
    {
      questionText:
        "	Which actor appeared in the Cranberries music video Ridiculous Thought?",
      answerOptions: [
        { answerText: "Bruce Willis", isCorrect: false },
        { answerText: "Donald Sutherland", isCorrect: false },
        { answerText: "George Clooney", isCorrect: false },
        { answerText: "Elijah Wood", isCorrect: true },
      ],
    },
    {
      questionText: "Festfolk was the original name for which group?",
      answerOptions: [
        { answerText: "The Beach Boys", isCorrect: false },
        { answerText: "ABBA", isCorrect: false },
        { answerText: "Motorhead", isCorrect: true },
        { answerText: "Simon and Garfunkel", isCorrect: false },
      ],
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <>
      <div className="app">
        {showScore ? (
          <div className="score-section">
            you scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}{" "}
              </div>
              <div className="Answer-section">
                {questions[currentQuestion].answerOptions.map(
                  (answerOptions) => (
                    <button
                      onClick={() =>
                        handleAnswerButtonClick(answerOptions.isCorrect)
                      }
                    >
                      {answerOptions.answerText}
                    </button>
                  )
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
