import React, { useState } from 'react';
import './ToggleCard.css'; // Import the CSS styles

const ToggleCard = ({ frontContent, backContent }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`flashcard-container ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="flashcard-inner">
        {/* Front Side */}
        <div className="flashcard-side flashcard-front">
          {frontContent}
        </div>
        {/* Back Side */}
        <div className="flashcard-side flashcard-back">
          {backContent}
        </div>
      </div>
    </div>
  );
};

export default ToggleCard;
