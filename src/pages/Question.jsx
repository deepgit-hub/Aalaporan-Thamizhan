import { useParams } from "react-router-dom";
import questions from "../data/questions";

function Question() {
  const { id } = useParams();

  const topic = questions.find(
    (item) => item.topicId === Number(id)
  );

  if (!topic) {
    return <h2>Topic Not Found</h2>;
  }

  return (
    <>
      <h1>Question on "{topic.title}"</h1>

      <h2>All the best</h2>

      {topic.questions.map((question) => (
        <div key={question.id}>
          <button>{question.title}</button>
        </div>
      ))}
    </>
  );
}

export default Question;