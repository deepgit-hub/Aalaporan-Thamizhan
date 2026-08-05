import { useNavigate } from "react-router-dom";

function Welcome() {

  const navigate = useNavigate();

  const student = JSON.parse(
    localStorage.getItem("student")
  );

  function startLearning() {

    navigate(`/home/${student.language}`);

  }

  return (

    <div className="welcome-page">

      <div className="welcome-card">

        <h1>🌾 Aalaporan Thamizhan</h1>

        <h2>Welcome Back 👋</h2>

        <h3>{student.name}</h3>

        <p>
          Today is another opportunity
          to become a better programmer.
        </p>

        <p>
          Keep Learning.
          <br />
          Keep Building.
          <br />
          Keep Growing.
        </p>

        <h4>
          📚 Assigned Language
        </h4>

        <h3>
          {student.language.toUpperCase()}
        </h3>

        <button
          onClick={startLearning}
        >
          🚀 Let's Start
        </button>

      </div>

    </div>

  );

}

export default Welcome;