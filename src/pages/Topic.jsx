import { useParams } from "react-router-dom";

function Topic() {
  const { languageId } = useParams();

  return (
    <div>
      <h1>Topics</h1>
      <h2>{languageId}</h2>
    </div>
  );
}

export default Topic;