document.addEventListener("DOMContentLoaded", function() {
    const heart = document.getElementById("heart");
    const messageContainer = document.getElementById("message-container");
    const music = document.getElementById("bg-music");
    const kissSound = document.getElementById("kiss-sound");
    const bgVideo = document.getElementById("bg-video");
    const fallingItemsContainer = document.getElementById("falling-items-container");
    
    let clickCount = 0;
    let fallInterval; 

    function createFallingItem() {
        const item = document.createElement("div");
        item.classList.add("falling-item");
        const itemImages = ["13q3.png", "13q4.png", "13q5.png"];
        const randomItem = itemImages[Math.floor(Math.random() * itemImages.length)];
        item.style.backgroundImage = `url('${randomItem}')`;
        item.style.left = Math.random() * window.innerWidth + "px";
        fallingItemsContainer.appendChild(item);
        setTimeout(() => { item.remove(); }, 3000);
    }

    function startItemFall() {
        fallInterval = setInterval(createFallingItem, 300);
    }

    function stopItemFall() {
        clearInterval(fallInterval);
    }

    heart.addEventListener("click", function() {
        clickCount++;

        if (clickCount === 1) {
            kissSound.play(); // Play kiss sound
        }

        if (clickCount === 2) {
            heart.style.display = "none";
            messageContainer.style.display = "block";
            bgVideo.style.display = "block";
            bgVideo.play();
            music.play();
            stopItemFall();
        }
    });

    startItemFall();
});
