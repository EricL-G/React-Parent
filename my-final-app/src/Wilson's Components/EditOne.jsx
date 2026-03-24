import React, { useState } from "react";

function EditOne({ quiz, onSave, onCancel }) {
  const [title, setTitle] = useState(quiz ? quiz.title : "");
  const [description, setDescription] = useState(
    quiz ? quiz.description : ""
  );

  if (!quiz) {
    return <p>No quiz selected</p>;
  }

  const handleSave = () => {
    const updatedQuiz = {
      ...quiz,
      title,
      description,
    };

    onSave(updatedQuiz);
  };

  return (
    <div>
      <h2>Edit Quiz</h2>

      <div>
        <p>Title:</p>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <p>Description:</p>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <br />

      <button onClick={handleSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}

export default EditOne;
