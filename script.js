document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript loaded!");

  // Datele quiz-ului: răspunsurile corecte
  const quizData = [
    { answer: "A" }, // Jake
    { answer: "A" }, // 3 days
    { answer: "C" }  // Jessy
  ];

  const submitButton = document.getElementById("submit");
  const resultContainer = document.getElementById("result");

  if (!submitButton) {
    console.error("Butonul Submit nu a fost găsit!");
    return;
  }

  submitButton.addEventListener("click", function () {
    console.log("Button clicked!");

    let correct = 0;

    quizData.forEach((q, index) => {
      const selected = document.querySelector(input[name="question${index}"]:checked);
      if (selected && selected.value === q.answer) {
        correct++;
      }
    });

    if (correct === quizData.length) {
      alert("Congratulations!");
      // Asigură-te că înlocuiești ID_UL_TĂU cu ID-ul corect al imaginii de pe Google Drive
      window.location.href = "https://drive.google.com/file/d/1m71cVoC-eMyDHqNbcqfXIBQeFIanYq1d/view?usp=drive_link";
    } else {
      resultContainer.innerHTML = "Incorrect! Try again.";
    }
  });

  // Efect Matrix
  const canvas = document.querySelector(".matrix-background");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const letters = "01";
  const fontSize = 16;
  const columns = canvas.width / fontSize;
  const drops = Array(Math.floor(columns)).fill(1);

  function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "lime";
    ctx.font = fontSize + "px monospace";
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
});
