const QUESTION_BANK = [
  {
    category: "Biodiversidad",
    visual: "🌿🦥🦋",
    activity: "Elegí la palabra correcta",
    question: "¿Cómo se llama el conjunto de diferentes especies de flora y fauna que habitan en un lugar?",
    options: ["Biodiversidad", "Temperatura", "Energía", "Población humana"],
    correct: "Biodiversidad",
    explanation: "Biodiversidad es la variedad de seres vivos, como plantas, animales y otros organismos, que existen en un lugar."
  },
  {
    category: "Costa Rica",
    visual: "🇨🇷🌎",
    activity: "Reto de comprensión",
    question: "¿Qué ayuda a que Costa Rica tenga una gran biodiversidad?",
    options: [
      "Su ubicación geográfica y variedad de relieves y climas",
      "Tener un solo tipo de clima",
      "No tener montañas",
      "Estar cubierta únicamente por ciudades"
    ],
    correct: "Su ubicación geográfica y variedad de relieves y climas",
    explanation: "La ubicación de Costa Rica, junto con sus montañas, llanuras y distintos climas, crea muchos hábitats y ecosistemas."
  },
  {
    category: "Biodiversidad",
    visual: "⛰️🌧️🌴",
    activity: "Pensá en la causa",
    question: "¿Por qué un relieve variado favorece la biodiversidad?",
    options: [
      "Porque permite diferentes climas, hábitats y ecosistemas",
      "Porque todos los animales viven en la misma montaña",
      "Porque elimina la lluvia",
      "Porque hace que todos los lugares tengan la misma temperatura"
    ],
    correct: "Porque permite diferentes climas, hábitats y ecosistemas",
    explanation: "Montañas, valles y llanuras pueden tener condiciones distintas. Eso permite que aparezcan muchos hábitats y especies."
  },
  {
    category: "Adaptaciones",
    visual: "🐟💧",
    activity: "¿Qué usa para respirar?",
    question: "¿Qué adaptación respiratoria utiliza un pez?",
    options: ["Branquias", "Pulmones", "Tráqueas", "Solo la piel"],
    correct: "Branquias",
    explanation: "Los peces usan branquias para obtener oxígeno del agua."
  },
  {
    category: "Adaptaciones",
    visual: "🐬🌊",
    activity: "¿Qué usa para respirar?",
    question: "El delfín vive en el agua, pero es mamífero. ¿Con qué respira?",
    options: ["Pulmones", "Branquias", "Tráqueas", "Raíces"],
    correct: "Pulmones",
    explanation: "El delfín es un mamífero y respira aire con pulmones. Por eso debe subir a la superficie."
  },
  {
    category: "Adaptaciones",
    visual: "🐸💦",
    activity: "Seleccioná la mejor opción",
    question: "Una rana puede intercambiar gases también a través de…",
    options: ["La piel", "Las escamas", "El pelo", "Las plumas"],
    correct: "La piel",
    explanation: "Muchas ranas pueden respirar parcialmente a través de su piel húmeda, además de utilizar pulmones."
  },
  {
    category: "Adaptaciones",
    visual: "🦋🌼",
    activity: "Reto de animales",
    question: "¿Qué sistema respiratorio utiliza una mariposa?",
    options: ["Tráqueas", "Pulmones", "Branquias", "Piel y pulmones"],
    correct: "Tráqueas",
    explanation: "Los insectos, como las mariposas, respiran por un sistema de tubos llamado tráqueas."
  },
  {
    category: "Adaptaciones",
    visual: "🐕💨",
    activity: "¿Qué usa para respirar?",
    question: "¿Con qué respira un perro?",
    options: ["Pulmones", "Branquias", "Tráqueas", "Aletas"],
    correct: "Pulmones",
    explanation: "Los perros son mamíferos terrestres y respiran mediante pulmones."
  },
  {
    category: "Animales",
    visual: "🐄🥛",
    activity: "Adiviná el grupo",
    question: "Nacen del vientre de su madre y, al nacer, se alimentan con leche materna. ¿Qué grupo es?",
    options: ["Mamíferos", "Peces", "Insectos", "Reptiles"],
    correct: "Mamíferos",
    explanation: "Una característica de los mamíferos es que las crías se alimentan con leche producida por la madre."
  },
  {
    category: "Energía",
    visual: "🍎🌳",
    activity: "Identificá la energía",
    question: "Una manzana está quieta en lo alto de un árbol. ¿Qué tipo de energía tiene por su posición?",
    options: ["Energía potencial", "Energía eólica", "Energía sonora", "Energía luminosa"],
    correct: "Energía potencial",
    explanation: "La energía potencial es energía almacenada debido a la posición de un objeto, por ejemplo una manzana en lo alto de un árbol."
  },
  {
    category: "Energía",
    visual: "🌬️⚡",
    activity: "Identificá la energía",
    question: "¿Cómo se llama la energía que se obtiene del viento?",
    options: ["Energía eólica", "Energía química", "Energía potencial", "Energía nuclear"],
    correct: "Energía eólica",
    explanation: "La energía eólica aprovecha el movimiento del aire, es decir, el viento."
  },
  {
    category: "Energía",
    visual: "🎢⬇️",
    activity: "Transformación de energía",
    question: "En una montaña rusa, cuando el carrito baja rápidamente desde el punto más alto, la energía potencial se transforma principalmente en…",
    options: ["Energía cinética", "Energía solar", "Energía química", "Energía luminosa"],
    correct: "Energía cinética",
    explanation: "Al descender, disminuye la energía potencial y aumenta la energía cinética, que es la energía del movimiento."
  },
  {
    category: "Energía",
    visual: "⚽⬇️",
    activity: "Aplicá el concepto",
    question: "Una pelota cae desde una mesa. Mientras cae, ¿qué energía aumenta?",
    options: ["Energía cinética", "Energía potencial", "Energía almacenada", "Energía eólica"],
    correct: "Energía cinética",
    explanation: "Mientras la pelota cae y aumenta su velocidad, aumenta su energía cinética."
  },
  {
    category: "Ecosistemas",
    visual: "🦜🦜🦜",
    activity: "Organización de los seres vivos",
    question: "Un grupo de individuos de la misma especie que vive en una misma área se llama…",
    options: ["Población", "Individuo", "Hábitat", "Nicho"],
    correct: "Población",
    explanation: "Una población está formada por individuos de la misma especie que viven en una misma área."
  },
  {
    category: "Ecosistemas",
    visual: "🦥",
    activity: "Organización de los seres vivos",
    question: "Un solo ser vivo u organismo único se llama…",
    options: ["Individuo", "Población", "Nicho", "Ecosistema"],
    correct: "Individuo",
    explanation: "Un individuo es un solo organismo, por ejemplo un perezoso específico."
  },
  {
    category: "Ecosistemas",
    visual: "🏞️🐒",
    activity: "Completá la idea",
    question: "El lugar físico donde vive y se desarrolla un organismo es su…",
    options: ["Hábitat", "Nicho", "Población", "Energía"],
    correct: "Hábitat",
    explanation: "El hábitat es el lugar físico donde un ser vivo encuentra las condiciones necesarias para vivir."
  },
  {
    category: "Ecosistemas",
    visual: "🐝🌸",
    activity: "Completá la idea",
    question: "La función o el “papel” que cumple un ser vivo dentro de su hábitat se llama…",
    options: ["Nicho", "Hábitat", "Individuo", "Relieve"],
    correct: "Nicho",
    explanation: "El nicho describe la función de un organismo en el ecosistema: cómo vive, qué come y cómo se relaciona con otros seres vivos."
  },
  {
    category: "Amenazas",
    visual: "🔥🌲",
    activity: "Detectá la amenaza",
    question: "Quemar vegetación seca para limpiar un terreno puede provocar…",
    options: ["Incendios forestales", "Más biodiversidad", "Más hábitats", "Más lluvia"],
    correct: "Incendios forestales",
    explanation: "El fuego puede salirse de control, destruir hábitats y causar incendios forestales que amenazan la biodiversidad."
  },
  {
    category: "Amenazas",
    visual: "🐒🚫💰",
    activity: "Detectá la amenaza",
    question: "Capturar monos y perezosos para venderlos como mascotas fuera del país es un ejemplo de…",
    options: ["Comercio ilegal de fauna silvestre", "Reforestación", "Ecoturismo", "Protección de especies"],
    correct: "Comercio ilegal de fauna silvestre",
    explanation: "Capturar y vender animales silvestres sin autorización es comercio ilegal y reduce las poblaciones naturales."
  },
  {
    category: "Amenazas",
    visual: "🪓🌳",
    activity: "Verdadero o falso",
    question: "La deforestación puede reducir la biodiversidad porque destruye hábitats.",
    options: ["Verdadero", "Falso"],
    correct: "Verdadero",
    explanation: "Es verdadero. Al eliminar bosques, muchos seres vivos pierden alimento, refugio y lugares para reproducirse."
  },
  {
    category: "Costa Rica",
    visual: "🌊⛰️🌴",
    activity: "Elegí tres factores en una sola respuesta",
    question: "¿Cuál grupo contiene tres aspectos naturales que ayudan a explicar la biodiversidad de Costa Rica?",
    options: [
      "Ubicación geográfica, relieve y clima",
      "Carreteras, edificios y semáforos",
      "Internet, teléfonos y televisión",
      "Fábricas, puertos y centros comerciales"
    ],
    correct: "Ubicación geográfica, relieve y clima",
    explanation: "La ubicación geográfica, el relieve y el clima crean distintas condiciones naturales y favorecen muchos ecosistemas."
  },
  {
    category: "Biodiversidad",
    visual: "💊🌱🍍",
    activity: "Beneficios de la biodiversidad",
    question: "¿Cuál es un beneficio que obtenemos de la biodiversidad?",
    options: [
      "Alimentos y sustancias para medicinas",
      "Más contaminación",
      "Destrucción de hábitats",
      "Incendios forestales"
    ],
    correct: "Alimentos y sustancias para medicinas",
    explanation: "La biodiversidad nos brinda alimentos, materias primas y especies que pueden aportar sustancias útiles para medicinas."
  },
  {
    category: "Biodiversidad",
    visual: "🌳🦜📷",
    activity: "Beneficios de la biodiversidad",
    question: "¿Cuál actividad puede beneficiarse de conservar bosques y animales silvestres?",
    options: ["Ecoturismo", "Cacería ilegal", "Deforestación", "Contaminación de ríos"],
    correct: "Ecoturismo",
    explanation: "El ecoturismo depende de paisajes y seres vivos bien conservados, y puede generar beneficios económicos sin destruirlos."
  },
  {
    category: "Ecosistemas",
    visual: "🌿☀️💧🦎",
    activity: "Seres vivos y componentes no vivos",
    question: "¿Cuál opción incluye un componente vivo y uno no vivo de un ecosistema?",
    options: [
      "Lagartija y agua",
      "Dos lagartijas",
      "Agua y luz solar",
      "Dos piedras"
    ],
    correct: "Lagartija y agua",
    explanation: "La lagartija es un ser vivo y el agua es un componente no vivo del ecosistema."
  },
  {
    category: "Ecosistemas",
    visual: "🌼🐝",
    activity: "Relaciones en la naturaleza",
    question: "Una abeja obtiene alimento de una flor y, al mismo tiempo, ayuda a polinizarla. ¿Qué muestra este ejemplo?",
    options: [
      "Una interacción entre seres vivos",
      "Una transformación de energía eólica",
      "Un incendio forestal",
      "Una población de una sola especie"
    ],
    correct: "Una interacción entre seres vivos",
    explanation: "La abeja y la flor son seres vivos que se relacionan: la abeja obtiene alimento y la flor recibe ayuda para su polinización."
  }
];

