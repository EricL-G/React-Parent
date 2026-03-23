import React, { useState } from 'react';

const AccordionItem = ({ question, answer }) => {
  // State to manage whether the answer is visible or not
  const [isOpen, setIsOpen] = useState(false); //

  // Function to toggle the visibility state
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <button
        className={`accordion-question ${isOpen ? 'active' : ''}`}
        onClick={toggleAccordion} //
        aria-expanded={isOpen}
      >
        {question}
        {/* Optional: Add an icon that rotates based on the isOpen state */}
        <span className="icon">{isOpen ? '−' : '+'}</span>
      </button>
      <div
        className="accordion-answer"
        // Inline style for a smooth transition effect (CSS is also needed for height transition)
        style={{ maxHeight: isOpen ? '1000px' : '0' }}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
