const MEDIA = (function() {
    document.addEventListener("DOMContentLoaded", init);

    // Global variables
    let questions;

    // Initializing global variables
    function init() {
        // References to elements
        questions = document.querySelectorAll("article div[class='top']");


        questions.forEach(question => {
            question.addEventListener("click", toggleVisibility);
        })

    }


    function toggleVisibility(event) {
        let currentQuestion = event.currentTarget.parentNode;

        questions.forEach(question => {
            let questionArticle = question.parentNode;
            let content = questionArticle.querySelector(".content");
            if(questionArticle !== currentQuestion) {
                content.classList.add("hidden");
            } else {
                content.classList.toggle("hidden");
            }
        })
    }


    
})();