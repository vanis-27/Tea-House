// Elements
const specialItem = document.getElementById('special-item');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');
const messageText = document.getElementById('message-text');
const music = document.getElementById('bg-music');
music.volume = 0.5; // soft background music

// Typing animation text
const message = "Hey you 🍵, this is your special brew — filled with gratitude, laughter, and kacholi samosa 😋. Thank you for being my partner in chai crimes, my calm in chaos, and my favorite human to share every 'garam chai ki pyaali' with 💚🫖";

// Popup open
specialItem.addEventListener('click', () => {
  popup.style.display = 'block';
  messageText.innerHTML = "";
  typeMessage(0);
  startConfetti();
});

// Popup close
closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Typing effect
function typeMessage(i) {
  if (i < message.length) {
    messageText.innerHTML += message.charAt(i);
    setTimeout(() => typeMessage(i + 1), 40);
  }
}

// Confetti animation
function startConfetti() {
  for (let i = 0; i < 30; i++) {
    createConfetti();
  }
}

function createConfetti() {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  confetti.style.left = Math.random() * 100 + 'vw';
  confetti.style.backgroundColor = randomColor();
  confetti.style.animationDuration = (2 + Math.random() * 2) + 's';
  document.body.appendChild(confetti);
  setTimeout(() => confetti.remove(), 3000);
}

function randomColor() {
  const colors = ['#b8e4b3', '#f7d6bf', '#f6a5c0', '#f5e8aa', '#a5d8f5'];
  return colors[Math.floor(Math.random() * colors.length)];
}



