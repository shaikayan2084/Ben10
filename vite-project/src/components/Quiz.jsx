import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Quiz.css";
import { quizLevels } from "../data/quizData";

const SECONDS_PER_QUESTION = 15;
const MAX_LIVES = 3;
const LEVEL_ORDER = ["beginner", "intermediate", "pro"];

const levelConfig = {
  beginner: {
    label: "Beginner",
    emoji: "🌱",
    color: "#39ff14",
    passMsg: "Congrats for intermediate!",
    passDetail: "You passed the basic test. Prepare to face deeper alien lore.",
    failMsg: "You are a bot",
    failDetail: "You couldn't survive the initial calibration settings.",
    failColor: "#ff3333"
  },
  intermediate: {
    label: "Intermediate",
    emoji: "⚡",
    color: "#ff9900",
    passMsg: "Congrats you are getting better!",
    passDetail: "Excellent control of the watch interface. Final level ahead.",
    failMsg: "You are a beginner",
    failDetail: "You understand basics but cracked under real pressure.",
    failColor: "#ff9900"
  },
  pro: {
    label: "Pro",
    emoji: "👑",
    color: "#00ccff",
    passMsg: "You are a PRO!",
    passDetail: "Ultimate Mastery Unlocked. Azmuth himself acknowledges your intellect.",
    failMsg: "Better luck next time!",
    failDetail: "The true hidden locks of the Omnitrix defeated your sequence.",
    failColor: "#ffffff"
  }
};

