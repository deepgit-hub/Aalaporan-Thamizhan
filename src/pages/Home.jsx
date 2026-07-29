import { useNavigate } from "react-router-dom";
import TopicCard from "../components/TopicCard";
import topics from "../data/topics";
import { BookOpen,Globe,Code2, } from "lucide-react";
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="container">

        {/* Hero Section */}

        <section className="hero">

          <span className="hero-badge">
            🚀 A Learning Platform by  your Supreme Senior DEEPAK 
          </span>

          <h1 className="hero-title">
            Master Java Through Real Learning,
            <br />
            Not Just Theory.
          </h1>

          <p className="hero-description">
            Welcome to a bilingual coding platform where every Java concept
            is taught in both <strong>English</strong> and <strong>Tamil</strong>.
            Learn with simple explanations, real-world applications,
            practical examples, coding exercises, and challenge questions.
          </p>

          <p className="hero-description">
            This platform is designed to help students understand not only
            <strong> how to code</strong>, but also
            <strong> where</strong>,
            <strong> why</strong>, and
            <strong> when</strong> every concept is used in real software
            development.
          </p>

          <div className="hero-features">

            <div className="feature-card">

  <div className="feature-header">

    <BookOpen className="feature-icon" />

    <h3>English + Tamil</h3>

</div>

              <p>
                Every topic is explained in both languages for better
                understanding.
              </p>

            </div>

            <div className="feature-card">

      <div className="feature-header">

    <Globe className="feature-icon" />

    <h3>Real-World Learning</h3>

</div>

              <p>
                Learn where every programming concept is actually used in
                software development.
              </p>

            </div>

            <div className="feature-card">

      <div className="feature-header">

    <Code2 className="feature-icon" />

    <h3>Practice While Learning</h3>

</div>

              <p>
                Solve coding questions immediately after every topic and
                strengthen your understanding.
              </p>

            </div>

          </div>

        </section>

        {/* Learning Roadmap */}

        <section className="topics-section">

          <div className="section-header">

            <h2>📚 Java Learning Roadmap</h2>

            <p>
              Complete every topic in order. Each lesson builds your
              programming skills step by step before unlocking the next one.
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