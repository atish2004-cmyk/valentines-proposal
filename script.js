const noBtn = document.getElementById("noBtn");
    document.getElementById("noBtn").addEventListener("click" , function() {
        let yesButton = document.getElementById("yesBtn");
        yesButton.style.display = "inline-block" ; // Show Yes button    
        });
const yesBtn = document.getElementById("yesBtn");
  document.getElementById("yesBtn").style.display = "none"; // REMOVE this if it's there
 const responseMessage = document.getElementById("responseMessage");
const bgMusic = document.getElementById("bgMusic");
    document.addEventListener("click" , function() {
        let music = document.getElementById("bgMusic");
        if (music.paused) {
            music.play();
        }
    });
const countdown = document.getElementById("countdown");

// Play Music on Load
window.onload = function() {
    bgMusic.play();
    startCountdown();
    createHearts();
};

// Move "No" button randomly
noBtn.addEventListener("mouseover", function() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noBtn.style.left = '${x}px' ;
    noBtn.style.top = '${y}px' ;
});

// Show message when "Yes" is clicked
yesBtn.addEventListener("click", function() {
    responseMessage.innerHTML = "Yay! I love you ❤️💖🥰";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";

    // Cute Pop-up
    setTimeout(() => {
        alert("thanks for accepting my proposal! 😍💞i Love you too!");
    }, 500);
});

// Countdown Timer (Time left for Valentine's Day)
function startCountdown() {
    const targetDate = new Date("February 14, 2025 00:00:00").getTime();
    setInterval(function() {
        let now = new Date().getTime();
        let timeLeft = targetDate - now;
        
        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdown.innerHTML = 'Valentines Day in: ${0}d ${5}h ${59}m ${29}s' ;
    }, 1000);
}

// Floating Hearts Animation
function createHearts() {
    setInterval(() => {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.style.position = "absolute";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.bottom = "0";
        heart.style.fontSize = Math.random() * 20 + 20 + "px";
        heart.style.animation = "floatingHearts 5s linear";
        document.getElementById("hearts-container").appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 500);
}