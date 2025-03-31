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

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const questionDiv = document.getElementById("root");
  questionDiv.innerHTML = `
    <h1>${questions[currentQuestion].question}</h1>
    ${questions[currentQuestion].options
      .map(
        (option, index) =>
          `<button onclick="handleAnswer(${index})">${option}</button>`
      )
      .join("")}
  `;
}

function handleAnswer(index) {
  score += 4 - index;

  if (currentQuestion + 1 === questions.length) {
    document.getElementById("root").innerHTML = `
      <h1>✨ סיכום</h1>
      <p>רמת השימוש והאימוץ שלך ב-AI היא: ${Math.round(
        (score / (questions.length * 4)) * 100
      )}%</p>
    `;
  } else {
    currentQuestion++;
    showQuestion();
  }
}

showQuestion();
