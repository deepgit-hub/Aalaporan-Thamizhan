import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import "../styles/Question.css";

function Question() {
  const navigate = useNavigate();

  const { languageId, topicId } = useParams();

  const [topic, setTopic] = useState(null);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      // Fetch Topic
      const topicSnapshot = await getDocs(
        collection(db, "languages", languageId, "concepts")
      );

      const currentTopic = topicSnapshot.docs.find(
        (doc) => doc.id === topicId
      );

      if (!currentTopic) return;

      setTopic(currentTopic.data());

      // Fetch Questions
      const questionSnapshot = await getDocs(
        collection(
          db,
          "languages",
          languageId,
          "concepts",
          topicId,
          "questions"
        )
      );

      const questionData = questionSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      questionData.sort((a, b) => Number(a.id) - Number(b.id));

      setQuestions(questionData);
    }

    fetchQuestions();
  }, [languageId, topicId]);

  if (!topic) return <h2>Loading...</h2>;

  return (
    <div className="question-page">
      <button
        className="back-btn"
        onClick={() =>
          navigate(`/topics/${languageId}`)
        }
      >
        ⬅ Back
      </button>

      <div className="question-header">
        <h1>{topic.title}</h1>

        <p>
          Practice all 10 questions and strengthen your programming
          skills.
        </p>
      </div>

      <div className="best-card">
        <h2>🚀 Ready to Practice?</h2>

        <p>Complete Questions 1–8 first.</p>

        <p>🏆 Questions 9 & 10 are Challenge Questions.</p>
      </div>

      <div className="question-grid">
        {questions.map((question) => (
          <div
            key={question.id}
            className={`question-card ${
              question.challenge ? "challenge" : ""
            }`}
            onClick={() =>
              navigate(
                `/question/${languageId}/${topicId}/${question.id}`
              )
            }
          >
            <div className="icon">
              {question.challenge ? "🏆" : "📄"}
            </div>

            <h3>{question.title}</h3>

            <p>
              {question.challenge
                ? "Challenge Question"
                : "Practice Question"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Question;