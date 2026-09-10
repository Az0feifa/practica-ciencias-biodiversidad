const ACTIVITIES = [
  {
    category: "Elementos del texto", visual: "🌙📖", type: "single",
    activity: "Identificá el concepto",
    question: "Es el lugar y el momento en que ocurren los hechos del texto. ¿Cómo se llama?",
    options: ["Ambiente", "Trama textual", "Conflicto", "Personaje"],
    correct: "Ambiente",
    explanation: "El ambiente indica dónde y cuándo ocurren los hechos de una historia."
  },
  {
    category: "Elementos del texto", visual: "🧩📚", type: "single",
    activity: "Identificá el concepto",
    question: "Es el conjunto de hechos que suceden a lo largo del texto. ¿Cómo se llama?",
    options: ["Trama textual", "Ambiente", "Moraleja", "Diccionario"],
    correct: "Trama textual",
    explanation: "La trama textual es la secuencia de acontecimientos que forman la historia."
  },
  {
    category: "Elementos del texto", visual: "➡️💥", type: "single",
    activity: "Causa y efecto",
    question: "¿Qué relación explica cómo una acción provoca una consecuencia dentro del texto?",
    options: ["Relación causa y efecto", "Ambiente temporal", "Descripción física", "Trama final"],
    correct: "Relación causa y efecto",
    explanation: "La causa es lo que ocurre primero y el efecto es la consecuencia que produce."
  },
  {
    category: "Elementos del texto", visual: "⚠️👧", type: "single",
    activity: "Identificá el concepto",
    question: "Es el problema o la situación principal que enfrentan los personajes. ¿Cómo se llama?",
    options: ["Conflicto o situación", "Ambiente", "Inicio", "Definición"],
    correct: "Conflicto o situación",
    explanation: "El conflicto es el problema o dificultad principal que los personajes deben enfrentar."
  },
  {
    category: "Personajes", visual: "🙂💭", type: "single",
    activity: "Identificá el concepto",
    question: "Son los rasgos físicos, emocionales y de personalidad que describen a los personajes. ¿Qué son?",
    options: ["Características de los personajes", "Ambiente", "Trama textual", "Causa y efecto"],
    correct: "Características de los personajes",
    explanation: "Las características permiten saber cómo es un personaje por fuera, cómo se siente y cómo actúa."
  },
  {
    category: "Vocabulario", visual: "⛈️", type: "single",
    activity: "Definición en contexto",
    question: "El meteorólogo anunció que se aproxima una fuerte TORMENTA. ¿Cuál definición corresponde a la palabra destacada?",
    options: [
      "Alteración atmosférica acompañada de lluvia, viento o rayos",
      "Día completamente despejado y sin viento",
      "Movimiento suave de las hojas",
      "Lugar donde se observan estrellas"
    ],
    correct: "Alteración atmosférica acompañada de lluvia, viento o rayos",
    explanation: "Una tormenta es una alteración atmosférica que puede incluir lluvia fuerte, viento, truenos o rayos."
  },
  {
    category: "Vocabulario", visual: "🥀", type: "single",
    activity: "Significado de una palabra",
    question: "La pequeña planta estaba MARCHITA porque sus hojas se encontraban secas y caídas. ¿Qué significa marchita?",
    options: ["Seca y sin vitalidad", "Recién sembrada", "Llena de flores", "Muy alta y fuerte"],
    correct: "Seca y sin vitalidad",
    explanation: "Marchita significa que una planta ha perdido frescura o vitalidad y se ve seca o caída."
  },
  {
    category: "Diccionario", visual: "🏞️📖", type: "single",
    activity: "Elegí la definición correcta",
    question: "La familia contempló un hermoso paisaje formado por montañas, árboles y un río. ¿Cuál definición de PAISAJE debe seleccionarse en el diccionario?",
    options: [
      "Extensión de terreno que puede observarse desde un lugar",
      "Objeto que sirve para medir distancias",
      "Sonido producido por varios instrumentos",
      "Persona que viaja por el mar"
    ],
    correct: "Extensión de terreno que puede observarse desde un lugar",
    explanation: "En esa oración, paisaje se refiere a la extensión de terreno que las personas pueden observar."
  },
  {
    category: "Diccionario", visual: "🔤📘", type: "single",
    activity: "Buscá por orden alfabético",
    question: "Alonso necesita buscar en el diccionario la palabra NAVEGANTE. ¿En cuál sección debe iniciar la búsqueda?",
    options: ["Letra N", "Letra A", "Letra G", "Letra V"],
    correct: "Letra N",
    explanation: "Las palabras se buscan en el diccionario por su primera letra. Navegante comienza con N."
  },
  {
    category: "Diccionario", visual: "🔎📖", type: "single",
    activity: "Usá el contexto",
    question: "Sofía encontró tres significados diferentes para una palabra en el diccionario. ¿Qué debe hacer para elegir el significado correcto?",
    options: [
      "Comparar las definiciones con el contexto de la oración",
      "Elegir siempre la primera definición",
      "Escoger la definición más corta",
      "Usar cualquier significado porque todos sirven"
    ],
    correct: "Comparar las definiciones con el contexto de la oración",
    explanation: "El contexto de la oración ayuda a decidir cuál significado de una palabra es el que realmente corresponde."
  },
  {
    category: "Diccionario", visual: "🔬", type: "single",
    activity: "Definición en contexto",
    question: "La científica observó una célula utilizando un MICROSCOPIO. ¿Cuál definición corresponde a microscopio?",
    options: [
      "Instrumento que permite observar objetos muy pequeños",
      "Instrumento para medir la temperatura",
      "Objeto para escribir en papel",
      "Aparato para escuchar música"
    ],
    correct: "Instrumento que permite observar objetos muy pequeños",
    explanation: "El microscopio permite ampliar la imagen de objetos que son demasiado pequeños para verlos bien a simple vista."
  },
  {
    category: "Diccionario", visual: "🪶✒️", type: "single",
    activity: "Palabras con varios significados",
    question: "Mariela encontró dos definiciones de PLUMA:\n1. Estructura que cubre el cuerpo de las aves.\n2. Instrumento utilizado para escribir.\nSi PLUMA se usa como instrumento para escribir, ¿cuál definición corresponde?",
    options: ["La segunda definición", "La primera definición", "Las dos al mismo tiempo", "Ninguna definición"],
    correct: "La segunda definición",
    explanation: "Cuando pluma se usa para nombrar un instrumento de escritura, corresponde la segunda definición."
  },
  {
    category: "Comprensión", visual: "🐦❤️", type: "single",
    activity: "Inicio, desarrollo y final",
    question: "Cada tarde Julián llevaba alimento a las aves que visitaban su patio. Un día encontró un pajarito herido y llamó a un centro de rescate. Días después el ave se recuperó y fue liberada.\n\n¿Cuál acontecimiento corresponde al final?",
    options: [
      "El ave se recuperó y fue liberada",
      "Julián llevaba alimento a las aves",
      "Julián encontró un pajarito herido",
      "Julián llamó al centro de rescate"
    ],
    correct: "El ave se recuperó y fue liberada",
    explanation: "El final es el último acontecimiento: después de recuperarse, el ave fue liberada."
  },
  {
    category: "Fábula", visual: "🐦🌧️", type: "single",
    activity: "Reconocé una fábula",
    question: "El cuervo guardó todas las semillas que encontró y se negó a compartirlas. Al llegar la lluvia, el agua entró en su escondite y arrastró las semillas. Los demás pájaros compartieron con él parte de su alimento.\n\n¿Por qué este texto se puede calificar como fábula?",
    options: [
      "Presenta animales que actúan como personas y deja una moraleja",
      "Cuenta solamente datos científicos sobre aves",
      "Explica cómo buscar palabras en el diccionario",
      "Describe únicamente un paisaje"
    ],
    correct: "Presenta animales que actúan como personas y deja una moraleja",
    explanation: "Las fábulas suelen presentar animales con comportamientos humanos y dejan una enseñanza o moraleja."
  },
  {
    category: "Comprensión", visual: "🪴⚠️", type: "single",
    activity: "Identificá el conflicto",
    question: "Natalia llegó a la escuela con una pequeña maceta para participar en la feria ambiental. Al entrar al aula descubrió que una rama de la planta se había quebrado; la sostuvo con un palito y al final pudo presentar su proyecto.\n\n¿Cuál es el conflicto de la historia?",
    options: [
      "La rama de la planta se quebró",
      "Natalia llegó a la escuela",
      "Natalia presentó su proyecto",
      "La feria ambiental terminó"
    ],
    correct: "La rama de la planta se quebró",
    explanation: "El conflicto es el problema que Natalia debe resolver: la rama de su planta se quebró."
  },
  {
    category: "Fábula", visual: "🐿️🦫", type: "single",
    activity: "Encontrá la enseñanza",
    question: "Una ardilla se burlaba de un castor porque tardaba mucho en construir su refugio. Cuando comenzó una tormenta, la ardilla no encontró dónde protegerse, mientras el castor permaneció seguro dentro de su casa.\n\n¿Cuál enseñanza se obtiene?",
    options: [
      "El trabajo constante produce buenos resultados",
      "Es mejor hacer todo rápidamente y sin cuidado",
      "No vale la pena prepararse con tiempo",
      "Burlarse de otros ayuda a resolver problemas"
    ],
    correct: "El trabajo constante produce buenos resultados",
    explanation: "El castor trabajó con constancia y eso le permitió tener un refugio seguro cuando llegó la tormenta."
  },
  {
    category: "Expresiones", visual: "☁️🙌", type: "single",
    activity: "Interpretá una expresión",
    question: "Cuando recibió la noticia, Daniel sintió que TOCABA EL CIELO CON LAS MANOS. ¿Qué significa esta expresión?",
    options: [
      "Que estaba muy feliz por la noticia",
      "Que subió a una montaña",
      "Que estaba tocando una nube de verdad",
      "Que quería medir la altura del cielo"
    ],
    correct: "Que estaba muy feliz por la noticia",
    explanation: "“Tocar el cielo con las manos” es una expresión figurada que significa sentirse extremadamente feliz o satisfecho."
  },
  {
    category: "Comprensión", visual: "🌱💧🌼", type: "single",
    activity: "Inicio, desarrollo y final",
    question: "Primero, Óscar sembró varias semillas en el jardín. Después las regó diariamente y retiró las hierbas que crecían cerca. Finalmente aparecieron pequeñas flores amarillas.\n\n¿Cuál acontecimiento pertenece al desarrollo?",
    options: [
      "Óscar regó y cuidó las semillas",
      "Óscar sembró las semillas",
      "Aparecieron flores amarillas",
      "Óscar compró una maceta"
    ],
    correct: "Óscar regó y cuidó las semillas",
    explanation: "El desarrollo contiene las acciones que ocurren entre el inicio y el final; aquí, Óscar riega y cuida las semillas."
  },
  {
    category: "Vocabulario", visual: "🤝", type: "single",
    activity: "Relacioná palabra y significado",
    question: "La señora fue muy GENEROSA y compartió sus alimentos. ¿Qué significa generosa?",
    options: [
      "Que comparte lo que tiene con otras personas",
      "Que posee bastante espacio",
      "Que no es verdadera",
      "Que puede provocar una caída"
    ],
    correct: "Que comparte lo que tiene con otras personas",
    explanation: "Una persona generosa comparte o da a otras personas de manera desinteresada."
  },
  {
    category: "Vocabulario", visual: "🏠↔️", type: "single",
    activity: "Relacioná palabra y significado",
    question: "La habitación era AMPLIA y cabían muchas personas. ¿Qué significa amplia?",
    options: [
      "Que posee bastante espacio",
      "Que puede provocar una caída",
      "Que no es verdadera",
      "Que actúa con cuidado para evitar peligros"
    ],
    correct: "Que posee bastante espacio",
    explanation: "Amplia significa que tiene bastante espacio o que es espaciosa."
  },
  {
    category: "Vocabulario", visual: "📰❌", type: "single",
    activity: "Relacioná palabra y significado",
    question: "La noticia era FALSA y no correspondía con la realidad. ¿Qué significa falsa?",
    options: [
      "Que no es verdadera",
      "Que posee bastante espacio",
      "Que comparte lo que tiene",
      "Que actúa con mucho cuidado"
    ],
    correct: "Que no es verdadera",
    explanation: "Falsa significa que algo no es verdadero o no corresponde con la realidad."
  },
  {
    category: "Vocabulario", visual: "🪜👷", type: "single",
    activity: "Relacioná palabra y significado",
    question: "El trabajador fue PRUDENTE y revisó la escalera antes de subir. ¿Qué significa prudente?",
    options: [
      "Que actúa con cuidado para evitar peligros",
      "Que no es verdadera",
      "Que comparte lo que tiene",
      "Que posee bastante espacio"
    ],
    correct: "Que actúa con cuidado para evitar peligros",
    explanation: "Ser prudente significa actuar con cuidado para prevenir riesgos o peligros."
  },
  {
    category: "Vocabulario", visual: "🌧️🛣️", type: "single",
    activity: "Relacioná palabra y significado",
    question: "El camino estaba RESBALADIZO después de la lluvia. ¿Qué significa resbaladizo?",
    options: [
      "Que puede provocar una caída",
      "Que posee bastante espacio",
      "Que no es verdadera",
      "Que comparte lo que tiene"
    ],
    correct: "Que puede provocar una caída",
    explanation: "Un lugar resbaladizo tiene una superficie donde es fácil deslizarse y caer."
  },
  {
    category: "Ambiente", visual: "🌙🔥🦗", type: "single",
    activity: "Identificá el ambiente temporal",
    question: "La luna iluminaba el camino y se escuchaba el canto de los grillos. Los campistas permanecían alrededor de una fogata mientras contaban historias.\n\n¿Cuál es el ambiente temporal de la historia?",
    options: ["La noche", "La mañana", "El mediodía", "La tarde"],
    correct: "La noche",
    explanation: "Las pistas 'la luna iluminaba' y el canto de los grillos indican que los hechos ocurren de noche."
  },
  {
    category: "Comprensión", visual: "🫔👨‍👩‍👧‍👦", type: "single",
    activity: "Identificá el elemento del texto",
    question: "Todos los años la familia de Carmen preparaba tamales durante diciembre. Las personas adultas cocinaban y los niños ayudaban a limpiar las hojas.\n\n¿Qué elemento del texto se presenta?",
    options: ["Una costumbre familiar", "Un conflicto", "Una noticia falsa", "Una tormenta"],
    correct: "Una costumbre familiar",
    explanation: "Como la actividad se repite todos los años en la familia, se presenta una costumbre familiar."
  },
  {
    category: "Fábulas", visual: "🦁🐭🐢🐇", type: "multi", choose: 2,
    activity: "Seleccioná dos respuestas",
    question: "Elegí DOS fábulas conocidas.",
    options: ["La liebre y la tortuga", "El león y el ratón", "Caperucita Roja", "Los tres cerditos"],
    correct: ["La liebre y la tortuga", "El león y el ratón"],
    explanation: "La liebre y la tortuga y El león y el ratón son fábulas: presentan una enseñanza y suelen usar animales como personajes."
  },
  {
    category: "Cuentos", visual: "🐺🏠👧", type: "multi", choose: 2,
    activity: "Seleccioná dos respuestas",
    question: "Elegí DOS cuentos conocidos.",
    options: ["Los tres cerditos", "Caperucita Roja", "La liebre y la tortuga", "El león y el ratón"],
    correct: ["Los tres cerditos", "Caperucita Roja"],
    explanation: "Los tres cerditos y Caperucita Roja son cuentos tradicionales muy conocidos."
  }
];

