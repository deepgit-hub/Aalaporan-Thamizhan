import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function Topic() {
  const { languageId } = useParams();

  const navigate = useNavigate();

  const [topics, setTopics] = useState([]);

  useEffect(() => {
    async function fetchTopics() {
      const snapshot = await getDocs(
        collection(db, "languages", languageId, "concepts")
      );

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setTopics(data);
    }

    fetchTopics();
  }, [languageId]);

  return (
    <div>
      <h1>{languageId}</h1>

      {topics.map((topic) => (
        <div
          key={topic.id}
          onClick={() =>
            navigate(`/questions/${languageId}/${topic.id}`)
          }
          style={{
            cursor: "pointer",
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "10px",
          }}
        >
          <h2>{topic.title}</h2>
          <p>{topic.englishDefinition}</p>
        </div>
      ))}
    </div>
  );
}

export default Topic;