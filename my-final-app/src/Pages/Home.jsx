import StartButton from "../components/StartButton";

function Home() {
 return (
 <div style={{ backgroundColor: '#5e4e46', minHeight: '100vh', padding: '2rem' }}>
   <h1 style={{ fontFamily: "'Nanum Gothic', sans-serif", fontWeight: 'bold', color: '#e9bd7e' }}>Home Page</h1>
   <p style={{ color: '#e9d8c7', fontFamily: "'Noto Sans KR', sans-serif" }}>Click the start button to begin the fiance quiz!</p>
   <StartButton />
 </div>
)
};


export default Home;