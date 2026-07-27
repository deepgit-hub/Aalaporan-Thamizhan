import { useNavigate, useParams } from "react-router-dom";
import topics from "../data/topics";
import { useState } from "react";

function Topic() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [allTopics, setAllTopics] = useState(topics);

  const topic = allTopics.find((topic) => topic.id === Number(id));

  const handleMarkAsLearned = () => {
    const updatedTopics = [...allTopics];

    updatedTopics[topic.id - 1].completed = true;

    if (updatedTopics[topic.id]) {
      updatedTopics[topic.id].locked = false;
    }

    setAllTopics(updatedTopics);

    alert("🎉 Topic Completed! Next Topic Unlocked.");
  };

  return (
    <>
      <button onClick={() => navigate("/")}>⬅ Back</button>

      <h1>{topic.title}</h1>

      <hr />

      <h2>📖 English Definition</h2>
      <p>{topic.englishDefinition}</p>

      <hr />

      <h2>📖 Tamil Definition</h2>
      <p>{topic.tamilDefinition}</p>

      <hr />

      <h2>🌍 Real World Usage</h2>
      <p>{topic.realWorldUsage}</p>

      <hr />

      <h2>🌍 நிஜ வாழ்க்கையில் பயன்பாடு</h2>
      <p>{topic.realWorldUsageTamil}</p>

      <hr />

      <h2>💻 Syntax</h2>

      <pre>
        <code>{topic.syntax}</code>
      </pre>

      <hr />

      <h2>📘 Syntax Explanation (English)</h2>

      <ul>
        {topic.syntaxExplanationEnglish.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <hr />

      <h2>📗 Syntax Explanation (Tamil)</h2>

      <ul>
        {topic.syntaxExplanationTamil.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <hr />

      <h2>🖥 Example Program</h2>

      <pre>
        <code>{topic.exampleProgram}</code>
      </pre>

      <hr />

      <h2>📘 Program Explanation (English)</h2>

      <ul>
        {topic.programExplanationEnglish.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <hr />

      <h2>📗 Program Explanation (Tamil)</h2>

      <ul>
        {topic.programExplanationTamil.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <hr />

      <h2>🖥 Output</h2>

      <pre>
        <code>{topic.output}</code>
      </pre>

      <hr />

      <button onClick={() => navigate(`/question/${topic.id}`)}>
        Start Code
      </button>

      <button onClick={handleMarkAsLearned}>
        ✅ Mark as Learned
      </button>
    </>
  );
}

export default Topic;