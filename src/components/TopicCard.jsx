import "../styles/TopicCard.css";
import { BookOpen } from "lucide-react";

function TopicCard({
  title,
  completed = false,
  onClick,
}) {
  return (
    <button
      className={`topic-card ${
        completed ? "completed" : "not-completed"
      }`}
      onClick={onClick}
    >
      <div className="topic-icon">
        {completed ? "✅" : "📘"}
      </div>

      <h3>{title}</h3>

      <span className="topic-status">
        {completed ? "Completed" : "Learn Now"}
      </span>
    </button>
  );
}

export default TopicCard;