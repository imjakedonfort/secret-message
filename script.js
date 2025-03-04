document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript loaded!");

    const quizData = [
        { answer: "A" }, // Jake
        { answer: "C" }, // 3 days
        { answer: "A" }  // Jessy
    ];

    const submitButton = document.getElementById("submit");
    const resultContainer = document.getElementById("result");

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
            window.location.href = "https://drive.google.com/uc?export=view&id=eMyDHqNbcqfXIBQeFIanYq1d"; // Schimbă cu linkul real!
        } else {
            resultContainer.innerHTML = "Incorrect! Try again";
        }
    });

    // Efect de cifre "01" care curg
    const matrixBackground = document.querySelector(".matrix-background");
    let columns = Math.floor(window.innerWidth / 20);
    let drops = Array(columns).fill(1);

    function drawMatrix() {
        matrixBackground.innerHTML = "";
        let ctx = matrixBackground.getContext("2d");
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, matrixBackground.width, matrixBackground.height);

        ctx.fillStyle = "lime";
        ctx.font = "15px monospace";

        for (let i = 0; i < drops.length; i++) {
            let text = Math.random() > 0.5 ? "0" : "1";
            ctx.fillText(text, i * 20, drops[i] * 20);

            if (drops[i] * 20 > window.innerHeight && Math.random() > 0.95) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(drawMatrix, 50);
});