const state = {
  questions: [],
  currentIndex: 0,
  score: 0,
  streak: 0,
  correctCount: 0,
  answered: false,
  voiceEnabled: true,
  wrongAnswers: []
};

const els = {
  startScreen: document.getElementById("start-screen"),
  gameScreen: document.getElementById("game-screen"),
  endScreen: document.getElementById("end-screen"),
  startBtn: document.getElementById("start-btn"),
  restartBtn: document.getElementById("restart-btn"),
  nextBtn: document.getElementById("next-btn"),
  questionCount: document.getElementById("question-count"),
  score: document.getElementById("score"),
  streak: document.getElementById("streak"),
  progressLabel: document.getElementById("progress-label"),
  progressBar: document.getElementById("progress-bar"),
  categoryBadge: document.getElementById("category-badge"),
  questionVisual: document.getElementById("question-visual"),
  activityLabel: document.getElementById("activity-label"),
  questionText: document.getElementById("question-text"),
  answers: document.getElementById("answers"),
  feedback: document.getElementById("feedback"),
  feedbackIcon: document.getElementById("feedback-icon"),
  feedbackTitle: document.getElementById("feedback-title"),
  feedbackText: document.getElementById("feedback-text"),
  voiceToggle: document.getElementById("voice-toggle"),
  finalScore: document.getElementById("final-score"),
  finalCorrect: document.getElementById("final-correct"),
  resultMessage: document.getElementById("result-message"),
  reviewBox: document.getElementById("review-box"),
  confetti: document.getElementById("confetti")
};

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function prepareQuestions() {
  const wanted = els.questionCount.value === "all"
    ? QUESTION_BANK.length
    : Number(els.questionCount.value);

  state.questions = shuffle(QUESTION_BANK)
    .slice(0, wanted)
    .map(q => ({ ...q, shuffledOptions: shuffle(q.options) }));
}

