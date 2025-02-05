document.addEventListener("DOMContentLoaded", function() {
    const heart = document.getElementById("heart");
    const messageContainer = document.getElementById("message-container");
    const music = document.getElementById("bg-music");
    const bgVideo = document.getElementById("bg-video");
    const fallingItemsContainer = document.getElementById("falling-items-container");
    
    let clickCount = 0;
    let fallInterval; // Interval variable

    // Function to create falling items
    function createFallingItem() {
        const item = document.createElement("div");
        item.classList.add("falling-item");
        const itemImages = ["12q3.gif","12q4.gif", "12q2.gif", "12q.gif"];
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
        clearInterval(fallInterval); // Stop falling items
    }

    heart.addEventListener("click", function() {
        clickCount++;

        if (clickCount === 2) {
            heart.style.display = "none";
            messageContainer.style.display = "block";
            bgVideo.style.display = "block";
            bgVideo.play(); // Play video
            music.play(); // Play music
            stopItemFall(); // Stop falling
        }
    });

    startItemFall();
});
