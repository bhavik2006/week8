document.addEventListener("DOMContentLoaded", function() {
    const heart = document.getElementById("heart");
    const messageContainer = document.getElementById("message-container");
    const music = document.getElementById("bg-music");
    const bgVideo = document.getElementById("bg-video");
    const fallingItemsContainer = document.getElementById("falling-items-container");

    let isOpened = false;

    // Multiple falling item images
    const fallingImages = [
        "14heart.png",
        "14pelat.png",
        "14ring.png",
        "14rose.png"
    ];

    function createFallingItem() {
        const item = document.createElement("div");
        item.classList.add("falling-item");

        // Random image select karega
        const randomImage = fallingImages[Math.floor(Math.random() * fallingImages.length)];
        item.style.backgroundImage = `url('${randomImage}')`;

        // Random position aur animation delay
        item.style.left = Math.random() * window.innerWidth + "px";
        item.style.animationDelay = Math.random() * 2 + "s"; // Random delay

        fallingItemsContainer.appendChild(item);
        
        // 3 sec ke baad remove hoga
        setTimeout(() => { item.remove(); }, 3000);
    }

    function startItemFall() {
        setInterval(createFallingItem, 300);
    }

    heart.addEventListener("click", function() {
        if (!isOpened) {
            heart.style.display = "none";
            messageContainer.style.display = "block";
            setTimeout(() => { messageContainer.style.opacity = "1"; }, 100);
            bgVideo.style.display = "block";
            bgVideo.play();
            music.play();
            startItemFall();
            isOpened = true;
        }
    });
    startItemFall();
});
