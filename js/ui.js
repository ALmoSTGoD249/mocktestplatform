

export function renderQuestions(questions, form, onAnswer){
  questions.forEach((q, i) => {
    form.innerHTML += `
      <div class="question" id="q${i}">
        <b>${i + 1}. ${q[0]}</b>
        <div class="options">
          ${q[1].map((option, j) => `
            <label>
              <input type="radio" name="q${i}" value="${j}">
              ${option}
            </label>
          `).join("")}
        </div>

        <div class="solution" id="sol${i}">
          <b>Answer:</b> ${q[1][q[2]]}<br>
          <b>Explanation:</b> ${q[3]}
        </div>
      </div>
    `;
  });

  // Listen for answers
  form.addEventListener("change", (e) => {
    if (e.target.type === "radio") {
      const index = e.target.name.replace("q", "");
      onAnswer(index);
    }
  });

  // Submit button
  form.innerHTML += `
    <button type="button" id="submitBtn">Submit</button>
  `;
}