import { renderQuestions } from './ui.js';
import { startTimer } from './timer.js';
import { buildNavigation, markAnswered } from './navigation.js';
import { updateProgress } from './progress.js';
import { submitQuiz } from './quizEngine.js';

export function startApp(questions){

  const form = document.getElementById("quizForm");
  const nav = document.getElementById("nav");
  const timerEl = document.getElementById("timer");
  const result = document.getElementById("result");
  const progressBar = document.getElementById("progressBar");

  questions.sort(()=>Math.random()-0.5);

  renderQuestions(questions, form, (i)=>{
    markAnswered(i);
    updateProgress(questions.length, progressBar);
  });

  buildNavigation(questions, nav, (i)=>{
    document.getElementById("q"+i).scrollIntoView({behavior:"smooth"});
  });

  startTimer(3600, timerEl, finishQuiz);

  function finishQuiz(){
    const score = submitQuiz(questions);
    result.style.display="block";
    result.innerHTML = `
      <h2>Result</h2>
      <p><b>Score:</b> ${score}/${questions.length}</p>
      <p><b>Percentage:</b> ${(score/questions.length*100).toFixed(0)}%</p>
    `;
    window.scrollTo({top:0,behavior:"smooth"});
  }
}