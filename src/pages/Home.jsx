import { useNavigate } from "react-router-dom";
import TopicCard from "../components/TopicCard";
import topics from "../data/topics";
import {
  Languages,
  Globe2,
  CodeXml,
} from "lucide-react";

import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="container">

        {/* ================= HERO ================= */}

        <section className="hero">

          <span className="hero-badge">
            🚀 A Learning Platform by your Supreme Senior DEEPAK
          </span>

          <h1 className="hero-title">
            Master Java Through Real Learning,
            <br />
            Not Just Theory.
          </h1>

          <p className="hero-description">
            Welcome to a bilingual coding platform where every Java concept is
            taught in both <strong>English</strong> and <strong>Tamil</strong>.
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

          {/* Feature Cards */}

          <div className="hero-features">

            <div className="feature-card">
              <div className="feature-header">
                <Languages className="feature-icon" />
                <h3>Bilingual Learning</h3>
              </div>

              <p>
                Every Java topic is explained in both English and Tamil,
                making programming easier to understand.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-header">
                <Globe2 className="feature-icon" />
                <h3>Real-World Applications</h3>
              </div>

              <p>
                Learn where every programming concept is used in real software
                development and industry projects.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-header">
                <CodeXml className="feature-icon" />
                <h3>Practice as You Learn</h3>
              </div>

              <p>
                Strengthen your understanding by solving coding questions after
                every lesson.
              </p>
            </div>

          </div>

        </section>

        {/* ================= JAVA LEARNING HUB ================= */}

        <section className="topics-section">

          <div className="section-header">

            <h2>📚 Java Learning Hub</h2>

            <p>
              Explore any topic, practice coding, and track your progress as
              you master each concept.
            </p>

          </div>

          <div className="topics-grid">

            {topics.map((topic) => (

              <TopicCard
                key={topic.id}
                title={topic.title}
                onClick={() => navigate(`/topic/${topic.id}`)}
              />

            ))}

          </div>

        </section>

      </div>

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-container">

          <div className="footer-left">

            <h2>🌾 Aalaporan Thamizhan</h2>

            <p>
              Empowering Tamil students to learn, build,
              and lead the future of technology.
            </p>

            <p className="footer-quote">
              "From Tamil classrooms to global companies —
              your journey starts with a single line of code."
            </p>
            <p className="footer-quote">
              Every expert programmer was once a beginner. Start today, stay consistent, and let your code speak for itself.
            </p>
          </div>

          <div className="footer-center">

            <h3>👨‍💻 About the Creator</h3>

            <p>
              Hi! I'm <strong>Deepak</strong> , a Computer Science student passionate about helping Tamil students learn programming through simple explanations, practical coding exercises, and real-world examples. I created Alaporan Tamilan with the belief that talent exists everywhere—it only needs the right opportunity to grow.
            </p>

          </div>

          <div className="footer-right">

            <button
              className="portfolio-btn"
              onClick={() =>
                window.open(
                  "https://your-portfolio-link.com",
                  "_blank"
                )
              }
            >
              👨‍💻 Know More About Me
            </button>

          </div>

        </div>

        <hr />

        <p className="copyright">
          © 2026 Alaporan Tamilan • Designed & Developed by Deepak
        </p>

      </footer>

    </div>
  );
}

export default Home;