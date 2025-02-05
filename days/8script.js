document.addEventListener("DOMContentLoaded", function() {
    const music = document.getElementById("bg-music");
    const envelope = document.querySelector(".envelope");
    const letter = document.querySelector(".letter");
    const questionContainer = document.querySelector(".question-container");
    const sorryMessage = document.querySelector(".sorry-message");
    const letterContainer = document.querySelector(".letter-container");
    const heartsContainer = document.getElementById("hearts-container");

    // Array of heart image paths
    const heartImages = [
        "8heart.png",
        "8pink-heart.png",
        "8blue-heart.png",
        "8purple-heart.png"
    ];

    // Function to create heart animations
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");

        // Randomly select a heart image from the array
        const randomHeartImage = heartImages[Math.floor(Math.random() * heartImages.length)];
        heart.style.backgroundImage = `url(${randomHeartImage})`;
        heart.style.backgroundSize = "cover"; // Ensure the image fits the div

        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.animationDuration = (5 + Math.random() * 5) + "s";
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 10000); // Heart will disappear after 10 seconds
    }

    // Function to continuously create hearts
    function createMoreHearts() {
        // Remove previous interval if exists
        if (window.heartInterval) {
            clearInterval(window.heartInterval);
        }

        window.heartInterval = setInterval(() => {
            createHeart(); // Create a new heart every 100ms
        }, 100);
    }

    // Function to show the Yes response
    function showYes() {
        questionContainer.style.display = "none";
        music.play();
        letterContainer.classList.remove("hidden");
        letter.classList.remove("hidden");
        letter.classList.add("open");
        createMoreHearts(); // Start creating hearts when "Yes" is clicked
    }

    // Function to show the No response
    function showNo() {
        questionContainer.style.display = "none";
        sorryMessage.style.display = "block";
    }

    // Click listener for the envelope
    envelope.addEventListener("click", function() {
        envelope.style.transform = "scale(1.2)";
        setTimeout(() => {
            envelope.style.display = "none";
        }, 500);
    });

    // Adding hearts animation after a slight delay
    setTimeout(() => {
        for (let i = 0; i < 10; i++) {
            createHeart();
        }
    }, 500);

    // Add event listeners to the Yes and No buttons
    const yesButton = document.querySelector(".yes-btn");
    const noButton = document.querySelector(".no-btn");

    yesButton.addEventListener("click", showYes);
    noButton.addEventListener("click", showNo);
});
