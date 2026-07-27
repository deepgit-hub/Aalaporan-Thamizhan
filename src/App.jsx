import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Topic from "./pages/Topic";
import Question from "./pages/Question";
import QuestionDetails from "./pages/QuestionDetails";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/topic/:id" element={<Topic />} />
      <Route path="/question/:id" element={<Question />} />
      <Route path="/question/:topicId/:questionId" element={<QuestionDetails />} />
    </Routes>
  );
}

export default App;