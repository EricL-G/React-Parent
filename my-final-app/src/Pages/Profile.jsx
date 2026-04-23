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
    <div style={{ backgroundColor: '#5e4e46', minHeight: '100vh', padding: '2rem' }}>
      <h1 style={{ fontFamily: "'Nanum Gothic', sans-serif", fontWeight: 'bold', color: '#e9bd7e' }}>Profile Page</h1>
      
      {!isLoggedIn ? (
        <div style={{ padding: '2rem', backgroundColor: '#fff3cd', borderRadius: '8px', marginBottom: '2rem', border: '1px solid #ffc107', marginTop: '1rem' }}>
          <p style={{ fontSize: '1.1rem', color: '#e9d8c7', marginBottom: '1rem', fontFamily: "'Noto Sans KR', sans-serif" }}>
            ℹ️ Please sign up or log in first to view your profile.
          </p>
          <a href="/auth" style={{ color: '#0066cc', textDecoration: 'none', fontWeight: 'bold' }}>
            Go to Sign Up / Login →
          </a>
        </div>
      ) : (
        <>
          <div style={{ padding: '1rem', backgroundColor: '#d4edda', borderRadius: '8px', marginBottom: '2rem', border: '1px solid #28a745' }}>
            <h2 style={{ fontSize: '1rem', color: '#155724', margin: '0 0 0.5rem 0', fontFamily: "'Nanum Gothic', sans-serif", fontWeight: 'bold' }}>
              ✅ Welcome back, <strong>{name}</strong>!
            </h2>
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
      
      {isLoggedIn && (
        <div style={{ marginBottom: '2rem', padding: '1.5rem', backgroundColor: '#f0f7ff', borderRadius: '8px', border: '1px solid #0066cc' }}>
          <h2 style={{ marginTop: '0', marginBottom: '1rem', color: '#e9bd7e', fontFamily: "'Nanum Gothic', sans-serif", fontWeight: 'bold' }}>✏️ Edit Your Bio</h2>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Enter your bio"
            rows="4"
            style={{ 
              width: '100%', 
              padding: '0.75rem', 
              borderRadius: '4px', 
              border: '1px solid #0066cc',
              fontFamily: 'inherit',
              fontSize: '1rem'
            }}
          />
        </div>
      )}
      
      {isLoggedIn && (
        <ProfileCard 
          name={name}
          title={title}
          bio={bio}
          imageUrl={imageUrl}
        />
      )}
    </div>
  );
}

export default Profile;