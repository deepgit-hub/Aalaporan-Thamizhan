import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function Topic() {
  const { languageId } = useParams();

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
        <h2 key={topic.id}>{topic.title}</h2>
      ))}
    </div>
  );
}

export default Topic;