import { useState } from "react";

const initialQuizzes = [
  { id: 1,  title: "Quiz #1",  subject: "Budgeting Basics",  content: "What is a budget and why is it important?" },
  { id: 2,  title: "Quiz #2",  subject: "Credit & APR",      content: "What does APR stand for and how does it affect loans?" },
  { id: 3,  title: "Quiz #3",  subject: "Credit Scores",     content: "What is a credit score and what factors affect it?" },
  { id: 4,  title: "Quiz #4",  subject: "Investing",         content: "What is diversification and why does it reduce risk?" },
  { id: 5,  title: "Quiz #5",  subject: "Taxes",             content: "What is a W-2 form and who receives one?" },
  { id: 6,  title: "Quiz #6",  subject: "Retirement",        content: "What is a 401(k) and how does employer matching work?" },
  { id: 7,  title: "Quiz #7",  subject: "Insurance",         content: "What is a deductible and how does it affect premiums?" },
  { id: 8,  title: "Quiz #8",  subject: "Banking Basics",    content: "What is the difference between checking and savings accounts?" },
  { id: 9,  title: "Quiz #9",  subject: "Net Worth",         content: "How do you calculate your net worth?" },
  { id: 10, title: "Quiz #10", subject: "Inflation",         content: "What is inflation and how does it affect purchasing power?" },
  { id: 11, title: "Quiz #11", subject: "Emergency Funds",   content: "Why is an emergency fund important and how much should you save?" },
  { id: 12, title: "Quiz #12", subject: "Loans & Debt",      content: "What is the difference between good debt and bad debt?" },
];

function PageHeader({ title, onBack }) {
  return (
    <div className="p-4 border-b-2 border-green-700 bg-gray-900 flex justify-between items-center">
      <p className="text-2xl font-bold text-green-400">{title}</p>
      <button onClick={onBack}
        className="border-2 border-green-500 bg-gray-800 text-green-300 font-semibold px-4 py-2 rounded-lg hover:bg-green-900">
        ← Back to Browse
      </button>
    </div>
  );
}

function SectionHeader({ title }) {
  return <p className="text-xl font-bold text-green-400 mb-3">{title}</p>;
}

function QuizCard({ title, subject, selected, onClick }) {
  return (
    <div onClick={onClick}
      className={`border-2 p-3 rounded-lg cursor-pointer ${selected
        ? "border-green-400 bg-green-900 text-white"
        : "border-green-600 bg-gray-800 text-green-300 hover:bg-green-900"}`}>
      <p className="text-lg font-semibold">{title}</p>
      <p className="text-sm text-gray-400">{subject}</p>
    </div>
  );
}

function EditPanel({ quiz, onSave, onCancel }) {
  const [text, setText] = useState(quiz.content);
  return (
    <div className="flex flex-col gap-4">
      <SectionHeader title="Edit Content" />
      <p className="text-green-300 text-lg font-semibold">{quiz.title} — {quiz.subject}</p>
      <textarea className="border-2 border-green-600 bg-gray-900 text-green-200 p-3 text-lg rounded-lg w-full h-32 resize-none"
        value={text} onChange={e => setText(e.target.value)} />
      <div className="grid grid-cols-2 gap-4">
        <button onClick={() => onSave(text)}
          className="border-2 border-green-500 bg-gray-800 text-green-300 font-semibold text-lg py-2 rounded-lg hover:bg-green-900">
          Save
        </button>
        <button onClick={onCancel}
          className="border-2 border-red-500 bg-gray-800 text-red-400 font-semibold text-lg py-2 rounded-lg hover:bg-red-900">
          Cancel
        </button>
      </div>
    </div>
  );
}

function CustomizeQuiz({ onBack }) {
  const [quizzes, setQuizzes] = useState(initialQuizzes);
  const [selected, setSelected] = useState(null);

  function handleSave(newText) {
    setQuizzes(quizzes.map(q => q.id === selected.id ? { ...q, content: newText } : q));
    setSelected(null);
  }

  return (
    <div className="h-screen flex flex-col bg-gray-950">
      <PageHeader title="💰 FinanceEd — Edit Quizzes" onBack={onBack} />
      <div className="grid grid-cols-2 gap-4 p-4 flex-1 overflow-hidden">
        <div className="flex flex-col gap-3 overflow-y-auto pr-1">
          <SectionHeader title="Your Created Quizzes" />
          {quizzes.map(q => (
            <QuizCard key={q.id} title={q.title} subject={q.subject} selected={selected?.id === q.id} onClick={() => setSelected(q)} />
          ))}
        </div>
        <div className="border-2 border-green-700 bg-gray-800 rounded-lg p-4">
          {selected
            ? <EditPanel quiz={selected} onSave={handleSave} onCancel={() => setSelected(null)} />
            : <p className="text-gray-400 text-lg">Select a quiz on the left to edit it.</p>}
        </div>
      </div>
    </div>
  );
}

export default CustomizeQuiz;