const MEDIA = (function() {
    document.addEventListener("DOMContentLoaded", init);

    // Global variables
    let questions;
    let navLinks;
    let main;
    let currentSite = "img";

    // Initializing global variables
    function init() {
        // References to elements
        questions = document.querySelectorAll("article div[class='top']");
        navLinks = document.querySelectorAll("nav a");
        main = document.querySelector("main");

        updateNavLinks();

        questions.forEach(question => {
            question.addEventListener("click", toggleVisibility);
        });

        main.addEventListener("scroll", scrollHandler);
    }

    /**
     * Toggles class "hidden" on the current clicked questions content
     * @param {event} event 
     */
    function toggleVisibility(event) {
        let currentQuestion = event.currentTarget.parentNode;
        let currentQuestionAnswer = currentQuestion.querySelector(".content");

        currentQuestionAnswer.classList.toggle("hidden");
    }

    /**
     * Calculating which site is currently in focus
     */
    function scrollHandler() {
        const imgHeight = document.getElementById("img").offsetHeight;
        const audioHeight = document.getElementById("audio").offsetHeight;
        const videoHeight = document.getElementById("video").offsetHeight;

        const scrollLength = main.scrollTop;
        
        if(scrollLength < imgHeight && currentSite !== "img") {
            currentSite = "img";
            updateNavLinks();
        }

        if(scrollLength >= imgHeight && scrollLength < imgHeight + audioHeight && currentSite !== "audio") {
            currentSite = "audio";
            updateNavLinks();
        }

        if(scrollLength >= imgHeight + audioHeight && scrollLength < imgHeight + audioHeight + videoHeight && currentSite !== "video") {
            currentSite = "video";
            updateNavLinks();
        }
    }

    /**
     * Updates navlinks span-tag when a new site is in focus
     */
    function updateNavLinks() {
        navLinks.forEach(navLink => {
            const subString = navLink.href.split("#").pop();

            if(subString === currentSite) {
                navLink.parentNode.classList.add("current");
            } else {
                navLink.parentNode.classList.remove("current");
            }
        })
    }


    
})();