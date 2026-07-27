import { useNavigate, useParams } from "react-router-dom";
import questions from "../data/question";

function Question() {
  const navigate = useNavigate();
  const { id } = useParams();

  const topic = questions.find(
    (item) => item.topicId === Number(id)
  );

  if (!topic) {
    return <h2>Topic Not Found</h2>;
  }

  return (
    <>
      <button onClick={() => navigate(`/topic/${id}`)}>
        ⬅ Back
      </button>

      <h1>Question on "{topic.title}"</h1>

      <h2>All the Best</h2>

      <hr />

      {topic.questions.map((question) => (
        <div key={question.id} style={{ marginBottom: "15px" }}>
          <button>
            {question.title}
          </button>
        </div>
      ))}
    </>
  );
}

export default Question;    