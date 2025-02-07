document.addEventListener("DOMContentLoaded", function() {
    const daysContainer = document.getElementById("days-container");
    const today = new Date();
    
    // ✅ February = 1 rakhna sahi hai (January = 0 hota hai)
    const startDate = new Date(today.getFullYear(), 1, 7); // 7 फरवरी (Rose Day start)

    const backgroundMusic = document.getElementById("background-music");
    const playMusicButton = document.getElementById("play-music");

    // Mobile pe music play hone ke liye button
    playMusicButton.addEventListener("click", function() {
        backgroundMusic.play();
        playMusicButton.style.display = "none"; // Button chhupa do
    });

    // ✅ Correct file mapping (1.html for Rose Day, 2.html for Propose Day, etc.)
    const fileMapping = {
        7: "1.html", // Rose Day
        8: "2.html", // Propose Day
        9: "3.html", // Chocolate Day
        10: "4.html", // Teddy Day
        11: "5.html", // Promise Day
        12: "6.html", // Hug Day
        13: "7.html", // Kiss Day
        14: "8.html"  // Valentine's Day
    };

    for (let i = 0; i < 8; i++) {
        const dayNumber = 7 + i;
        const dayDate = new Date(today.getFullYear(), 1, dayNumber);
        const dayElement = document.createElement("div");
        dayElement.classList.add("day-box");

        if (today >= dayDate) {
            // ✅ Correct file name use kar raha hai
            dayElement.innerHTML = `<a href="days/${fileMapping[dayNumber]}">Day ${i + 1} - Open</a>`;
        } else {
            dayElement.innerHTML = `Day ${i + 1} - Locked 🔒`;
            dayElement.classList.add("locked");
        }

        daysContainer.appendChild(dayElement);
    }

    // User kisi day ko open kare to music band ho jaye
    document.querySelectorAll('.day-box a').forEach(dayLink => {
        dayLink.addEventListener('click', function() {
            backgroundMusic.pause();
        });
    });
});
