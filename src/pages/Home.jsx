import TopicCard from "../components/TopicCard";
import MentorSupport from "../components/MentorSupportButton";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import {
  Languages,
  Globe2,
  CodeXml,
} from "lucide-react";

import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();
const { languageId } = useParams();

const [student, setStudent] = useState(null);
useEffect(() => {
  async function fetchTopics() {
    const snapshot = await getDocs(
      collection(db, "languages", languageId, "concepts")
    );

    const data = snapshot.docs
      .map((doc) => ({
        id: Number(doc.id),
        ...doc.data(),
      }))
      .sort((a, b) => a.id - b.id);

    setTopics(data);
  }
const currentStudent = JSON.parse(
  localStorage.getItem("student")
);

async function fetchStudent() {

  const studentRef = doc(
    db,
    "students",
    currentStudent.username
  );

  const studentSnap = await getDoc(studentRef);

  if (studentSnap.exists()) {

    setStudent(studentSnap.data());

  }

}
  fetchTopics();
  fetchStudent();
}, [languageId]);

  return (
    <div className="home-page">
      <div className="container">

        {/* ================= HERO ================= */}

        <section className="hero">

          <span className="hero-badge">
            🚀 A Learning Platform by your Supreme Senior DEEPAK
          </span>

          <h1 className="hero-title">
           Master {languageId?.toUpperCase()} Through Real Learning,
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

            <h2>📚 {languageId?.toUpperCase()} Learning Hub</h2>

            <p>
              Explore any topic, practice coding, and track your progress as
              you master each concept.
            </p>

          </div>
          {/* ================= PROGRESS CARD ================= */}

  <div className="progress-card">

    <div className="progress-top">

      <h3>📈 Overall Progress</h3>

      <span className="progress-percent">
        0%
      </span>

    </div>

    <div className="progress-bar">

      <div
        className="progress-fill"
        style={{ width: "0%" }}
      ></div>

    </div>

    <div className="progress-bottom">

      <p>
        <strong>0</strong> / <strong>30</strong> Topics Completed
      </p>

      <p className="progress-message">
        🚀 Start learning today and build a strong foundation in {languageId?.toUpperCase()}.
      </p>

    </div>

  </div>
  {/* ================= TOPICS ================= */}
          <div className="topics-grid">

            {topics.map((topic) => (

              <TopicCard
                key={topic.id}
                title={topic.title}
                onClick={() =>
  navigate(`/topic/${languageId}/${topic.id}`)
}
              />

            ))}

          </div>

        </section>
<MentorSupport />
      </div>

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-container">

          <div className="footer-left">

            <h2>🌾 Aalaporan Thamizhan</h2>

            <p>
              Empowering Tamil students to rise, innovate, and lead the future of technology.
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

            <h3>👨‍💻 About the Developer</h3>

            <p>
              Hi! I'm <strong>Deepak</strong> , a Computer Science student passionate about helping Tamil students learn programming through simple explanations, practical coding exercises, and real-world examples. I created Aalaporan Thamizhan with the belief that talent exists everywhere—it only needs the right opportunity to grow.
            </p>

          </div>

          <div className="footer-right">
<div className="footer-buttons">
            <button
              className="portfolio-btn1"
              onClick={() =>
                window.open(
                  "https://deepgit-hub.github.io/Digital-Portfolio/",
                  "_blank"
                )
              }
            >
              👨‍💻  Know More DEEPAK
            </button>
            <button
              className="portfolio-btn2"
              onClick={() =>
                window.open(
                  "https://thequeenslab.vercel.app/",
                  "_blank"
                )
              }
            >
              🌏︎ To Built WEBSITES
            </button>
            
</div>
          </div>

        </div>

        <hr />

        <p className="copyright">
          © 2026  Aalaporan Thamizhan • Designed & Developed by deep-AK
        </p>

      </footer>

    </div>
  );
}

export default Home;