import { Routes, Route } from "react-router-dom";

import Languages from "./pages/Languages";
import Topics from "./pages/Topic";
import Questions from "./pages/Question";
import QuestionDetails from "./pages/QuestionDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Languages />} />
      <Route path="/topics/:languageId" element={<Topics />} />
      <Route path="/questions/:languageId/:topicId" element={<Questions />} />
      <Route
        path="/question/:languageId/:topicId/:questionId"
        element={<QuestionDetails />}
      />
    </Routes>
  );
}

export default App;