const Quiz = () => {
  const [currentLevel, setCurrentLevel] = useState("beginner");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [lives, setLives] = useState(MAX_LIVES);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [timeLeft, setTimeLeft] = useState(SECONDS_PER_QUESTION);
  const [gamePhase, setGamePhase] = useState("playing");
  const [statusMessage, setStatusMessage] = useState("");
  const [statusDetail, setStatusDetail] = useState("");
  const [showHint, setShowHint] = useState(false);
  const timerRef = useRef(null);
  const isGameOverRef = useRef(false);

  const cfg = levelConfig[currentLevel];
  const questions = quizLevels[currentLevel];
  const totalQuestions = questions.length;
  const progress = ((questionIndex + 1) / totalQuestions) * 100;

  const enterResult = useCallback((msg, detail, isGameOver) => {
    clearInterval(timerRef.current);
    setStatusMessage(msg);
    setStatusDetail(detail);
    setGamePhase("result");
    isGameOverRef.current = isGameOver;
  }, []);

  const loadQuestion = useCallback(() => {
    setSelectedAnswer(null);
    setAnswered(false);
    setShowHint(false);
    setTimeLeft(SECONDS_PER_QUESTION);

    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          setLives((l) => {
            const newLives = l - 1;
            if (newLives <= 0) {
              const c = levelConfig[currentLevel];
              enterResult(c.failMsg, c.failDetail, true);
              return 0;
            }
            setQuestionIndex((qi) => qi + 1);
            return newLives;
          });
          setAnswered(true);
          setSelectedAnswer("__timeout__");
          setTimeout(() => {
            setSelectedAnswer(null);
            setAnswered(false);
            setTimeLeft(SECONDS_PER_QUESTION);
          }, 100);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, [currentLevel, enterResult]);

  useEffect(() => {
    loadQuestion();
    return () => clearInterval(timerRef.current);
  }, [currentLevel, questionIndex, loadQuestion]);

  const handleAnswer = useCallback((option) => {
    if (answered) return;
    clearInterval(timerRef.current);
    setSelectedAnswer(option);
    setAnswered(true);

    const q = questions[questionIndex];
    const correct = option === q.correctAnswer;
    if (correct) setScore((s) => s + 10);
  }, [answered, questionIndex, questions]);

  const handleNext = useCallback(() => {
    if (questionIndex < totalQuestions - 1) {
      setQuestionIndex((i) => i + 1);
    } else {
      if (currentLevel === "pro") {
        enterResult("You are a PRO!", "Ultimate Mastery Unlocked. Azmuth himself acknowledges your intellect.", true);
      } else {
        const nextLevel = LEVEL_ORDER[LEVEL_ORDER.indexOf(currentLevel) + 1];
        const c = levelConfig[nextLevel];
        enterResult(c.passMsg, c.passDetail, false);
      }
    }
  }, [questionIndex, totalQuestions, currentLevel, enterResult]);

  const handleContinue = useCallback(() => {
    const nextLevel = LEVEL_ORDER[LEVEL_ORDER.indexOf(currentLevel) + 1];
    setCurrentLevel(nextLevel);
    setQuestionIndex(0);
    setLives(MAX_LIVES);
    setGamePhase("playing");
    isGameOverRef.current = false;
  }, [currentLevel]);

  const handleRestart = useCallback(() => {
    setCurrentLevel("beginner");
    setQuestionIndex(0);
    setLives(MAX_LIVES);
    setScore(0);
    setGamePhase("playing");
    isGameOverRef.current = false;
    setStatusMessage("");
    setStatusDetail("");
  }, []);

  if (gamePhase === "result") {
    return (
      <section id="quiz" className="quiz-section">
        <div className="quiz-container">
          <motion.div
            className="quiz-result"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="result-level-label" style={{ color: cfg.color }}>
              {cfg.emoji} {cfg.label.toUpperCase()}
            </div>
            <div className="result-score-display">
              <span className="score-number">{score}</span>
              <span className="score-divider">/</span>
              <span className="score-total">{(LEVEL_ORDER.indexOf(currentLevel) * totalQuestions + questionIndex) * 10}</span>
            </div>
            <div className="result-message-main">{statusMessage}</div>
            <p className="result-detail">{statusDetail}</p>
            <div className="result-actions">
              {isGameOverRef.current ? (
                <button className="quiz-restart-btn" onClick={handleRestart}>Play Again</button>
              ) : (
                <button className="quiz-next-btn" onClick={handleContinue}>Continue</button>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  const q = questions[questionIndex];
  const isCorrect = selectedAnswer === q?.correctAnswer;
  const timerRatio = timeLeft / SECONDS_PER_QUESTION;
  const timerColor = timerRatio > 0.5 ? "#39ff14" : timerRatio > 0.25 ? "#ff9900" : "#ff3333";

  return (
    <section id="quiz" className="quiz-section">
      <div className="quiz-container">
        <div className="quiz-hud">
          <div className="hud-item level-badge" style={{ color: cfg.color }}>
            {cfg.emoji} {cfg.label}
          </div>
          <div className="hud-item timer-badge" style={{ color: timerColor }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            {timeLeft}s
          </div>
          <div className="hud-item lives-badge">
            {Array.from({ length: MAX_LIVES }).map((_, i) => (
              <span key={i} className={i < lives ? "life-full" : "life-empty"}>&#9829;</span>
            ))}
          </div>
        </div>

        <div className="quiz-progress-bar">
          <div className="quiz-progress-fill" style={{ width: `${progress}%`, background: cfg.color }} />
        </div>

        <div className="timer-bar">
          <div className="timer-bar-fill" style={{ width: `${timerRatio * 100}%`, background: timerColor }} />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={questionIndex}
            className="quiz-card"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
          >
            <div className="quiz-question-number" style={{ color: cfg.color }}>
              {cfg.label.toUpperCase()} Q{questionIndex + 1}/{totalQuestions}
            </div>
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
              {answered && selectedAnswer !== "__timeout__" && (
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
                    <motion.p className="hint-text" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      {q.hint}
                    </motion.p>
                  )}
                  <button className="quiz-next-btn" onClick={handleNext}>
                    {questionIndex < totalQuestions - 1 ? "Next Question" : "See Results"}
                  </button>
                </motion.div>
              )}
              {answered && selectedAnswer === "__timeout__" && (
                <motion.div
                  className="quiz-feedback"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="feedback-banner wrong">Time ran out!</div>
                  <p className="feedback-text">
                    The correct answer is <strong>{q.correctAnswer}</strong>.
                    <br />Moving to next question...
                  </p>
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