const state = {
  questions: [], currentIndex: 0, score: 0, streak: 0, correctCount: 0,
  answered: false, voiceEnabled: true, wrongAnswers: [], multiSelection: new Set()
};

const els = {
  startScreen: document.getElementById("start-screen"),
  gameScreen: document.getElementById("game-screen"),
  endScreen: document.getElementById("end-screen"),
  startBtn: document.getElementById("start-btn"),
  restartBtn: document.getElementById("restart-btn"),
  nextBtn: document.getElementById("next-btn"),
  submitMultiBtn: document.getElementById("submit-multi-btn"),
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
  const wanted = els.questionCount.value === "all" ? ACTIVITIES.length : Number(els.questionCount.value);
  state.questions = shuffle(ACTIVITIES).slice(0, wanted).map(q => ({ ...q, shuffledOptions: shuffle(q.options) }));
}

function showScreen(target) {
  [els.startScreen, els.gameScreen, els.endScreen].forEach(screen => screen.classList.toggle("active", screen === target));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startGame() {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  prepareQuestions();
  Object.assign(state, { currentIndex: 0, score: 0, streak: 0, correctCount: 0, answered: false, wrongAnswers: [] });
  updateStats();
  showScreen(els.gameScreen);
  renderQuestion();
}

function renderQuestion() {
  state.answered = false;
  state.multiSelection = new Set();
  els.feedback.className = "feedback hidden";
  els.nextBtn.classList.add("hidden");
  els.submitMultiBtn.classList.add("hidden");
  els.answers.innerHTML = "";

  const q = state.questions[state.currentIndex];
  const currentNumber = state.currentIndex + 1;
  const total = state.questions.length;

  els.progressLabel.textContent = `Reto ${currentNumber} de ${total}`;
  els.progressBar.style.width = `${(state.currentIndex / total) * 100}%`;
  els.categoryBadge.textContent = q.category;
  els.questionVisual.textContent = q.visual;
  els.activityLabel.textContent = q.type === "multi" ? `${q.activity} (${q.choose})` : q.activity;
  els.questionText.textContent = q.question;

  q.shuffledOptions.forEach(option => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.type = "button";
    btn.textContent = option;

    if (q.type === "multi") {
      btn.addEventListener("click", () => toggleMulti(option, btn, q.choose));
    } else {
      btn.addEventListener("click", () => answerSingle(option, btn));
    }

    els.answers.appendChild(btn);
  });

  if (q.type === "multi") els.submitMultiBtn.classList.remove("hidden");
}

