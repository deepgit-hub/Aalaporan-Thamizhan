import { useNavigate } from "react-router-dom";
import TopicCard from "../components/TopicCard";
import topics from "../data/topics";

import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="container">

        {/* Hero Section */}

        <section className="hero">

          <span className="hero-badge">
            Java Learning Platform
          </span>

          <h1 className="hero-title">
            Learn Java from Beginner to Advanced
          </h1>

          <p className="hero-description">
            Master Java step by step through concepts, examples,
            explanations, and coding practice.
          </p>

        </section>

        {/* Topic Section */}

        <section className="topics-section">

          <div className="section-header">

            <h2>📚 Learning Roadmap</h2>

            <p>
              Complete each topic to unlock the next one.
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