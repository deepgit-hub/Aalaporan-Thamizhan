import { useParams } from "react-router-dom";
import questions from "../data/questions";

function Question() {
  const { id } = useParams();

  const topic = questions.find(
    (item) => item.topicId === Number(id)
  );

  if (!topic) {
    return <h2>Topic not found</h2>;
  }

  return (
    <div className="question-page">
      <h1>Question on "{topic.title}"</h1>

      <h2>All the best</h2>

      <div className="question-list">
        {topic.questions.map((question) => (
          <button key={question.id}>
            {question.title}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;