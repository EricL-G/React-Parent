import { useState } from "react";

function NavButton({ label, onClick, disabled }) {
  return (
    <button onClick={onClick} disabled={disabled}
      className={`border-2 px-6 py-2 text-lg font-semibold rounded-lg ${disabled
        ? "border-gray-600 bg-gray-900 text-gray-600 cursor-not-allowed"
        : "border-green-500 bg-gray-800 text-green-300 hover:bg-green-900"}`}>
      {label}
    </button>
  );
}

function QuizImage({ src }) {
  return <img className="border-2 border-green-600 rounded-lg w-full" src={src} alt="Quiz visual" />;
}

function QuestionText({ text }) {
  return <p className="text-xl font-semibold text-green-300 mt-4 mb-2">{text}</p>;
}

function ChoiceButton({ label, selected, correct, revealed, onClick }) {
  let style = "border-green-600 bg-gray-800 text-green-300";
  if (revealed) style = correct ? "border-green-400 bg-green-800 text-white" : selected ? "border-red-500 bg-red-900 text-white" : "border-gray-600 bg-gray-800 text-gray-500";
  else if (selected) style = "border-green-400 bg-green-900 text-white";
  return (
    <button onClick={onClick} className={`border-2 p-3 text-lg font-semibold rounded-lg w-full ${style}`}>
      {label}
    </button>
  );
}

function ScoreScreen({ score, total, onBack }) {
  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center gap-6 p-6">
      <p className="text-4xl font-bold text-green-400">Quiz Complete! 🎉</p>
      <p className="text-2xl text-green-300">You scored <span className="font-bold text-white">{score} / {total}</span></p>
      <p className="text-lg text-gray-400">{score === total ? "Perfect score! 🌟" : score >= total / 2 ? "Good job! Keep practicing." : "Keep studying, you'll get it!"}</p>
      <button onClick={onBack}
        className="border-2 border-green-500 bg-gray-800 text-green-300 font-semibold text-lg px-8 py-3 rounded-lg hover:bg-green-900">
        ← Back to Quizzes
      </button>
    </div>
  );
}

function PlayQuiz({ quiz, onBack }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const question = quiz.questions[index];

  function handleChoice(i) {
    if (revealed) return;
    setSelected(i);
    setRevealed(true);
    if (i === question.answer) setScore(s => s + 1);
  }

  function handleNext() {
    if (index === quiz.questions.length - 1) { setFinished(true); return; }
    setIndex(index + 1);
    setSelected(null);
    setRevealed(false);
  }

  function handleBack() {
    if (index === 0) { onBack(); return; }
    setIndex(index - 1);
    setSelected(null);
    setRevealed(false);
  }

  if (finished) return <ScoreScreen score={score} total={quiz.questions.length} onBack={onBack} />;

  return (
    <div className="min-h-screen bg-gray-950 p-6">
      <div className="flex justify-between items-center mb-4">
        <NavButton label="← Back" onClick={handleBack} />
        <p className="text-green-400 font-semibold text-lg">{quiz.title} — Q{index + 1} of {quiz.questions.length}</p>
        <NavButton label={index === quiz.questions.length - 1 ? "Finish ✓" : "Next →"} onClick={handleNext} disabled={!revealed} />
      </div>
      <QuizImage src={`https://placehold.co/600x250/1f2937/4ade80?text=${encodeURIComponent(quiz.subject)}`} />
      <QuestionText text={question.text} />
      <div className="grid grid-cols-2 gap-4 mt-2">
        {question.choices.map((c, i) => (
          <ChoiceButton key={i} label={c} selected={selected === i} correct={i === question.answer}
            revealed={revealed} onClick={() => handleChoice(i)} />
        ))}
      </div>
      {revealed && (
        <p className={`mt-4 text-lg font-bold ${selected === question.answer ? "text-green-400" : "text-red-400"}`}>
          {selected === question.answer ? "✅ Correct!" : `❌ Wrong! The answer was: ${question.choices[question.answer]}`}
        </p>
      )}
    </div>
  );
}

export default PlayQuiz;