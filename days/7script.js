document.addEventListener("DOMContentLoaded", function() {
    const music = document.getElementById("bg-music");
    const envelope = document.querySelector(".envelope");
    const letter = document.querySelector(".letter");

    let petalsFallen = 0;

    envelope.addEventListener("click", function() {
        envelope.style.transform = "scale(1.2)";
        setTimeout(() => {
            envelope.style.display = "none";
            letter.classList.remove("hidden");
            letter.classList.add("open");
            music.play();
            createMorePetals();
        }, 500);
    });

    function createPetal() {
        const petal = document.createElement("div");
        petal.classList.add("petal");

        const petalImages = ["7red.png", "7red-petal.png", "7pink-petal.png"];
        const randomImage = petalImages[Math.floor(Math.random() * petalImages.length)];
        petal.style.backgroundImage = `url(${randomImage})`;

        petal.style.left = Math.random() * window.innerWidth + "px";
        petal.style.width = (20 + Math.random() * 30) + "px";
        petal.style.height = petal.style.width;
        petal.style.animationDuration = (5 + Math.random() * 5) + "s";

        document.getElementById("petals-container").appendChild(petal);

        setTimeout(() => {
            petal.remove();
        }, 10000);
    }

    function createMorePetals() {
        let petalInterval = setInterval(() => {
            createPetal();
            petalsFallen++;

            if (petalsFallen >= 20) {
                clearInterval(petalInterval);
            }
        }, 100);

        setTimeout(() => {
            setInterval(createPetal, 100);
        }, 1000);
    }

    setTimeout(() => {
        for (let i = 0; i < 8; i++) {
            createPetal();
        }
    }, 500);
});
