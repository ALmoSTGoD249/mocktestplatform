
export function buildNavigation(questions, navContainer, goToQuestion){
  questions.forEach((q, i) => {
    navContainer.innerHTML += `
      <div class="nav-btn" id="nav${i}">${i + 1}</div>
    `;

    document.getElementById("nav" + i)
      .addEventListener("click", () => goToQuestion(i));
  });
}

export function markAnswered(index){
  document.getElementById("nav" + index).classList.add("answered");
}