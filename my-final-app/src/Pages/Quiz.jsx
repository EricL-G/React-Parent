import React, { useState } from 'react';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answered, setAnswered] = useState(false);

  const questions = [
    {
      question: 'What is the primary purpose of an emergency fund?',
      options: [
        'To invest in the stock market',
        'To cover unexpected expenses and financial hardships',
        'To save for luxury items',
        'To pay for vacations'
      ],
      correct: 1
    },
    {
      question: 'What does APR stand for?',
      options: [
        'Annual Percentage Rate',
        'Annual Payment Return',
        'Automatic Payment Request',
        'Account Profit Ratio'
      ],
      correct: 0
    },
    {
      question: 'What is a 401(k)?',
      options: [
        'A type of car loan',
        'A retirement savings plan sponsored by employers',
        'A credit card',
        'A type of mortgage'
      ],
      correct: 1
    },
    {
      question: 'What does diversification mean in investing?',
      options: [
        'Putting all money in one stock',
        'Spreading investments across different assets to reduce risk',
        'Buying only bonds',
        'Trading frequently'
      ],
      correct: 1
    },
    {
      question: 'What is a credit score used for?',
      options: [
        'To determine how much money you earn',
        'To measure creditworthiness and help lenders assess risk',
        'To track your spending habits only',
        'To determine your job position'
      ],
      correct: 1
    },
    {
      question: 'What is compound interest?',
      options: [
        'Interest calculated only on the principal',
        'Interest calculated on both principal and accumulated interest',
        'A type of loan',
        'A banking fee'
      ],
      correct: 1
    },
    {
      question: 'What is the 50/30/20 budgeting rule?',
      options: [
        '50% needs, 30% wants, 20% savings',
        '50% savings, 30% taxes, 20% expenses',
        '50% income, 30% expenses, 20% debt',
        '50% wants, 30% needs, 20% savings'
      ],
      correct: 0
    },
    {
      question: 'What is inflation?',
      options: [
        'A decrease in the value of money over time',
        'An increase in the value of money',
        'A type of investment',
        'A banking service'
      ],
      correct: 0
    },
    {
      question: 'What is the best way to pay off debt?',
      options: [
        'Ignore it and hope it goes away',
        'Pay only minimum payments',
        'Create a plan and pay more than the minimum when possible',
        'Consolidate all debt into one large loan'
      ],
      correct: 2
    },
    {
      question: 'What is passive income?',
      options: [
        'Income you earn from your job',
        'Income earned with minimal effort, like dividends or rental income',
        'Income from side gigs only',
        'Income that requires full-time work'
      ],
      correct: 1
    }
  ];

  const handleAnswerClick = (index) => {
    setSelectedAnswer(index);
    setAnswered(true);

    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null);
      setAnswered(false);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setAnswered(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) return 'Perfect score! You\'re a finance expert! 🌟';
    if (percentage >= 80) return 'Great job! You have strong financial knowledge! 💪';
    if (percentage >= 60) return 'Good effort! Keep learning about finances! 📚';
    if (percentage >= 40) return 'Not bad! Review these topics to improve. 💡';
    return 'Keep practicing to improve your financial literacy! 🚀';
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#5e4e46' }}>
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-2" style={{ fontFamily: "'Nanum Gothic', sans-serif", fontWeight: 'bold', color: '#e9bd7e' }}>
            💰 Finance Quiz
          </h1>
          <p className="text-lg" style={{ color: '#e9d8c7', fontFamily: "'Noto Sans KR', sans-serif" }}>Test your financial knowledge</p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          {showScore ? (
            // Results Screen
            <div className="text-center">
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-indigo-100 mb-4">
                  <span className="text-5xl font-bold text-indigo-600">
                    {score}/{questions.length}
                  </span>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Nanum Gothic', sans-serif", fontWeight: 'bold', color: '#e9bd7e' }}>
                Quiz Complete!
              </h2>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded">
                <p className="text-lg font-semibold" style={{ color: '#e9d8c7', fontFamily: "'Noto Sans KR', sans-serif" }}>
                  {getScoreMessage()}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8 text-center">
                <div className="bg-green-50 p-4 rounded-lg">
                  <p style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#22c55e', fontFamily: "'Noto Sans KR', sans-serif" }}>{score}</p>
                  <p style={{ color: '#e9d8c7', fontFamily: "'Noto Sans KR', sans-serif" }}>Correct</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#dc2626', fontFamily: "'Noto Sans KR', sans-serif" }}>
                    {questions.length - score}
                  </p>
                  <p style={{ color: '#e9d8c7', fontFamily: "'Noto Sans KR', sans-serif" }}>Incorrect</p>
                </div>
              </div>

              <button
                onClick={handleRestart}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105"
              >
                Retake Quiz
              </button>
            </div>
          ) : (
            // Question Screen
            <>
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-gray-600">
                    Question {currentQuestion + 1}/{questions.length}
                  </span>
                  <span className="text-sm font-semibold text-indigo-600">
                    Score: {score}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${((currentQuestion + 1) / questions.length) * 100}%`
                    }}
                  ></div>
                </div>
              </div>

              {/* Question */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Nanum Gothic', sans-serif", fontWeight: 'bold', color: '#e9bd7e' }}>
                  {questions[currentQuestion].question}
                </h2>

                {/* Answer Options */}
                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => !answered && handleAnswerClick(index)}
                      disabled={answered}
                      className={`w-full p-4 text-left rounded-lg border-2 font-medium transition duration-200 ${
                        selectedAnswer === index
                          ? index === questions[currentQuestion].correct
                            ? 'border-green-500 bg-green-50 text-green-700'
                            : 'border-red-500 bg-red-50 text-red-700'
                          : answered && index === questions[currentQuestion].correct
                          ? 'border-green-500 bg-green-50 text-green-700'
                          : 'border-gray-300 bg-gray-50 text-gray-700 hover:border-indigo-500 hover:bg-indigo-50'
                      } ${answered ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      <div className="flex items-center">
                        <span className="mr-3 text-lg">
                          {String.fromCharCode(65 + index)}.
                        </span>
                        <span>{option}</span>
                        {answered && index === questions[currentQuestion].correct && (
                          <span className="ml-auto text-green-600">✓</span>
                        )}
                        {answered &&
                          selectedAnswer === index &&
                          index !== questions[currentQuestion].correct && (
                            <span className="ml-auto text-red-600">✗</span>
                          )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Next Button */}
              {answered && (
                <button
                  onClick={handleNext}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105"
                >
                  {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                </button>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-600 text-sm">
          <p style={{ color: '#e9d8c7', fontFamily: "'Noto Sans KR', sans-serif" }}>📚 Improve your financial literacy today!</p>
        </div>
      </div>
    </div>
  );
}
