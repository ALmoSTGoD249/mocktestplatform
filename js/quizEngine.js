
export function submitQuiz(questions){
  let score = 0;

  questions.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    const solution = document.getElementById("sol" + i);
    const navBtn = document.getElementById("nav" + i);

    solution.style.display = "block";

    if (selected && Number(selected.value) === q[2]) {
      score++;
      solution.classList.add("correct");
      navBtn.className = "nav-btn correct";
    } else {
      solution.classList.add("wrong");
      navBtn.className = "nav-btn wrong";
    }
  });

  return score;
}