import React, { useState } from 'react';

const questions = [
  {
    question: "📱 באיזו תדירות את/ה משתמש/ת בכלי AI בעבודה היומיומית שלך?",
    options: [
      "כמעט תמיד (יותר מפעם ביום)",
      "לעיתים קרובות (מספר פעמים בשבוע)",
      "לעיתים רחוקות (פעם בשבוע או פחות)",
      "כמעט אף פעם"
    ]
  },
  {
    question: "💡 עד כמה את/ה מרגיש/ה בנוח להשתמש בכלי AI כדי לשפר את הביצועים שלך?",
    options: ["מאוד בנוח", "די בנוח", "קצת לא בנוח", "מאוד לא בנוח"]
  },
  {
    question: "🧠 באיזו מידה את/ה רואה את כלי ה-AI כחלק חיוני מהתפקיד שלך?",
    options: ["בלתי ניתן להחלפה", "עוזר משמעותית", "שימושי לפעמים", "לא משמעותי"]
  }
];

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (index) => {
    setScore(score + (4 - index));
    if (currentQuestion + 1 === questions.length) {
      setFinished(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div>
      {finished ? (
        <div>
          <h1>✨ סיכום</h1>
          <p>רמת השימוש והאימוץ שלך ב-AI היא: {Math.round((score / (questions.length * 4)) * 100)}%</p>
        </div>
      ) : (
        <div>
          <h1>{questions[currentQuestion].question}</h1>
          {questions[currentQuestion].options.map((option, index) => (
            <button key={index} onClick={() => handleAnswer(index)}>
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
