import "../styles/ThingsToRemember.css";

function ThingsToRemember({ isOpen, onClose, language }) {

  if (!isOpen) {
    return null;
  }

  const reminders = {

    python: [
      "Python uses indentation to define blocks of code.",
      "Maintain consistent indentation throughout your program.",
      "Python is case-sensitive.",
      "Variables do not require explicit type declarations.",
      "Use : after if, for, while, and function definitions.",
      "Use meaningful names for variables and functions."
    ],

    java: [
      "Java is case-sensitive.",
      "Most statements end with a semicolon (;).",
      "Use { } to define blocks of code.",
      "Java programs are organized using classes.",
      "The main() method is commonly used as the program entry point.",
      "Pay attention to data types when declaring variables."
    ],

    cpp: [
      "C++ is case-sensitive.",
      "Most statements end with a semicolon (;).",
      "Use { } to define blocks of code.",
      "Header files are included using #include.",
      "The main() function is the starting point of a C++ program.",
      "Pay attention to data types when declaring variables."
    ]

  };

  const languageName = {
    python: "Python",
    java: "Java",
    cpp: "C++"
  };

  const selectedLanguage =
    languageName[language?.toLowerCase()] || language;

  const selectedReminders =
    reminders[language?.toLowerCase()] || [];

  return (

    <div className="remember-overlay">

      <div className="remember-modal">

        <button
          className="remember-close"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="remember-title">

          <span>📌</span>

          <div>
            <h2>
              Things to Remember
            </h2>

            <p>
              Before you start learning {selectedLanguage}
            </p>
          </div>

        </div>

        <div className="remember-content">

          {selectedReminders.map((item, index) => (

            <div
              className="remember-item"
              key={index}
            >

              <span className="remember-check">
                ✓
              </span>

              <p>{item}</p>

            </div>

          ))}

        </div>

        <button
          className="remember-done"
          onClick={onClose}
        >
          Got it 👍
        </button>

      </div>

    </div>

  );
}

export default ThingsToRemember;