function showScreen(target) {
  [els.startScreen, els.gameScreen, els.endScreen].forEach(screen => {
    screen.classList.toggle("active", screen === target);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startGame() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }

  prepareQuestions();
  state.currentIndex = 0;
  state.score = 0;
  state.streak = 0;
  state.correctCount = 0;
  state.answered = false;
  state.wrongAnswers = [];

  updateStats();
  showScreen(els.gameScreen);
  renderQuestion();
}

function renderQuestion() {
  state.answered = false;
  els.feedback.className = "feedback hidden";
  els.nextBtn.classList.add("hidden");
  els.answers.innerHTML = "";

  const q = state.questions[state.currentIndex];
  const currentNumber = state.currentIndex + 1;
  const total = state.questions.length;

  els.progressLabel.textContent = `Reto ${currentNumber} de ${total}`;
  els.progressBar.style.width = `${((state.currentIndex) / total) * 100}%`;
  els.categoryBadge.textContent = q.category;
  els.questionVisual.textContent = q.visual;
  els.activityLabel.textContent = q.activity;
  els.questionText.textContent = q.question;

  q.shuffledOptions.forEach(option => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.type = "button";
    btn.textContent = option;
    btn.addEventListener("click", () => answerQuestion(option, btn));
    els.answers.appendChild(btn);
  });
}

