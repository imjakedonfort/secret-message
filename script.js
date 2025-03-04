console.log("JavaScript loaded!");
// Efect Matrix
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const letters = '01';
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(0);

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0f0';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 50);

// Quiz
const quizData = [
    {
        question: "What is the name of the protagonist in Duskwood?",
        options: ["A. Jake", "B. Thomas", "C. Max"],
        answer: "A"
    },
    {
        question: "How many days have passed since Hannah dissapeared?",
        options: ["A. A week", "B. 3 days", "C. 2 days"],
        answer: "B"
    },
    {
        question: "Who suffered the most?",
        options: ["A. Richy", "B. Jessy", "C. Thomas"],
        answer: "B"
    }
];

const quizContainer = document.getElementById("quiz");
const submitButton = document.getElementById("submit");
const resultContainer = document.getElementById("result");

function loadQuiz() {
    quizContainer.innerHTML = "";
    quizData.forEach((q, index) => {
        const questionElement = document.createElement("div");
        questionElement.innerHTML = <p>${q.question}</p>;
        q.options.forEach(option => {
            questionElement.innerHTML += `
                <input type="radio" name="question${index}" value="${option[0]}">
                ${option}<br>`;
        });
        quizContainer.appendChild(questionElement);
    });
}

submitButton.addEventListener("click", function () {
    console.log("Button clicked!"); // Testare
    let correct = 0;
    quizData.forEach((q, index) => {
        const selected = document.querySelector(input[name="question${index}"]:checked);
        if (selected && selected.value === q.answer) {
            correct++;
        }
    });

    if (correct === quizData.length) {
        alert("Congratulations!");
        window.location.href = "https://drive.google.com/file/d/1m71cVoC-eMyDHqNbcqfXIBQeFIanYq1d/view?usp=sharing";
    } else {
        resultContainer.innerHTML = "Incorrect, try again";
    }
});

loadQuiz();
