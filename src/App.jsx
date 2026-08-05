import { Routes, Route } from "react-router-dom";

import Languages from "./pages/Languages";
import Home from "./pages/Home";
import Topic from "./pages/Topic";
import Question from "./pages/Question";
import QuestionDetails from "./pages/QuestionDetails";
import Login from "./pages/Login";
function App() {
  return (
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/languages" element={<Languages />} />
      <Route path="/home/:languageId" element={<Home />}/>

      <Route path="/topic/:languageId/:topicId" element={<Topic />} />

      <Route path="/questions/:languageId/:topicId" element={<Question />} />

      <Route path="/question/:languageId/:topicId/:questionId" element={<QuestionDetails />}/>
    </Routes>
  );
}

export default App;