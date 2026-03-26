import React from 'react';
import ProfileCard from './ProfileCard';
//import profilePic from './profile-pic.jpg'; // Import your image asset

function App() {
  return (
    <div className="App">
      <ProfileCard
        name="Jane Doe"
        title="Frontend Developer"
        bio="I enjoy creating responsive and modern user interfaces."
        imageUrl={profilePic}
      />
    </div>
  );
}

export default App;
