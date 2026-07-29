import { useNavigate } from "react-router-dom";
import TopicCard from "../components/TopicCard";
import topics from "../data/topics";

import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="container">

        {/* ================= HERO ================= */}

        <section className="hero">

          <div className="hero-content">

            <span className="hero-badge">
              🚀 A Learning Platform by DEEPAK
            </span>

            <h1 className="hero-title">
              Master Java Through Real Learning,
              <br />
              Not Just Theory
            </h1>

            <p className="hero-description">
              Learn Java in both <strong>English</strong> and <strong>Tamil</strong> through
              simple explanations, real-world applications, practical examples,
              coding exercises, and challenge questions.
            </p>

            <p className="hero-description">
              Don't just memorize syntax. Understand
              <strong> where</strong>, <strong>why</strong>, and <strong>how</strong> every concept
              is used in real software development.
            </p>

          </div>

        </section>

        {/* ================= ROADMAP ================= */}

        <section className="topics-section">

          <div className="section-header">

            <h2>📚 Java Learning Roadmap</h2>

            <p>
              Complete each topic step by step. Every lesson unlocks
              practical coding questions, explanations, and real-world
              programming scenarios.
            </p>

          </div>

          <div className="topics-grid">

            {topics.map((topic) => (

              <TopicCard
                key={topic.id}
                title={topic.title}
                locked={topic.locked}
                onClick={() => navigate(`/topic/${topic.id}`)}
              />

            ))}

          </div>

        </section>

      </div>
    </div>
  );
}

export default Home;