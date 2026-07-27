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
    <div className="question-page">

      <button onClick={() => navigate(`/question/${topicId}`)}>
        ⬅ Back
      </button>

      <h1>{topic.title}</h1>

      <h2>{question.title}</h2>

      <hr />

      <h2>📝 Question (English)</h2>
      <p>{question.questionEnglish}</p>

      <hr />

      <h2>📝 கேள்வி (Tamil)</h2>
      <p>{question.questionTamil}</p>

      <hr />

      <h2>💡 Hint (English)</h2>
      <p>{question.hintEnglish}</p>

      <hr />

      <h2>💡 குறிப்பு (Tamil)</h2>
      <p>{question.hintTamil}</p>

      <hr />

      <h2>🎯 Expected Output</h2>

      <pre>{question.expectedOutput}</pre>

      <hr />

      <button>💻 Run Code</button>

      {!question.challenge && (
        <button
          onClick={() => setShowSolution(!showSolution)}
        >
          {showSolution ? "Hide Solution" : "📖 Solution"}
        </button>
      )}

      <button>✅ Done</button>

      {showSolution && (
        <>
          <hr />

          <h2>📖 Solution</h2>

          <pre>
            <code>{question.solution}</code>
          </pre>
        </>
      )}

    </div>
  );
}

export default QuestionDetails;