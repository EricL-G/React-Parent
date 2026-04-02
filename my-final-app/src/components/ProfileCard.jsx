import React from 'react';
import './ProfileCard.css'; // Import the CSS file

const ProfileCard = ({ name, title, bio, imageUrl }) => {
  return (
    <div className="profile-card">
      <img src={imageUrl} alt={`Profile of ${name}`} className="profile-image" />
      <div className="card-content">
        <h1 className="profile-name">{name}</h1>
        <h2 className="profile-title">{title}</h2>
        <p className="profile-bio">{bio}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
