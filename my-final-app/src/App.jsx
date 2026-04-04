import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import First from "./pages/First";
import Second from "./pages/Second";
import Final from "./pages/Final";
import Third from "./pages/Third";
import "flowbite"; // Import Flowbite JS for interactive components
import "./index.css"; // Tailwind styles
function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Bonus1</Link> |{" "}
        <Link to="/second">Bonus2</Link> |{" "}
        <Link to="/third">Bonus3</Link> |{" "}
        <Link to="/final">Bonus</Link>
      </nav>

      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/second" element={<Second />} />
        <Route path="/third" element={<Third />} />
        <Route path="/final" element={<Final />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
