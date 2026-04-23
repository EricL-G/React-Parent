import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Quiz from "./Pages/Quiz";
import SignAndLogin from "./Pages/sign&Login";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/profile">Profile</Link> |{" "}
        <Link to="/auth">Sign Up / Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/auth" element={<SignAndLogin />} />
      </Routes>
      <div style={{ marginTop: '1rem', textAlign: 'center' }}>
      </div>
    </BrowserRouter>
  );
}

export default App;

