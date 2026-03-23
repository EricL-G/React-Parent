import React, { useState } from 'react';
import './ToggleCard.css';

const ToggleCard = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="card-inner">
        {/* Front Side */}
        <div className="card-front">
          {frontContent}
        </div>
        
        {/* Back Side */}
        <div className="card-back">
          {backContent}
        </div>
      </div>
    </div>
  );
};

export default ToggleCard;