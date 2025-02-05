document.addEventListener("DOMContentLoaded", function () {
    const chocolate = document.getElementById("chocolate");
    const messageContainer = document.querySelector(".message-container");
    const music = document.getElementById("bg-music");
    const chocolatesContainer = document.getElementById("chocolates-container");
    const videoBackground = document.getElementById("video-background");

    let clickCount = 0;
    let raining = false;

    // Multiple chocolate images
    const chocolateImages = ["9down.png", "9open3.png", "9open4.png"];

    function createChocolatePiece() {
        const piece = document.createElement("div");
        piece.classList.add("chocolate-piece");

        // Random position
        piece.style.left = Math.random() * window.innerWidth + "px";
        
        // Random chocolate image
        const randomChocolate = chocolateImages[Math.floor(Math.random() * chocolateImages.length)];
        piece.style.backgroundImage = `url('${randomChocolate}')`;

        // Random animation duration
        piece.style.animationDuration = (5 + Math.random() * 5) + "s";

        chocolatesContainer.appendChild(piece);

        // Remove chocolate after animation
        setTimeout(() => { piece.remove(); }, 10000);
    }

    function startChocolateRain() {
        if (!raining) {
            raining = true;
            setInterval(createChocolatePiece, 300); // Continuous chocolate fall
        }
    }

    chocolate.addEventListener("click", function () {
        clickCount++;

        if (clickCount === 2) {
            chocolate.src = "9kitkatopen.png"; 
            chocolate.classList.add("open");

            // Show the message container
            messageContainer.style.display = "block"; // Ensure it becomes visible

            // Activate video background
            videoBackground.style.display = "block";
            videoBackground.play();

            music.play();
            startChocolateRain();
        }
    });

    startChocolateRain();
});
