document.addEventListener("DOMContentLoaded", function() {
    const heart = document.getElementById("heart");
    const messageContainer = document.getElementById("message-container");
    const music = document.getElementById("bg-music");
    const bgVideo = document.getElementById("bg-video");
    const fallingItemsContainer = document.getElementById("falling-items-container");
    
    let clickCount = 0;
    let fallInterval; // Variable to store interval ID

    // Function to create falling items
    function createFallingItem() {
        const item = document.createElement("div");
        item.classList.add("falling-item");
        const itemImages = ["11dil.png", "11ring2.png", "11ring.png"];
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
        clearInterval(fallInterval); // Stop falling effect
    }

    heart.addEventListener("click", function() {
        clickCount++;

        if (clickCount === 2) { 
            // On first click, hide the heart image and show video/music
            heart.style.display = "none"; // Hides the heart image
            messageContainer.style.display = "block"; // Show message container
            bgVideo.style.display = "block";  // Show the video
            bgVideo.play(); // Play the video
            music.play(); // Play music
            
            stopItemFall(); // Stop falling items
        }
    });

    startItemFall(); // Start falling items initially
});
