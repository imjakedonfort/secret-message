document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript loaded!");

    const quizData = [
        { answer: "A" }, // Jake
        { answer: "C" }, // 3 days
        { answer: "A" }  // Jessy
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
            window.location.href = "https://drive.google.com/file/d/1m71cVoC-eMyDHqNbcqfXIBQeFIanYq1d/view?usp=drive_link"; // Înlocuiește cu ID-ul corect!
        } else {
            resultContainer.innerHTML = "Incorrect! Try again.";
        }
    });
});
