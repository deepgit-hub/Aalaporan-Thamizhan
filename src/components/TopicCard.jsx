import "../styles/TopicCard.css";
import { BookOpen, CheckCircle2 } from "lucide-react";

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
  {completed ? <CheckCircle2 /> : <BookOpen />}
</div>

      <h3>{title}</h3>

      <span className="topic-status">
  {completed
    ? " Completed"
    : " Start Learning"}
</span>
    </button>
  );
}

export default TopicCard;