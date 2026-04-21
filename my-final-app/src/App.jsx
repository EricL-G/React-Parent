import { useState } from "react";
import SignUp from "./Wilson's Pages/SignUp";
import BrowseQuiz from "./Wilson's Pages/BrowseQuiz";
import PlayQuiz from "./Wilson's Pages/PlayQuiz";
import CustomizeQuiz from "./Wilson's Pages/CustomizeQuiz";

function App() {
  const [page, setPage] = useState("signup");
  const [user, setUser] = useState(null);
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  function handleAuthSuccess(username) {
    setUser(username);
    setPage("browse");
  }

  function handleSelectQuiz(quiz) {
    setSelectedQuiz(quiz);
    setPage("play");
  }

  if (page === "signup") return <SignUp onAuthSuccess={handleAuthSuccess} />;
  if (page === "play")   return <PlayQuiz quiz={selectedQuiz} onBack={() => setPage("browse")} />;
  if (page === "customize") return <CustomizeQuiz onBack={() => setPage("browse")} />;
  return <BrowseQuiz user={user} onSelectQuiz={handleSelectQuiz} onCustomize={() => setPage("customize")} />;
}

export default App;