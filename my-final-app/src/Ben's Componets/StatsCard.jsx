import React from 'react';
import PropTypes from 'prop-types';
// Import a library for icons, e.g., React Icons (npm install react-icons)
// import { FiActivity } from 'react-icons/fi'; 

const StatsCard = ({ number, label, icon: IconComponent }) => {
  return (
    <div className="stats-card">
      <div className="card-content">
        {IconComponent && <IconComponent className="card-icon" />}
        <div className="text-section">
          <p className="card-number">{number}</p>
          <p className="card-label">{label}</p>
        </div>
      </div>
    </div>
  );
};

StatsCard.propTypes = {
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.elementType, // Use elementType for components
};

export default StatsCard;
