const questions = [
  { q: "Что делает кот, когда ты приходишь домой?", a: ["Притворяется спящим", "Бежит к двери", "Ложится на твои вещи"] },
  { q: "Кот услышал шорох. Его реакция?", a: ["Прячется", "Идёт проверять", "Мяукает громко"] },
  { q: "Куда он чаще всего смотрит?", a: ["В окно", "На потолок", "Тебе в душу"] },
  { q: "Ты принёс игрушку. Он…", a: ["Игнорирует", "Играет 5 секунд", "Рвёт как хищник"] },
  { q: "Как он спит ночью?", a: ["Спокойно", "Бегает по квартире", "Спит на тебе"] },
  { q: "Как он реагирует на гостей?", a: ["Прячется", "Проверяет каждого", "Ищет вкусняшки"] },
  { q: "Ты разговариваешь с котом. Он…", a: ["Смотрит в сторону", "Отвечает", "Начинает урчать"] }
];

const results = [
  "😺 IQ: 180 — Гений которазума",
  "🐱 IQ: 142 — Котофей-аналитик",
  "😼 IQ: 100 — Хитрый мурчальник",
  "😹 IQ: 68 — Кот-пофигист",
  "😻 IQ: 45 — Мимимишный философ",
  "🐾 IQ: 20 — Барсик в коме... но в душе стратег"
];

let current = 0;
let answers = [];

function showQuestion() {
  if (current >= questions.length) return showResult();
  const q = questions[current];
  document.getElementById("question").innerText = q.q;
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";
  q.a.forEach(answer => {
    const btn = document.createElement("button");
    btn.innerText = answer;
    btn.onclick = () => {
      answers.push(answer);
      current++;
      showQuestion();
    };
    answersDiv.appendChild(btn);
  });
}

function showResult() {
  const result = results[Math.floor(Math.random() * results.length)];
  document.querySelector(".container").innerHTML = `
    <h2>🎉 Результат:</h2>
    <p class="result">${result}</p>
    <button class="retry-btn" onclick="restartTest()">Пройти заново</button>
    <button onclick="Telegram.WebApp.close()">Закрыть</button>
  `;
}

function restartTest() {
  current = 0;
  answers = [];
  document.querySelector(".container").innerHTML = \`
    <h1>🐾 Тест: IQ твоего кота</h1>
    <div id="question" class="question-box"></div>
    <div id="answers" class="answers"></div>
  \`;
  showQuestion();
}

Telegram.WebApp.ready();
Telegram.WebApp.expand();
showQuestion();
