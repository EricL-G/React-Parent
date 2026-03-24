function ViewOne({ quiz, onBack, onEdit }) {
  if (!quiz) {
    return <p>No quiz selected</p>;
  }

  return (
    <div>
      <h2>{quiz.title}</h2>
      <p>{quiz.description}</p>

      <button onClick={onBack}>Back</button>
      <button onClick={() => onEdit(quiz)}>
        Edit Quiz
      </button>
    </div>
  );
}

export default ViewOne;
