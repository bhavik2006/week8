document.addEventListener("DOMContentLoaded", function() {
    const teddy = document.getElementById("teddy");
    const messageContainer = document.getElementById("message-container");
    const music = document.getElementById("bg-music");
    const bgVideo = document.getElementById("bg-video");
    const fallingTeddiesContainer = document.getElementById("falling-teddies-container");
    
    let clickCount = 0;

    function createFallingTeddy() {
        const piece = document.createElement("div");
        piece.classList.add("teddy-piece");

        // Randomly pick a teddy image
        const teddyImages = ["10t1.png", "10t2.png", "10t3.png", "10t4.png", "10t5.png", "10t6.png", "10t7.png"];
        const randomTeddy = teddyImages[Math.floor(Math.random() * teddyImages.length)];
        piece.style.backgroundImage = `url('${randomTeddy}')`;
        
        piece.style.left = Math.random() * window.innerWidth + "px";
        fallingTeddiesContainer.appendChild(piece);
        
        setTimeout(() => { piece.remove(); }, 5000);
    }

    function startTeddyFall() {
        setInterval(createFallingTeddy, 200);
    }

    teddy.addEventListener("click", function() {
        clickCount++;

        if (clickCount === 1) {
            teddy.src = "10teddyopen.png"; 
            teddy.classList.add("open");
            messageContainer.style.display = "block";
            bgVideo.style.display = "block";
            bgVideo.play();
            music.play();
            startTeddyFall();
        }
    });
});

