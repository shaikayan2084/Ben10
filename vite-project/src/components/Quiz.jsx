import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Quiz.css";
import { quizData } from "../data/quizData";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [finished, setFinished] = useState(false);

  const handleAnswer = useCallback((option) => {
    if (answered) return;
    setSelectedAnswer(option);
    setAnswered(true);
    const correct = option === quizData[currentQuestion].correctAnswer;
    if (correct) setCorrectCount((c) => c + 1);
    setScore((prev) => prev + (correct ? 10 : 0));
  }, [answered, currentQuestion]);

  const handleNext = useCallback(() => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion((q) => q + 1);
      setSelectedAnswer(null);
      setAnswered(false);
      setShowHint(false);
    } else {
      setFinished(true);
    }
  }, [currentQuestion]);

  const handleRestart = useCallback(() => {
    setCurrentQuestion(0);
    setScore(0);
    setCorrectCount(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setAnswered(false);
    setShowHint(false);
    setFinished(false);
  }, []);

  const progress = ((currentQuestion + 1) / quizData.length) * 100;

  if (finished) {
    const percentage = Math.round((correctCount / quizData.length) * 100);
    let grade, gradeColor;
    if (percentage === 100) { grade = "S"; gradeColor = "#ffcc00"; }
    else if (percentage >= 80) { grade = "A"; gradeColor = "#00ff88"; }
    else if (percentage >= 60) { grade = "B"; gradeColor = "#00ccff"; }
    else if (percentage >= 40) { grade = "C"; gradeColor = "#ff8800"; }
    else { grade = "D"; gradeColor = "#ff3333"; }

    return (
      <section id="quiz" className="quiz-section">
        <div className="quiz-container">
          <motion.div
            className="quiz-result"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="result-grade" style={{ color: gradeColor }}>{grade}</div>
            <div className="result-score">
              <span className="score-number">{correctCount}</span>
              <span className="score-divider">/</span>
              <span className="score-total">{quizData.length}</span>
            </div>
            <p className="result-text">
              {percentage === 100 ? "Perfect! You're a true Omnitrix Expert!" :
               percentage >= 80 ? "Awesome! You really know your aliens!" :
               percentage >= 60 ? "Not bad! You've got some Plumber training." :
               percentage >= 40 ? "Keep studying the Omnitrix database!" :
               "Looks like you need to rewatch the series!"}
            </p>
            <button className="quiz-restart-btn" onClick={handleRestart}>
              Try Again
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  const q = quizData[currentQuestion];
  const isCorrect = selectedAnswer === q.correctAnswer;

  return (
    <section id="quiz" className="quiz-section">
      <div className="quiz-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Ben 10 Trivia</h2>
          <p className="section-subtitle">Test your knowledge of the Omnitrix universe</p>
        </motion.div>

        <div className="quiz-progress-bar">
          <div className="quiz-progress-fill" style={{ width: `${progress}%` }} />
        </div>

        <div className="quiz-stats">
          <span className="quiz-stat">Question {currentQuestion + 1} / {quizData.length}</span>
          <span className="quiz-stat">Score: {score}</span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            className="quiz-card"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
          >
            <div className="quiz-question-number">Q{currentQuestion + 1}</div>
            <h3 className="quiz-question">{q.question}</h3>

            <div className="quiz-options">
              {q.options.map((option) => {
                let optClass = "quiz-option";
                if (answered) {
                  if (option === q.correctAnswer) optClass += " correct";
                  else if (option === selectedAnswer && option !== q.correctAnswer) optClass += " wrong";
                  else optClass += " disabled";
                }
                return (
                  <button
                    key={option}
                    className={optClass}
                    onClick={() => handleAnswer(option)}
                    disabled={answered}
                  >
                    <span className="option-letter">{q.options.indexOf(option) + 1}</span>
                    <span className="option-text">{option}</span>
                    {answered && option === q.correctAnswer && <span className="option-icon">&#10003;</span>}
                    {answered && option === selectedAnswer && option !== q.correctAnswer && <span className="option-icon">&#10007;</span>}
                  </button>
                );
              })}
            </div>

            <AnimatePresence>
              {answered && (
                <motion.div
                  className="quiz-feedback"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <div className={`feedback-banner ${isCorrect ? "correct" : "wrong"}`}>
                    {isCorrect ? "Correct!" : "Not quite!"}
                  </div>
                  {!isCorrect && (
                    <p className="feedback-text">
                      The correct answer is <strong>{q.correctAnswer}</strong>.
                    </p>
                  )}
                  <button className="hint-toggle" onClick={() => setShowHint(!showHint)}>
                    {showHint ? "Hide Hint" : "Show Hint"}
                  </button>
                  {showHint && (
                    <motion.p
                      className="hint-text"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {q.hint}
                    </motion.p>
                  )}
                  <button className="quiz-next-btn" onClick={handleNext}>
                    {currentQuestion < quizData.length - 1 ? "Next Question" : "See Results"}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Quiz;