function answerSingle(selected, selectedButton) {
  if (state.answered) return;
  const q = state.questions[state.currentIndex];
  const isCorrect = selected === q.correct;
  resolveAnswer(isCorrect, q, selectedButton);
}

function toggleMulti(option, button, maxChoices) {
  if (state.answered) return;
  if (state.multiSelection.has(option)) {
    state.multiSelection.delete(option);
    button.classList.remove("selected");
    return;
  }
  if (state.multiSelection.size >= maxChoices) return;
  state.multiSelection.add(option);
  button.classList.add("selected");
}

function submitMulti() {
  if (state.answered) return;
  const q = state.questions[state.currentIndex];
  if (state.multiSelection.size !== q.choose) {
    els.feedback.className = "feedback wrong";
    els.feedbackIcon.textContent = "☝️";
    els.feedbackTitle.textContent = `Seleccioná exactamente ${q.choose} opciones.`;
    els.feedbackText.textContent = "Después tocá “Revisar selección”.";
    return;
  }

  const selected = [...state.multiSelection].sort();
  const correct = [...q.correct].sort();
  const isCorrect = selected.length === correct.length && selected.every((v, i) => v === correct[i]);
  resolveAnswer(isCorrect, q, null);
}

function resolveAnswer(isCorrect, q, selectedButton) {
  state.answered = true;
  const allButtons = [...els.answers.querySelectorAll(".answer-btn")];
  const correctValues = Array.isArray(q.correct) ? q.correct : [q.correct];

  allButtons.forEach(btn => {
    btn.disabled = true;
    if (correctValues.includes(btn.textContent)) btn.classList.add("correct");
    if (q.type === "multi" && state.multiSelection.has(btn.textContent) && !correctValues.includes(btn.textContent)) btn.classList.add("wrong");
  });

  els.submitMultiBtn.classList.add("hidden");

  if (isCorrect) {
    state.streak += 1;
    state.correctCount += 1;
    const bonus = Math.min(state.streak - 1, 5) * 2;
    state.score += 10 + bonus;
    els.feedback.className = "feedback correct";
    els.feedbackIcon.textContent = "✅";
    els.feedbackTitle.textContent = "¡Correcto!";
    els.feedbackText.textContent = state.streak >= 3 ? `¡Llevás ${state.streak} respuestas correctas seguidas!` : "Muy bien. Seguimos con el próximo reto.";
    playTone("correct");
    if (state.streak % 4 === 0) createConfetti(24);
  } else {
    state.streak = 0;
    if (selectedButton) selectedButton.classList.add("wrong");
    const correctText = correctValues.join(" y ");
    state.wrongAnswers.push({ question: q.question, correct: correctText, explanation: q.explanation });
    els.feedback.className = "feedback wrong";
    els.feedbackIcon.textContent = "💡";
    els.feedbackTitle.textContent = `Respuesta correcta: ${correctText}`;
    els.feedbackText.textContent = q.explanation;
    playTone("wrong");
    speakExplanation(q, correctText);
  }

  updateStats();
  els.nextBtn.textContent = state.currentIndex === state.questions.length - 1 ? "Ver resultado 🏆" : "Siguiente reto ➜";
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
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  const total = state.questions.length;
  const percentage = Math.round((state.correctCount / total) * 100);
  els.progressBar.style.width = "100%";
  els.finalScore.textContent = state.score;
  els.finalCorrect.textContent = `${state.correctCount}/${total}`;

  if (percentage >= 90) {
    els.resultMessage.textContent = "Excelente dominio. Repetí la práctica para comprobar que también podés resolverla cuando cambie el orden.";
    createConfetti(60);
  } else if (percentage >= 70) {
    els.resultMessage.textContent = "Buen resultado. Revisá los errores y repetí la práctica para reforzar los conceptos.";
    createConfetti(35);
  } else {
    els.resultMessage.textContent = "Revisá las respuestas que fallaron y volvé a intentarlo. El orden cambiará en la siguiente partida.";
  }

  renderReview();
  showScreen(els.endScreen);
}

