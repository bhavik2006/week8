document.addEventListener("DOMContentLoaded", function() {
    const daysContainer = document.getElementById("days-container");
    const today = new Date();
    const startDate = new Date(today.getFullYear(), 1, 7); // 7 फरवरी

    const backgroundMusic = document.getElementById("background-music");
    const playMusicButton = document.getElementById("play-music");

    // Button se audio start karna mobile ke liye
    playMusicButton.addEventListener("click", function() {
        backgroundMusic.play();
        playMusicButton.style.display = "none"; // Button chhupa do
    });

    for (let i = 0; i < 8; i++) {
        const dayNumber = 7 + i;
        const dayDate = new Date(today.getFullYear(), 1, dayNumber);
        const dayElement = document.createElement("div");
        dayElement.classList.add("day-box");

        if (today >= dayDate) {
            dayElement.innerHTML = `<a href="days/${dayNumber}.html">Day ${i + 1} - Open</a>`;
        } else {
            dayElement.innerHTML = `Day ${i + 1} - Locked 🔒`;
            dayElement.classList.add("locked");
        }

        daysContainer.appendChild(dayElement);
    }

    // Stop music jab user kisi day ko open kare
    document.querySelectorAll('.day-box a').forEach(dayLink => {
        dayLink.addEventListener('click', function() {
            backgroundMusic.pause();
        });
    });
});
