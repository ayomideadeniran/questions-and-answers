import React, { useState, useEffect } from "react";
import "./Quiz.css";

const questions = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
    options: [
      { label: "A", value: "Paris" },
      { label: "B", value: "London" },
      { label: "C", value: "Berlin" },
      { label: "D", value: "Rome" },
    ],
    hasRead: false,
  },
  {
    question: "What is the largest planet in our solar system?",
    answer: "Jupiter",
    options: [
      { label: "A", value: "Jupiter" },
      { label: "B", value: "Saturn" },
      { label: "C", value: "Uranus" },
      { label: "D", value: "Neptune" },
    ],
    hasRead: false,
  },
  {
    question: "What is the smallest country in the world?",
    answer: "Vatican City",
    options: [
      { label: "A", value: "Vatican City" },
      { label: "B", value: "Monaco" },
      { label: "C", value: "San Marino" },
      { label: "D", value: "San Marino" },
    ],
    hasRead: false,
  },
  {
    question: "What is the capital of Germany?",
    answer: "Berlin",
    options: [
      { label: "A", value: "Paris" },
      { label: "B", value: "London" },
      { label: "C", value: "Berlin" },
      { label: "D", value: "Rome" },
    ],
    hasRead: false,
  },
  {
    question: "What is the smallest country in the world?",
    answer: "Vatican City",
    options: [
      { label: "A", value: "Vatican City" },
      { label: "B", value: "Monaco" },
      { label: "C", value: "San Marino" },
      { label: "D", value: "San Marino" },
    ],
    hasRead: false,
  },
  {
    question: "What is the capital of France?",
    answer: "Paris",
    options: [
      { label: "A", value: "Paris" },
      { label: "B", value: "London" },
      { label: "C", value: "Berlin" },
      { label: "D", value: "Rome" },
    ],
    hasRead: false,
  },
  {
    question: "What is the smallest country in the world?",
    answer: "Vatican City",
    options: [
      { label: "A", value: "Vatican City" },
      { label: "B", value: "Monaco" },
      { label: "C", value: "San Marino" },
      { label: "D", value: "San Marino" },
    ],
    hasRead: false,
  },
  {
    question: "What is the capital of Germany?",
    answer: "Berlin",
    options: [
      { label: "A", value: "Paris" },
      { label: "B", value: "London" },
      { label: "C", value: "Berlin" },
      { label: "D", value: "Rome" },
    ],
    hasRead: false,
  },
  {
    question: "What is the smallest country in the world?",
    answer: "Vatican City",
    options: [
      { label: "A", value: "Vatican City" },
      { label: "B", value: "Monaco" },
      { label: "C", value: "San Marino" },
      { label: "D", value: "San Marino" },
    ],
    hasRead: false,
  },
  {
    question: "What is the capital of France?",
    answer: "Paris",
    options: [
      { label: "A", value: "Paris" },
      { label: "B", value: "London" },
      { label: "C", value: "Berlin" },
      { label: "D", value: "Rome" },
    ],
    hasRead: false,
  },
  {
    question: "What is the smallest country in the world?",
    answer: "Vatican City",
    options: [
      { label: "A", value: "Vatican City" },
      { label: "B", value: "Monaco" },
      { label: "C", value: "San Marino" },
      { label: "D", value: "San Marino" },
    ],
    hasRead: false,
  },
  {
    question: "What is the capital of Germany?",
    answer: "Berlin",
    options: [
      { label: "A", value: "Paris" },
      { label: "B", value: "London" },
      { label: "C", value: "Berlin" },
      { label: "D", value: "Rome" },
    ],
    hasRead: false,
  },
  {
    question: "What is the smallest country in the world?",
    answer: "Vatican City",
    options: [
      { label: "A", value: "Vatican City" },
      { label: "B", value: "Monaco" },
      { label: "C", value: "San Marino" },
      { label: "D", value: "San Marino" },
    ],
    hasRead: false,
  },
  {
    question: "What is the capital of France?",
    answer: "Paris",
    options: [
      { label: "A", value: "Paris" },
      { label: "B", value: "London" },
      { label: "C", value: "Berlin" },
      { label: "D", value: "Rome" },
    ],
    hasRead: false,
  },
  {
    question: "What is the smallest country in the world?",
    answer: "Vatican City",
    options: [
      { label: "A", value: "Vatican City" },
      { label: "B", value: "Monaco" },
      { label: "C", value: "San Marino" },
      { label: "D", value: "San Marino" },
    ],
    hasRead: false,
  },
  {
    question: "What is the capital of Germany?",
    answer: "Berlin",
    options: [
      { label: "A", value: "Paris" },
      { label: "B", value: "London" },
      { label: "C", value: "Berlin" },
      { label: "D", value: "Rome" },
    ],
    hasRead: false,
  },
  {
    question: "What is the smallest country in the world?",
    answer: "Vatican City",
    options: [
      { label: "A", value: "Vatican City" },
      { label: "B", value: "Monaco" },
      { label: "C", value: "San Marino" },
      { label: "D", value: "San Marino" },
    ],
    hasRead: false,
  },
  {
    question: "What is the capital of France?",
    answer: "Paris",
    options: [
      { label: "A", value: "Paris" },
      { label: "B", value: "London" },
      { label: "C", value: "Berlin" },
      { label: "D", value: "Rome" },
    ],
    hasRead: false,
  },
  {
    question: "What is the smallest country in the world?",
    answer: "Vatican City",
    options: [
      { label: "A", value: "Vatican City" },
      { label: "B", value: "Monaco" },
      { label: "C", value: "San Marino" },
      { label: "D", value: "San Marino" },
    ],
    hasRead: false,
  },
  {
    question: "What is the capital of Germany?",
    answer: "Berlin",
    options: [
      { label: "A", value: "Paris" },
      { label: "B", value: "London" },
      { label: "C", value: "Berlin" },
      { label: "D", value: "Rome" },
    ],
    hasRead: false,
  },
  {
    question: "What is the smallest country in the world?",
    answer: "Vatican City",
    options: [
      { label: "A", value: "Vatican City" },
      { label: "B", value: "Monaco" },
      { label: "C", value: "San Marino" },
      { label: "D", value: "San Marino" },
    ],
    hasRead: false,
  },
  {
    question: "What is the capital of France?",
    answer: "Paris",
    options: [
      { label: "A", value: "Paris" },
      { label: "B", value: "London" },
      { label: "C", value: "Berlin" },
      { label: "D", value: "Rome" },
    ],
    hasRead: false,
  },
  {
    question: "What is the smallest country in the world?",
    answer: "Vatican City",
    options: [
      { label: "A", value: "Vatican City" },
      { label: "B", value: "Monaco" },
      { label: "C", value: "San Marino" },
      { label: "D", value: "San Marino" },
    ],
    hasRead: false,
  },
];
// ... add more questions here

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [recognition, setRecognition] = useState(null);
  const [isStopped, setIsStopped] = useState(false);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = false;
      recognitionInstance.interimResults = false;
      recognitionInstance.onresult = (event) => {
        const answer = event.results[0][0].transcript.toLowerCase();
        handleAnswerOptionClick(answer);
      };
      recognitionInstance.onend = () => {
        setIsSpeaking(false);
      };
      setRecognition(recognitionInstance);
    }
  }, []);

  const speakText = (text) => {
    if (!window.speechSynthesis) {
      console.error("Speech Synthesis not supported");
      return;
    }

    const synth = new SpeechSynthesisUtterance();
    synth.lang = "en-US";
    synth.text = text;
    window.speechSynthesis.speak(synth);
    synth.onend = () => setIsSpeaking(false);
  };

  const handleAnswerOptionClick = (selectedOption) => {
    if (isStopped) return;

    const correctAnswer = questions[currentQuestionIndex].answer.toLowerCase();
    if (selectedOption.toLowerCase() === correctAnswer) {
      setScore((previousScore) => previousScore + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
      questions[nextQuestionIndex].hasRead = false;
    } else {
      setShowScore(true);
    }
  };

  const handleReadQuestionClick = () => {
    if (isStopped || isSpeaking) return;
    setIsSpeaking(true);
    speakText(questions[currentQuestionIndex].question);
    questions[currentQuestionIndex].hasRead = true;
  };

  const handleNextQuestionClick = () => {
    if (isStopped || isSpeaking) return;
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
      questions[nextQuestionIndex].hasRead = false;
    } else {
      setShowScore(true);
    }
  };

  const handleRestartClick = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
    setIsStopped(false);
    questions.forEach((question) => (question.hasRead = false));
  };

  const handleStopClick = () => {
    setIsStopped(true);
    setShowScore(true);
  };

  const renderQuestion = () => {
    if (!questions[currentQuestionIndex].hasRead && !isSpeaking) {
      handleReadQuestionClick();
    }

    return (
      <div className="question-section">
        <div className="question-count">
          <span>Question {currentQuestionIndex + 1}</span>/{questions.length}
        </div>
        <div className="question-text">
          {questions[currentQuestionIndex].question}
        </div>
      </div>
    );
  };

  const renderOptions = () => {
    return (
      <div className="answer-section">
        {questions[currentQuestionIndex].options.map((option, index) => (
          <button
            key={option.label}
            disabled={isSpeaking}
            onClick={() => handleAnswerOptionClick(option.value)}
          >
            {String.fromCharCode(65 + index)} - {option.value}
          </button>
        ))}
      </div>
    );
  };

  const renderResult = () => {
    if (showScore) {
      return (
        <div className="result-section">
          <div className="score">
            You scored {score} out of {questions.length}
          </div>
          <div className="restart-button">
            <button onClick={handleRestartClick}>Restart Quiz</button>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="App">
      <div className="title">Quiz App by knights.dev ( Ayomide )</div>
      {showScore ? (
        renderResult()
      ) : (
        <>
          {renderQuestion()}
          {renderOptions()}
          <div className="button-section">
            <button
              className="stop-button"
              onClick={handleStopClick}
              disabled={isSpeaking}
            >
              Stop
            </button>
            <button
              className="read-button"
              onClick={handleReadQuestionClick}
              disabled={isSpeaking}
            >
              Read Question
            </button>
            <button
              className="next-button"
              onClick={handleNextQuestionClick}
              disabled={isSpeaking}
            >
              Next Question
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
