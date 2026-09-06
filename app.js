let currentGame = null;
let round = [];
let index = 0;
let score = 0;
let lives = 3;
let answered = false;
let lastSpokenExplanation = "";
let currentQuestionSpeech = "";

function shuffle(array){
  const copy = [...array];
  for(let i=copy.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [copy[i],copy[j]] = [copy[j],copy[i]];
  }
  return copy;
}

function setScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function stopSpeech(){
  if("speechSynthesis" in window){
    window.speechSynthesis.cancel();
  }
}

function speakText(text){
  if(!text) return;
  if(!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) return;

  stopSpeech();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "es-CR";
  utterance.rate = 0.9;
  utterance.pitch = 1.03;
  utterance.volume = 1;

  const voices = window.speechSynthesis.getVoices();
  const spanishVoice =
    voices.find(v => v.lang && v.lang.toLowerCase().startsWith("es-cr")) ||
    voices.find(v => v.lang && v.lang.toLowerCase().startsWith("es"));

  if(spanishVoice) utterance.voice = spanishVoice;
  window.speechSynthesis.speak(utterance);
}

function speakCurrentQuestion(){
  speakText(currentQuestionSpeech);
}

function replayExplanation(){
  speakText(lastSpokenExplanation);
}

function startGame(type){
  stopSpeech();
  currentGame = type;
  const source = type === 'concept' ? conceptQuestions : missionQuestions;
  round = shuffle(source).slice(0, Math.min(QUESTIONS_PER_GAME, source.length));
  index = 0;
  score = 0;
  lives = 3;
  answered = false;
  setScreen('game');
  renderQuestion();
}

function renderQuestion(){
  stopSpeech();
  lastSpokenExplanation = "";
  answered = false;

  const item = round[index];
  currentQuestionSpeech = item.q;

  document.getElementById('questionKind').textContent =
    currentGame === 'concept' ? '🕵️ ' + item.kind : '🌿 ' + item.kind;

  document.getElementById('questionText').textContent = item.q;
  document.getElementById('scoreStat').textContent = '⭐ ' + score;
  document.getElementById('lifeStat').textContent =
    '❤️'.repeat(Math.max(lives,0)) + '🖤'.repeat(Math.max(3-lives,0));
  document.getElementById('countStat').textContent = (index+1) + ' / ' + round.length;
  document.getElementById('progressBar').style.width = ((index)/round.length*100) + '%';

  const answers = shuffle([item.correct, ...item.wrong]);
  const box = document.getElementById('answers');
  box.innerHTML = '';

  answers.forEach(text=>{
    const btn = document.createElement('button');
    btn.className = 'answer';
    btn.type = 'button';
    btn.textContent = text;
    btn.addEventListener('click', ()=>checkAnswer(btn, text, item));
    box.appendChild(btn);
  });

  const feedback = document.getElementById('feedback');
  feedback.className = 'feedback';
  feedback.innerHTML = '';
  document.getElementById('nextBtn').style.display = 'none';
}

function checkAnswer(button, selected, item){
  if(answered) return;
  answered = true;

  const buttons = [...document.querySelectorAll('.answer')];
  buttons.forEach(b=>b.disabled = true);

  const feedback = document.getElementById('feedback');
  const isCorrect = selected === item.correct;

  if(isCorrect){
    score += 10;
    button.classList.add('correct');
    feedback.className = 'feedback show good';
    feedback.innerHTML =
      '<strong>✅ ¡Correcto!</strong>' +
      escapeHtml(item.explain) +
      '<div class="memory-box"><b>Para recordarlo:</b> ' + escapeHtml(item.clue) + '</div>';
  } else {
    lives--;
    button.classList.add('wrong');
    buttons.forEach(b=>{
      if(b.textContent === item.correct) b.classList.add('correct');
    });

    lastSpokenExplanation =
      'La respuesta correcta es ' + item.correct + '. ' +
      item.explain + ' ' + item.clue;

    feedback.className = 'feedback show bad';
    feedback.innerHTML =
      '<strong>💡 La respuesta correcta es: ' + escapeHtml(item.correct) + '</strong>' +
      escapeHtml(item.explain) +
      '<div class="memory-box"><b>Busca esta pista:</b> ' + escapeHtml(item.clue) + '</div>' +
      '<div class="voice-row">' +
        '<button type="button" class="voice-btn" onclick="replayExplanation()">🔊 Escuchar otra vez</button>' +
      '</div>';

    speakText(lastSpokenExplanation);

    document.getElementById('questionCard').classList.add('shake');
    setTimeout(()=>document.getElementById('questionCard').classList.remove('shake'),300);
  }

  document.getElementById('scoreStat').textContent = '⭐ ' + score;
  document.getElementById('lifeStat').textContent =
    '❤️'.repeat(Math.max(lives,0)) + '🖤'.repeat(Math.max(3-lives,0));
  document.getElementById('nextBtn').style.display = 'inline-block';
}

function nextQuestion(){
  stopSpeech();
  index++;
  if(index >= round.length || lives <= 0){
    showResults();
  } else {
    renderQuestion();
  }
}

function showResults(){
  stopSpeech();
  setScreen('results');

  const max = round.length * 10;
  const pct = Math.round(score/max*100);

  let icon='🏆', title='¡Excelente trabajo!', text='Estás relacionando muy bien las pistas con los conceptos.', stars='⭐⭐⭐';
  if(pct < 80){
    icon='🌱';
    title='¡Buen entrenamiento!';
    text='Repite la misión. Fíjate especialmente en las pistas que explican lugar, función, respiración y movimiento.';
    stars='⭐⭐';
  }
  if(pct < 50){
    icon='🔍';
    title='Sigue investigando';
    text='No intentes recordar la respuesta completa. Busca primero la pista principal de cada situación.';
    stars='⭐';
  }
  if(lives <= 0){
    text += ' Puedes volver a jugar: las preguntas aparecerán en otro orden.';
  }

  document.getElementById('resultIcon').textContent = icon;
  document.getElementById('resultStars').textContent = stars;
  document.getElementById('resultTitle').textContent = title;
  document.getElementById('finalScore').textContent = score + ' de ' + max + ' puntos';
  document.getElementById('resultText').textContent = text;
}

function restartGame(){
  startGame(currentGame);
}

function goHome(){
  stopSpeech();
  lastSpokenExplanation = "";
  currentQuestionSpeech = "";
  setScreen('home');
}

function escapeHtml(str){
  return String(str)
    .replaceAll('&','&amp;')
    .replaceAll('<','&lt;')
    .replaceAll('>','&gt;')
    .replaceAll('"','&quot;')
    .replaceAll("'",'&#039;');
}
