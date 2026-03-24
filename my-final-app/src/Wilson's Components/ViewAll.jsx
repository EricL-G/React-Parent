import React from "react";

function ViewAll({ quizzes, onSelect }) {
  return (
    <div>
      <h2>All Quizzes</h2>

      {quizzes.map((quiz) => (
        <div key={quiz.id} style={{ marginBottom: "10px" }}>
          <h3>{quiz.title}</h3>
          <p>{quiz.description}</p>

          <button onClick={() => onSelect(quiz)}>
            View Quiz
          </button>
        </div>
      ))}
    </div>
  );
}

export default ViewAll;