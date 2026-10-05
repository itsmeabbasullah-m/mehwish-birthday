/* =========================================
   MEHWISH 17TH BIRTHDAY
   INTERACTIVE JAVASCRIPT
========================================= */


/* =========================================
   SCREEN NAVIGATION
========================================= */

function nextScreen(number) {

    // Hide every screen
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    // Show selected screen
    const target = document.getElementById("screen" + number);

    if (target) {
        target.classList.add("active");
    }

    // Create floating hearts
    createHearts(15);

    // Small vibration on supported phones
    if (navigator.vibrate) {
        navigator.vibrate(40);
    }
}


/* =========================================
   YES BUTTON
========================================= */

function yesAnswer() {

    nextScreen(6);

    // Big celebration
    for (let i = 0; i < 60; i++) {

        setTimeout(() => {
            createHearts(1);
        }, i * 70);

    }

    // Longer vibration
    if (navigator.vibrate) {
        navigator.vibrate([100, 50, 100]);
    }
}


/* =========================================
   "I NEED SOME TIME"
========================================= */

function timeAnswer() {

    nextScreen(7);

    if (navigator.vibrate) {
        navigator.vibrate(40);
    }
}


/* =========================================
   FLOATING HEARTS
========================================= */

function createHearts(amount) {

    const heartSymbols = [
        "❤️",
        "💗",
        "💕",
        "💖",
        "💓",
        "✨",
        "🌸"
    ];

    for (let i = 0; i < amount; i++) {

        const heart = document.createElement("div");

        heart.className = "float-heart";

        heart.innerHTML =
            heartSymbols[
                Math.floor(Math.random() * heartSymbols.length)
            ];

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";

        heart.style.animationDuration =
            (4 + Math.random() * 4) + "s";

        heart.style.animationDelay =
            Math.random() * 1 + "s";

        document.body.appendChild(heart);

        setTimeout(() => {

            if (heart.parentNode) {
                heart.remove();
            }

        }, 9000);
    }
}


/* =========================================
   STAR FIELD
========================================= */

function createStars() {

    const starContainer =
        document.getElementById("stars");

    if (!starContainer) return;

    const starCount = 180;

    for (let i = 0; i < starCount; i++) {

        const star = document.createElement("div");

        star.className = "star";

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        const size =
            Math.random() * 3 + 1;

        star.style.width =
            size + "px";

        star.style.height =
            size + "px";

        star.style.animationDelay =
            Math.random() * 3 + "s";

        star.style.animationDuration =
            (1.5 + Math.random() * 3) + "s";

        starContainer.appendChild(star);
    }
}


/* =========================================
   MOUSE PARALLAX
========================================= */

function setupParallax() {

    document.addEventListener("mousemove", function(event) {

        const x =
            (event.clientX / window.innerWidth - 0.5) * 2;

        const y =
            (event.clientY / window.innerHeight - 0.5) * 2;

        document.querySelectorAll(".card").forEach(card => {

            card.style.transform =
                `perspective(1000px)
                 rotateY(${x * 3}deg)
                 rotateX(${-y * 3}deg)
                 translateY(-5px)`;

        });

    });

}


/* =========================================
   TOUCH PARALLAX
========================================= */

function setupTouchEffect() {

    document.addEventListener("touchmove", function(event) {

        if (!event.touches.length) return;

        const touch = event.touches[0];

        const x =
            (touch.clientX / window.innerWidth - 0.5) * 2;

        const y =
            (touch.clientY / window.innerHeight - 0.5) * 2;

        document.querySelectorAll(".card").forEach(card => {

            card.style.transform =
                `perspective(900px)
                 rotateY(${x * 2}deg)
                 rotateX(${-y * 2}deg)
                 translateY(-4px)`;

        });

    }, { passive: true });

}


/* =========================================
   RANDOM HEARTS EVERY FEW SECONDS
========================================= */

function automaticHearts() {

    setInterval(() => {

        // Small number so it doesn't become annoying
        createHearts(1);

    }, 3500);

}


/* =========================================
   MUSIC
========================================= */

let music = null;

let musicPlaying = false;

function setupMusic() {

    const musicButton =
        document.getElementById("musicBtn");

    if (!musicButton) return;

    musicButton.addEventListener("click", function() {

        // Create audio only after user interaction
        if (!music) {

            music =
                document.createElement("audio");

            music.src =
                "assets/music.mp3";

            music.loop = true;

            music.volume = 0.45;

            document.body.appendChild(music);
        }

        if (!musicPlaying) {

            music.play()
                .then(() => {

                    musicPlaying = true;

                    musicButton.innerHTML = "🔊";

                })
                .catch(() => {

                    alert(
                        "Please add your music file as assets/music.mp3"
                    );

                });

        } else {

            music.pause();

            musicPlaying = false;

            musicButton.innerHTML = "🎵";
        }

    });

}


/* =========================================
   CLICK HEART EFFECT
========================================= */

function setupClickEffect() {

    document.addEventListener("click", function(event) {

        // Don't create extra hearts when pressing
        // the music button
        if (event.target.id === "musicBtn") {
            return;
        }

        const heart =
            document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";

        heart.style.left =
            event.clientX + "px";

        heart.style.top =
            event.clientY + "px";

        heart.style.fontSize = "20px";

        heart.style.pointerEvents = "none";

        heart.style.zIndex = "100";

        heart.style.transition =
            "all 1s ease";

        document.body.appendChild(heart);

        requestAnimationFrame(() => {

            heart.style.transform =
                "translateY(-80px) scale(1.5)";

            heart.style.opacity = "0";

        });

        setTimeout(() => {

            heart.remove();

        }, 1000);

    });

}


/* =========================================
   WELCOME EFFECT
========================================= */

function welcomeEffect() {

    setTimeout(() => {

        createHearts(8);

    }, 1000);

}


/* =========================================
   START EVERYTHING
========================================= */

document.addEventListener("DOMContentLoaded", function() {

    createStars();

    setupParallax();

    setupTouchEffect();

    setupMusic();

    setupClickEffect();

    automaticHearts();

    welcomeEffect();

});


/* =========================================
   CONSOLE MESSAGE
========================================= */

console.log(
    "❤️ A special birthday website for Mehwish ❤️"
);
