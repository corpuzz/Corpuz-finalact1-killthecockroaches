window.onload = function() {
  
  document.getElementById('muteBtn').addEventListener('click', toggleMute);
  document.getElementById('playAgainBtn').addEventListener('click', () => {
    startGame();
  });
  
  // Start Screen logic
  const startBtn = document.getElementById('startBtn');
  const startScreen = document.getElementById('startScreen');

  startBtn.addEventListener('click', () => {
    console.log("click");
    startScreen.remove(); // ✅ REMOVE start screen from the page
    startGame(); // ✅ Start the real game
  });
  
};



let score = 0;
const scoreElement = document.getElementById('score');
const gameArea = document.getElementById('gameArea');


function startGame() {
  console.log("enters startgame");
  const interval = setInterval(spawnCockroach, 1000); // spawn cockroaches
  setSpawnInterval(interval); // ⬅️ tell timer.js about it
  startTimer();               // ⬅️ start countdown timer
}

function spawnCockroach() {
  if (!isOnline) return; // 🚫 Don't spawn if offline


  const cockroach = document.createElement('div');
  cockroach.classList.add('cockroach');
  const maxX = gameArea.clientWidth - 75;
  const maxY = gameArea.clientHeight - 75;
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  cockroach.style.left = `${x}px`;
  cockroach.style.top = `${y}px`;

  
  cockroach.addEventListener('mousedown', (event) => {
    score++;
    scoreElement.textContent = score;
    playSquishSound();  

    // Save position before removing
    const posX = cockroach.style.left;
    const posY = cockroach.style.top;

    // Remove the alive cockroach
    cockroach.remove();

    // Create a dead cockroach
    const deadCockroach = document.createElement('div');
    deadCockroach.classList.add('dead-cockroach');
    deadCockroach.style.left = posX;
    deadCockroach.style.top = posY;

    gameArea.appendChild(deadCockroach);

    // Fade out dead cockroach after short delay
    setTimeout(() => {
      deadCockroach.style.opacity = 0;
    }, 1000);

    // Remove dead cockroach after fade
    setTimeout(() => {
      deadCockroach.remove();
    }, 3000);

    // Add blood splat effect at click position or cockroach center
    const rect = cockroach.getBoundingClientRect();
    const gameAreaRect = gameArea.getBoundingClientRect();
    const x = rect.left - gameAreaRect.left + rect.width / 2;
    const y = rect.top - gameAreaRect.top + rect.height / 2;
    showBloodSplat(x, y);
  });

  gameArea.appendChild(cockroach);

  setTimeout(() => {
    cockroach.remove();
  }, 1600);
}

function showBloodSplat(x, y) {
  console.log('Creating blood splat at position:', x, y);
  const splat = document.createElement('div');
  splat.className = 'blood-splat';
  splat.style.left = (x - 25) + 'px';  // Center the splat (50px width/2)
  splat.style.top = (y - 25) + 'px';   // Center the splat (50px height/2)
  
  gameArea.appendChild(splat);
  setTimeout(() => splat.remove(), 500);  // Remove after animation completes
}


