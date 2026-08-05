import { useNavigate } from "react-router-dom";
import quotes from "../data/quotes";
import "../styles/Welcome.css";

function Welcome() {
  const navigate = useNavigate();

  const student = JSON.parse(
    localStorage.getItem("student")
  );

  const randomQuote =
    quotes[Math.floor(Math.random() * quotes.length)];

  function startLearning() {
    navigate(`/home/${student.language}`);
  }

  return (
    <div className="welcome-page">

      <div className="welcome-card">

        <div className="logo">
          🌾
        </div>

        <h1>AALAPORAN THAMIZHAN</h1>

        <h2>Welcome Back 👋</h2>

        <h3>{student.name}</h3>

        <p className="quote">
          {randomQuote}
        </p>

        <div className="language-card">

          <span>📚 Assigned Language</span>

          <h2>
  {student.language === "java" && "☕ JAVA"}
  {student.language === "python" && "🐍 PYTHON"}
  {student.language === "cpp" && "⚙️ C++"}
</h2>

        </div>

        <button
          className="start-btn"
          onClick={startLearning}
        >
          🚀 Let's Start Learning
        </button>

        <p className="footer-text">
          Made with ❤️ by Deepak
        </p>

      </div>

    </div>
  );
}

export default Welcome;