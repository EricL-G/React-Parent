import { useState } from "react";

const quizzes = [
  { id: 1,  title: "Quiz #1",  subject: "Budgeting Basics",   questions: [{ text: "What is a budget?", choices: ["A savings plan", "A spending plan", "A loan", "An investment"], answer: 1 }, { text: "Which is a fixed expense?", choices: ["Groceries", "Rent", "Entertainment", "Clothing"], answer: 1 }] },
  { id: 2,  title: "Quiz #2",  subject: "Credit & APR",       questions: [{ text: "What does APR stand for?", choices: ["Annual Price Rate", "Annual Percentage Rate", "Applied Payment Rate", "Average Profit Return"], answer: 1 }, { text: "What is compound interest?", choices: ["Interest on principal only", "Interest on interest", "A fixed fee", "A tax"], answer: 1 }] },
  { id: 3,  title: "Quiz #3",  subject: "Credit Scores",      questions: [{ text: "What is a credit score?", choices: ["Bank balance", "Debt amount", "Creditworthiness number", "Income level"], answer: 2 }, { text: "What hurts your credit score?", choices: ["Paying on time", "Low utilization", "Missing payments", "Old accounts"], answer: 2 }] },
  { id: 4,  title: "Quiz #4",  subject: "Investing",          questions: [{ text: "What is diversification?", choices: ["Buying one stock", "Spreading investments", "Saving cash", "Paying debt"], answer: 1 }, { text: "What is a stock?", choices: ["A loan to a company", "Ownership share in a company", "A savings account", "A bond"], answer: 1 }] },
  { id: 5,  title: "Quiz #5",  subject: "Taxes",              questions: [{ text: "What is a W-2 form?", choices: ["Tax return", "Wage statement", "Loan form", "Budget sheet"], answer: 1 }, { text: "What is a tax deduction?", choices: ["Money you earn", "Money that reduces taxable income", "A penalty", "A refund"], answer: 1 }] },
  { id: 6,  title: "Quiz #6",  subject: "Retirement",         questions: [{ text: "What is a 401(k)?", choices: ["A tax form", "A retirement account", "A credit card", "A savings bond"], answer: 1 }, { text: "What is an IRA?", choices: ["Investment Return Account", "Individual Retirement Account", "Internal Revenue Account", "Income Reserve Allowance"], answer: 1 }] },
  { id: 7,  title: "Quiz #7",  subject: "Insurance",          questions: [{ text: "What is a deductible?", choices: ["Monthly premium", "Out-of-pocket cost before insurance pays", "A discount", "A refund"], answer: 1 }, { text: "What does liability insurance cover?", choices: ["Your injuries", "Your car damage", "Damage you cause to others", "Medical bills"], answer: 2 }] },
  { id: 8,  title: "Quiz #8",  subject: "Banking Basics",     questions: [{ text: "What is a checking account used for?", choices: ["Long-term savings", "Daily transactions", "Investing", "Loans"], answer: 1 }, { text: "What does FDIC do?", choices: ["Loans money", "Insures bank deposits", "Sets interest rates", "Collects taxes"], answer: 1 }] },
  { id: 9,  title: "Quiz #9",  subject: "Net Worth",          questions: [{ text: "What is net worth?", choices: ["Total income", "Assets minus liabilities", "Total savings", "Monthly salary"], answer: 1 }, { text: "Which is an asset?", choices: ["Car loan", "Credit card debt", "House you own", "Rent payment"], answer: 2 }] },
  { id: 10, title: "Quiz #10", subject: "Inflation",          questions: [{ text: "What is inflation?", choices: ["Falling prices", "Rising prices over time", "A tax increase", "A bank fee"], answer: 1 }, { text: "What causes inflation?", choices: ["Lower demand", "More money in circulation", "Higher taxes", "Less spending"], answer: 1 }] },
  { id: 11, title: "Quiz #11", subject: "Emergency Funds",    questions: [{ text: "What is an emergency fund?", choices: ["Vacation savings", "3-6 months of expenses saved", "A credit limit", "A loan"], answer: 1 }, { text: "Where should you keep an emergency fund?", choices: ["Stocks", "Crypto", "High-yield savings account", "Under your mattress"], answer: 2 }] },
  { id: 12, title: "Quiz #12", subject: "Loans & Debt",       questions: [{ text: "What is liquidity?", choices: ["How much cash you owe", "How easily an asset converts to cash", "A type of bond", "A tax bracket"], answer: 1 }, { text: "What is a mortgage?", choices: ["A car loan", "A student loan", "A home loan", "A business loan"], answer: 2 }] },
];

function SearchBar({ value, onChange }) {
  return (
    <input className="border-2 border-green-500 bg-gray-900 text-green-300 p-2 text-lg w-full rounded-lg placeholder-gray-500"
      type="text" placeholder="Search quizzes..." value={value} onChange={onChange} />
  );
}

function QuizCard({ title, subject, onClick }) {
  return (
    <div className="border-2 border-green-600 bg-gray-800 text-green-300 p-3 rounded-lg cursor-pointer hover:bg-green-900" onClick={onClick}>
      <p className="text-lg font-semibold">{title}</p>
      <p className="text-sm text-gray-400">{subject}</p>
    </div>
  );
}

function WelcomeText({ user }) {
  return (
    <div className="border-2 border-green-600 bg-gray-800 p-6 rounded-lg">
      <p className="text-2xl font-bold text-green-400">Welcome{user ? `, ${user}` : ""}!</p>
      <p className="text-lg mt-2 text-gray-300">Click on a quiz on the left to get started.</p>
    </div>
  );
}

function BrowseQuiz({ user, onSelectQuiz, onCustomize }) {
  const [search, setSearch] = useState("");
  const filtered = quizzes.filter(q =>
    q.title.toLowerCase().includes(search.toLowerCase()) ||
    q.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="h-screen flex flex-col bg-gray-950">
      <div className="p-4 border-b-2 border-green-700 bg-gray-900 flex justify-between items-center">
        <p className="text-green-400 font-bold text-2xl">💰 FinanceEd</p>
        <button onClick={onCustomize}
          className="border-2 border-green-500 bg-gray-800 text-green-300 font-semibold px-4 py-2 rounded-lg hover:bg-green-900">
          ✏️ Customize Quizzes
        </button>
      </div>
      <div className="p-4 border-b border-green-900 bg-gray-950">
        <SearchBar value={search} onChange={e => setSearch(e.target.value)} />
      </div>
      <div className="grid grid-cols-2 gap-4 p-4 flex-1 overflow-hidden">
        <div className="flex flex-col gap-3 overflow-y-auto pr-1">
          {filtered.map(q => <QuizCard key={q.id} title={q.title} subject={q.subject} onClick={() => onSelectQuiz(q)} />)}
        </div>
        <WelcomeText user={user} />
      </div>
    </div>
  );
}

export default BrowseQuiz;