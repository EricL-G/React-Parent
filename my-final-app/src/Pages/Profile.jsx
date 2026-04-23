import { useState, useContext, useEffect } from 'react';
import ProfileCard from '../components/ProfileCard';
import { UserContext } from '../context/UserContext';

function Profile() {
  const { user, clearUserData } = useContext(UserContext);
  const [name, setName] = useState("Your Name");
  const [title, setTitle] = useState("Your Title");
  const [bio, setBio] = useState("Your bio goes here");
  const [imageUrl, setImageUrl] = useState("https://via.placeholder.com/200");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Set name from user context on mount
  useEffect(() => {
    if (user && user.name) {
      setName(user.name);
      setIsLoggedIn(true);
    }
  }, [user]);

  const handleLogout = () => {
    clearUserData();
    setIsLoggedIn(false);
    setName("Your Name");
    setTitle("Your Title");
    setBio("Your bio goes here");
  };

  return (
    <>
      <h1>Profile Page</h1>
      
      {!isLoggedIn ? (
        <div style={{ padding: '2rem', backgroundColor: '#fff3cd', borderRadius: '8px', marginBottom: '2rem', border: '1px solid #ffc107' }}>
          <p style={{ fontSize: '1.1rem', color: '#856404', marginBottom: '1rem' }}>
            ℹ️ Please sign up or log in first to view your profile.
          </p>
          <a href="/auth" style={{ color: '#0066cc', textDecoration: 'none', fontWeight: 'bold' }}>
            Go to Sign Up / Login →
          </a>
        </div>
      ) : (
        <>
          <div style={{ padding: '1rem', backgroundColor: '#d4edda', borderRadius: '8px', marginBottom: '2rem', border: '1px solid #28a745' }}>
            <p style={{ fontSize: '1rem', color: '#155724', margin: '0 0 0.5rem 0' }}>
              ✅ Welcome back, <strong>{name}</strong>!
            </p>
            <button
              onClick={handleLogout}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#c82333'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#dc3545'}
            >
              Logout
            </button>
          </div>
        </>
      )}
      
      <ProfileCard 
        name={name}
        title={title}
        bio={bio}
        imageUrl={imageUrl}
      />
    </>
  );
}

export default Profile;