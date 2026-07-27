import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Topic from "./pages/Topic";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/topic/:id" element={<Topic />} />
      <Route path="/question/:id" element={<Question />} />
    </Routes>
  );
}

export default App;