function answerQuestion(selected, selectedButton) {
  if (state.answered) return;
  state.answered = true;

  const q = state.questions[state.currentIndex];
  const isCorrect = selected === q.correct;
  const allButtons = [...els.answers.querySelectorAll(".answer-btn")];

  allButtons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === q.correct) btn.classList.add("correct");
  });

  if (isCorrect) {
    state.streak += 1;
    state.correctCount += 1;
    const bonus = Math.min(state.streak - 1, 5) * 2;
    state.score += 10 + bonus;

    els.feedback.className = "feedback correct";
    els.feedbackIcon.textContent = "✅";
    els.feedbackTitle.textContent = "¡Correcto!";
    els.feedbackText.textContent = state.streak >= 3
      ? `¡Llevás ${state.streak} respuestas correctas seguidas!`
      : "Muy bien. Seguimos con el próximo reto.";
    playTone("correct");

    if (state.streak % 4 === 0) createConfetti(24);
  } else {
    state.streak = 0;
    selectedButton.classList.add("wrong");

    state.wrongAnswers.push({
      question: q.question,
      correct: q.correct,
      explanation: q.explanation
    });

    els.feedback.className = "feedback wrong";
    els.feedbackIcon.textContent = "💡";
    els.feedbackTitle.textContent = `La respuesta correcta es: ${q.correct}`;
    els.feedbackText.textContent = q.explanation;
    playTone("wrong");
    speakExplanation(q);
  }

  updateStats();
  els.nextBtn.textContent =
    state.currentIndex === state.questions.length - 1
      ? "Ver resultado 🏆"
      : "Siguiente reto ➜";
  els.nextBtn.classList.remove("hidden");
}

function updateStats() {
  els.score.textContent = state.score;
  els.streak.textContent = `${state.streak} 🔥`;
}

