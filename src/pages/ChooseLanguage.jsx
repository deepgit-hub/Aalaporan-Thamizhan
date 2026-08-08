import { useNavigate } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import "../styles/ChooseLanguage.css";

function ChooseLanguage() {
  const navigate = useNavigate();

  async function selectLanguage(language) {
    try {
      const student = JSON.parse(
        localStorage.getItem("student")
      );

      if (!student) {
        alert("❌ Student information not found.");
        navigate("/");
        return;
      }

      // Update language in Firestore
      await updateDoc(
        doc(db, "students", student.username),
        {
          language: language,
        }
      );

      // Update localStorage
      const updatedStudent = {
        ...student,
        language: language,
      };

      localStorage.setItem(
        "student",
        JSON.stringify(updatedStudent)
      );

      // Go to welcome page
      navigate("/welcome");

    } catch (error) {
      console.error(error);
      alert("❌ Failed to save your language.");
    }
  }

  return (
    <div className="choose-language-page">

      <div className="choose-language-card">

        <div className="language-logo">
          🌾
        </div>

        <h1>AALAPORAN THAMIZHAN</h1>

        <h2>Choose Your Language 👨‍💻</h2>

        <p>
          Select the programming language you want
          to learn.
        </p>

        <div className="language-options">

          <button
            onClick={() => selectLanguage("java")}
            className="language-option java"
          >
            <span>☕</span>
            <strong>Java</strong>
            <small>Learn Java Programming</small>
          </button>

          <button
            onClick={() => selectLanguage("python")}
            className="language-option python"
          >
            <span>🐍</span>
            <strong>Python</strong>
            <small>Learn Python Programming</small>
          </button>

          <button
            onClick={() => selectLanguage("cpp")}
            className="language-option cpp"
          >
            <span>⚙️</span>
            <strong>C++</strong>
            <small>Learn C++ Programming</small>
          </button>

        </div>

        <p className="choose-note">
          💡 You can choose the language that interests you the most.
        </p>

      </div>

    </div>
  );
}

export default ChooseLanguage;