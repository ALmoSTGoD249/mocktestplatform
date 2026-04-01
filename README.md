A modular multi-subject mock test platform built using **HTML, CSS, and Vanilla JavaScript (ES Modules)**.  
This platform simulates a real exam environment with timer, question navigation, progress tracking, and result evaluation.

---

## Features

- Modular architecture (separate UI, logic, and question data)
- Multiple subjects/modules
- Timer-based exam system
- Question navigation panel
- Progress bar
- Answer explanations after submission
- Score and percentage calculation
- Dark / Light theme toggle
- Easy to add new subjects/modules

---


## How to Run the Project

This project uses **JavaScript ES Modules**, so it must be run using a **local server** (it will NOT work if opened using file://).

### Method 1 — Using Node.js

Open terminal inside the project folder and run:


npx serve


Then open your browser and go to:


http://localhost:3000


---

### Method 2 — Using Python

If Python is installed:


python -m http.server 8000


Then open:


http://localhost:8000


---

### Method 3 — Using VS Code Live Server

1. Install **Live Server** extension in VS Code
2. Right click `index.html`
3. Click **Open with Live Server**

---

## How the System Works


index.html → Select Subject
↓
subject.html → Loads questions
↓
questions/*.js → Question bank
↓
app.js → Controls test flow
├── ui.js → Renders questions
├── navigation.js → Question navigation
├── timer.js → Countdown timer
├── progress.js → Progress bar
└── quizEngine.js → Score calculation


This project follows a **modular MVC-like architecture**:

| Layer | File |
|------|------|
| Model | questions/*.js |
| View | HTML + CSS |
| Controller | app.js |
| Logic | quizEngine.js |
| Components | ui.js, timer.js, navigation.js |

---

## Question File Format

Each question file must export questions in this format:

```js
export const questions = [
  [
    "Question text",
    ["Option A", "Option B", "Option C", "Option D"],
    1,
    "Explanation of the correct answer"
  ]
];
```

Format Explanation
Index	Meaning
0	Question
1	Options array
2	Correct option index
3	Explanation



## How to Add a New Module / Subject

Example: Adding Azure Module

Step 1 — Create Question File

Create a new file:

```js
questions/azure.js
```
Add questions:
```js
export const questions = [
  ["Azure is?", ["Cloud platform", "Operating System", "CPU", "Router"], 0, "Azure is Microsoft cloud platform."]
];
```
## Step 2 — Create New Test Page

Create:
```js
azure.html
```

Copy any existing test page and change the import:
```js
<script type="module">
import { questions } from './questions/azure.js';
import { startApp } from './js/app.js';

startApp(questions);
</script>

```

## Step 3 — Add Card in index.html

Add this inside the cards section:

```js 
<a href="azure.html" class="card">
  <h3>Azure 900/104</h3>
  <span>Cloud Fundamentals • Administrator • DevOps</span>
</a>

```

## Recommended Future Improvements

-Save answers using localStorage
-Resume test after refresh
-Flag question for review
-Result history
-Performance analytics per subject
-Login system
-Admin panel to add questions
-Random question generator
-Negative marking system

