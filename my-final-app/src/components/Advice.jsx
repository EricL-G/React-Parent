import React, { useState } from "react";

export default function Advice() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return alert("Please enter some text.");

    setItems([...items, trimmed]);
    setInput(""); // Clear input
  };

  const handleDelete = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h2>To-Do List</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Add Item:
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add</button>
      </form>

      <ul style={{ marginTop: "20px", paddingLeft: "20px" }}>
        {items.map((item, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "#f9f9f9",
              padding: "5px 10px",
              borderRadius: "4px",
              marginBottom: "5px",
            }}
          >
            {item}
            <button
              onClick={() => handleDelete(index)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "4px 8px",
                cursor: "pointer",
                borderRadius: "3px",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}