// Matrix-style canvas background
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*';
const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = [];
for (let x = 0; x < columns; x++) {
  drops[x] = Math.random() * (canvas.height / fontSize);
}

function draw() {
  ctx.fillStyle = 'rgba(17, 17, 24, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  ctx.fillStyle = '#cba6f7'; // Purple Matrix Color
  ctx.font = fontSize + 'px monospace';
  
  for (let i = 0; i < drops.length; i++) {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(draw, 33);

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Glitch text effect on hover
const glitches = document.querySelectorAll('.glitch');
glitches.forEach(glitch => {
  glitch.addEventListener('mouseover', () => {
    let original = glitch.dataset.text;
    let interval = setInterval(() => {
      let scrambled = original.split('').map(char => {
        return Math.random() > 0.5 ? letters[Math.floor(Math.random() * letters.length)] : char;
      }).join('');
      glitch.innerText = scrambled;
    }, 50);
    
    setTimeout(() => {
      clearInterval(interval);
      glitch.innerText = original;
    }, 500);
  });
});


