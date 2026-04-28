import { useContext } from 'react';
import StartButton from "../components/StartButton";
import { UserContext } from '../context/UserContext';

function Home() {
  const { user } = useContext(UserContext);
  const isLoggedIn = user && user.name;

  return (
    <div style={{ backgroundColor: '#5e4e46', minHeight: '100vh', padding: '2rem' }}>
      <h1 style={{ fontFamily: "'Nanum Gothic', sans-serif", fontWeight: 'bold', color: '#e9bd7e' }}>Home Page</h1>
      
      {!isLoggedIn ? (
        <div style={{ padding: '2rem', backgroundColor: '#3a6154', borderRadius: '8px', marginTop: '1rem', border: '2px solid #e9d8c7' }}>
          <p style={{ fontSize: '1.1rem', color: '#e9d8c7', marginBottom: '1rem', fontFamily: "'Noto Sans KR', sans-serif" }}>
            🔐 Please sign up or log in first to access the quiz.
          </p>
          <a href="/auth" style={{ color: '#e9bd7e', textDecoration: 'none', fontWeight: 'bold', fontFamily: "'Noto Sans KR', sans-serif", fontSize: '1.1rem' }}>
            Go to Sign Up / Login →
          </a>
        </div>
      ) : (
        <>
          <p style={{ color: '#e9d8c7', fontFamily: "'Noto Sans KR', sans-serif" }}>Click the start button to begin the fiance quiz!</p>
          <StartButton />
        </>
      )}
    </div>
  )
};

export default Home;