function nextQuestion() {
  if (!state.answered) return;

  if (state.currentIndex < state.questions.length - 1) {
    state.currentIndex += 1;
    renderQuestion();
  } else {
    finishGame();
  }
}

function finishGame() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }

  const total = state.questions.length;
  const percentage = Math.round((state.correctCount / total) * 100);

  els.progressBar.style.width = "100%";
  els.finalScore.textContent = state.score;
  els.finalCorrect.textContent = `${state.correctCount}/${total}`;

  if (percentage >= 90) {
    els.resultMessage.textContent = "Excelente dominio de los temas. Podés repetir la misión para confirmar que los manejás aunque cambie el orden.";
    createConfetti(60);
  } else if (percentage >= 70) {
    els.resultMessage.textContent = "Buen resultado. Repetí la misión y prestá atención a las preguntas que aparecen en el repaso.";
    createConfetti(35);
  } else {
    els.resultMessage.textContent = "Esta ronda sirve para detectar qué temas necesitan otra práctica. Revisá las respuestas y jugá de nuevo.";
  }

  renderReview();
  showScreen(els.endScreen);
}

function renderReview() {
  if (state.wrongAnswers.length === 0) {
    els.reviewBox.innerHTML = `
      <h3 class="review-title">Repaso</h3>
      <div class="review-item">🎯 No tuviste respuestas incorrectas en esta ronda.</div>
    `;
    return;
  }

  const items = state.wrongAnswers
    .map(item => `
      <div class="review-item">
        <strong>Pregunta:</strong> ${escapeHtml(item.question)}<br>
        <strong>Respuesta:</strong> ${escapeHtml(item.correct)}<br>
        <span>${escapeHtml(item.explanation)}</span>
      </div>
    `)
    .join("");

  els.reviewBox.innerHTML = `
    <h3 class="review-title">📚 Repasá estos temas</h3>
    ${items}
  `;
}

function speakExplanation(q) {
  if (!state.voiceEnabled || !("speechSynthesis" in window)) return;

  window.speechSynthesis.cancel();

  const text = `Esa respuesta no es correcta. La respuesta correcta es ${q.correct}. ${q.explanation}`;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "es-CR";
  utterance.rate = 0.88;
  utterance.pitch = 1.08;
  utterance.volume = 1;

  const voices = window.speechSynthesis.getVoices();
  const preferred =
    voices.find(v => v.lang.toLowerCase() === "es-cr") ||
    voices.find(v => v.lang.toLowerCase().startsWith("es-")) ||
    voices.find(v => v.lang.toLowerCase().startsWith("es"));

  if (preferred) utterance.voice = preferred;

  window.speechSynthesis.speak(utterance);
}

function toggleVoice() {
  state.voiceEnabled = !state.voiceEnabled;
  els.voiceToggle.setAttribute("aria-pressed", String(state.voiceEnabled));
  els.voiceToggle.textContent = state.voiceEnabled ? "🔊 Voz" : "🔇 Voz";

  if (!state.voiceEnabled && "speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}

function playTone(type) {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    const ctx = new AudioContext();
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();

    oscillator.connect(gain);
    gain.connect(ctx.destination);

    oscillator.type = "sine";
    oscillator.frequency.value = type === "correct" ? 620 : 210;
    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.18);

    oscillator.start();
    oscillator.stop(ctx.currentTime + 0.2);
  } catch (_) {
    // El juego sigue funcionando aunque el navegador bloquee efectos de sonido.
  }
}

function createConfetti(count) {
  const symbols = ["#14b8a6", "#f59e0b", "#84cc16", "#38bdf8", "#a78bfa"];

  for (let i = 0; i < count; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = symbols[Math.floor(Math.random() * symbols.length)];
    piece.style.setProperty("--drift", `${Math.random() * 180 - 90}px`);
    piece.style.animationDelay = `${Math.random() * 0.35}s`;
    els.confetti.appendChild(piece);

    setTimeout(() => piece.remove(), 2000);
  }
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

els.startBtn.addEventListener("click", startGame);
els.restartBtn.addEventListener("click", startGame);
els.nextBtn.addEventListener("click", nextQuestion);
els.voiceToggle.addEventListener("click", toggleVoice);

// Algunos navegadores cargan las voces de forma asíncrona.
if ("speechSynthesis" in window) {
  window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
}