function renderReview() {
  if (state.wrongAnswers.length === 0) {
    els.reviewBox.innerHTML = `<h3 class="review-title">Repaso</h3><div class="review-item">🎯 No tuviste respuestas incorrectas en esta ronda.</div>`;
    return;
  }
  const items = state.wrongAnswers.map(item => `
    <div class="review-item">
      <strong>Pregunta:</strong> ${escapeHtml(item.question)}<br>
      <strong>Respuesta correcta:</strong> ${escapeHtml(item.correct)}<br>
      <span>${escapeHtml(item.explanation)}</span>
    </div>`).join("");
  els.reviewBox.innerHTML = `<h3 class="review-title">📚 Repasá estos temas</h3>${items}`;
}

function speakExplanation(q, correctText) {
  if (!state.voiceEnabled || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(`Esa respuesta no es correcta. La respuesta correcta es ${correctText}. ${q.explanation}`);
  utterance.lang = "es-CR";
  utterance.rate = 0.88;
  utterance.pitch = 1.05;
  utterance.volume = 1;
  const voices = window.speechSynthesis.getVoices();
  const preferred = voices.find(v => v.lang.toLowerCase() === "es-cr") || voices.find(v => v.lang.toLowerCase().startsWith("es-")) || voices.find(v => v.lang.toLowerCase().startsWith("es"));
  if (preferred) utterance.voice = preferred;
  window.speechSynthesis.speak(utterance);
}

function toggleVoice() {
  state.voiceEnabled = !state.voiceEnabled;
  els.voiceToggle.setAttribute("aria-pressed", String(state.voiceEnabled));
  els.voiceToggle.textContent = state.voiceEnabled ? "🔊 Voz" : "🔇 Voz";
  if (!state.voiceEnabled && "speechSynthesis" in window) window.speechSynthesis.cancel();
}

function playTone(type) {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();
    oscillator.connect(gain); gain.connect(ctx.destination);
    oscillator.type = "sine";
    oscillator.frequency.value = type === "correct" ? 620 : 210;
    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.18);
    oscillator.start(); oscillator.stop(ctx.currentTime + 0.2);
  } catch (_) {}
}

function createConfetti(count) {
  const colors = ["#6d28d9", "#f59e0b", "#84cc16", "#38bdf8", "#ec4899"];
  for (let i = 0; i < count; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.setProperty("--drift", `${Math.random() * 180 - 90}px`);
    piece.style.animationDelay = `${Math.random() * .35}s`;
    els.confetti.appendChild(piece);
    setTimeout(() => piece.remove(), 2000);
  }
}

function escapeHtml(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

els.startBtn.addEventListener("click", startGame);
els.restartBtn.addEventListener("click", startGame);
els.nextBtn.addEventListener("click", nextQuestion);
els.submitMultiBtn.addEventListener("click", submitMulti);
els.voiceToggle.addEventListener("click", toggleVoice);

if ("speechSynthesis" in window) {
  window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
}
