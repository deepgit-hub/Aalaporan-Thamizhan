import { useNavigate, useParams } from "react-router-dom";
import questions from "../data/questions";

function Question() {
  const navigate = useNavigate();
  const { topicId, questionId } = useParams();

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
    <>
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

      <button>💻 Run Code</button>

      {!question.challenge && (
        <button>📖 Solution</button>
      )}

      <button>✅ Done</button>
    </>
  );
}

export default Question;