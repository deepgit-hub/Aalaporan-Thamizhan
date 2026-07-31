import "../styles/TopicCard.css";

function TopicCard({
  title,
  locked,
  completed = false,
  onClick,
}) {
  return (
    <button
      className={`topic-card ${
        completed
          ? "completed"
          : locked
          ? "locked"
          : "available"
      }`}
      onClick={onClick}
    >
      <div className="topic-icon">
        {completed ? "✅" : locked ? "🔒" : "📘"}
      </div>

      <h3>{title}</h3>

      <p>
        {completed
          ? "Completed"
          : locked
          ? "Locked"
          : "Start Learning"}
      </p>
    </button>
  );
}

export default TopicCard;