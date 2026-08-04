import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import "../styles/QuestionDetails.css";

function QuestionDetails() {
  const navigate = useNavigate();

  const { languageId, topicId, questionId } = useParams();

  const [showSolution, setShowSolution] = useState(false);

  const [topic, setTopic] = useState(null);
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    async function fetchData() {
      // Fetch Topic
      const topicRef = doc(
        db,
        "languages",
        languageId,
        "concepts",
        topicId
      );

      const topicSnap = await getDoc(topicRef);

      if (!topicSnap.exists()) return;

      setTopic(topicSnap.data());

      // Fetch Question
      const questionRef = doc(
        db,
        "languages",
        languageId,
        "concepts",
        topicId,
        "questions",
        questionId
      );

      const questionSnap = await getDoc(questionRef);

      if (!questionSnap.exists()) return;

      setQuestion(questionSnap.data());
    }

    fetchData();
  }, [languageId, topicId, questionId]);

  if (!topic) return <h2>Loading Topic...</h2>;

  if (!question) return <h2>Loading Question...</h2>;

  return (
    <div className="question-details-page">

      <button
        className="back-btn"
        onClick={() =>
          navigate(`/questions/${languageId}/${topicId}`)
        }
      >
        ⬅ Back
      </button>

      <div className="details-header">
        <h1>{topic.title}</h1>

        <p>{question.title}</p>
      </div>

      <div className="info-card">
        <h2>📝 Question (English)</h2>

        <p>{question.questionEnglish}</p>
      </div>

      <div className="info-card">
        <h2>🌐 Question (Tamil)</h2>

        <p>{question.questionTamil}</p>
      </div>

      <div className="info-card">
        <h2>💡 Hint (English)</h2>

        <p>{question.hintEnglish}</p>
      </div>

      <div className="info-card">
        <h2>💡 Hint (Tamil)</h2>

        <p>{question.hintTamil}</p>
      </div>

      <div className="code-card output-card">
        <h2>🎯 Expected Output</h2>

        <pre>{question.expectedOutput}</pre>
      </div>

      <div className="button-group">

        <button
          className="run-btn"
          onClick={() =>
            window.open(
              "https://onecompiler.com/java#draft-fvge",
              "_blank"
            )
          }
        >
          💻 Run Code
        </button>

        {!question.challenge && (
          <button
            className="solution-btn"
            onClick={() =>
              setShowSolution(!showSolution)
            }
          >
            {showSolution
              ? "Hide Solution"
              : "📖 View Solution"}
          </button>
        )}

      </div>

      {showSolution && (
        <div className="code-card solution-card">
          <h2>📖 Solution</h2>

          <pre>
            <code>{question.solution}</code>
          </pre>
        </div>
      )}

    </div>
  );
}

export default QuestionDetails;