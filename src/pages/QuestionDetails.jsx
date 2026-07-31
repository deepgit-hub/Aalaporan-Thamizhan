import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import questions from "../data/question";


function QuestionDetails() {
  const navigate = useNavigate();
  const { topicId, questionId } = useParams();

  const [showSolution, setShowSolution] = useState(false);

  const topic = questions.find(
    (item) => item.topicId === Number(topicId)
  );

  if (!topic) {
    return <h2>Topic Not Found</h2>;
  }

  const question = topic.questions.find(
    (item) => item.id === Number(questionId)
  );

  if (!question) {
    return <h2>Question Not Found</h2>;
  }

  return (
    <div className="question-details-page">

      <button
        className="back-btn"
        onClick={() => navigate(`/question/${topicId}`)}
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

      <div className="code-card">

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
            onClick={() => setShowSolution(!showSolution)}
          >
            {showSolution
              ? "Hide Solution"
              : "📖 View Solution"}
          </button>

        )}

      </div>

      {showSolution && (

        <div className="code-card">

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