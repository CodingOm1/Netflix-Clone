document.addEventListener("DOMContentLoaded", function() {
    const questionBoxes = document.querySelectorAll(".question-box");

    questionBoxes.forEach(function(questionBox) {
        questionBox.addEventListener("click", function() {
            const answerBox = this.nextElementSibling;
                
            // Toggle answer box visibility
            if (answerBox.classList.contains("show")) {
                answerBox.classList.remove("show");
                this.querySelector('.plus-sign').classList.remove('rotate'); // Remove rotate class
            } else {
                // Hide all other answer boxes before showing this one
                const allAnswerBoxes = document.querySelectorAll(".answer-box");
                allAnswerBoxes.forEach(function(box) {
                    if (box !== answerBox) {
                        box.classList.remove("show");
                    }
                });

                answerBox.classList.add("show");
                this.querySelector('.plus-sign').classList.add('rotate'); // Add rotate class
            }
        });
    });
});
