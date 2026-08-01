import { useNavigate, useParams } from "react-router-dom";
import questions from "../data/java/question";
import "../styles/Question.css";

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
    <div className="question-page">

      <button
        className="back-btn"
        onClick={() => navigate(`/topic/${id}`)}
      >
        ⬅ Back
      </button>

      <div className="question-header">

        <h1>{topic.title}</h1>

        <p>
          Practice all 10 questions and strengthen your Java skills.
        </p>

      </div>

      <div className="best-card">

        <h2>🚀 Ready to Practice?</h2>

        <p>
          Complete Questions 1–8 first.
        </p>

        <p>
          🏆 Questions 9 & 10 are Challenge Questions.
        </p>

      </div>

      <div className="question-grid">

        {topic.questions.map((question) => (

          <div
            key={question.id}
            className={`question-card ${
              question.challenge ? "challenge" : ""
            }`}
            onClick={() =>
              navigate(`/question/${id}/${question.id}`)
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