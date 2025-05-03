let cursorAnimationFrame = 0;
let cursorAnimInterval;

function setNormalCursor() {
    gameArea.style.cursor = "url('/images/slipper-cursor.png') 50 50, auto";
    gameArea.style.transform = 'none';
}

function setSlapCursor() {
    const frames = [
        { cursor: "url('/images/slipper-cursor.png')", x: 50, y: 50, rotate: 0 },
        { cursor: "url('/images/slipper-cursor.png')", x: 45, y: 45, rotate: -15 },
        { cursor: "url('/images/slipper-cursor.png')", x: 40, y: 40, rotate: -30 },
        { cursor: "url('/images/slipper-cursor-squash.png')", x: 35, y: 35, rotate: -45 },
        { cursor: "url('/images/slipper-cursor.png')", x: 40, y: 40, rotate: -30 },
        { cursor: "url('/images/slipper-cursor.png')", x: 45, y: 45, rotate: -15 },
        { cursor: "url('/images/slipper-cursor.png')", x: 50, y: 50, rotate: 0 }
    ];
    
    clearInterval(cursorAnimInterval);
    cursorAnimationFrame = 0;
    
    cursorAnimInterval = setInterval(() => {
        const frame = frames[cursorAnimationFrame];
        const style = document.createElement('style');
        style.textContent = `
            #gameArea {
                cursor: ${frame.cursor} ${frame.x} ${frame.y}, auto !important;
                transform: rotate(${frame.rotate}deg);
                transform-origin: ${frame.x}% ${frame.y}%;
            }
        `;
        
        document.head.appendChild(style);
        setTimeout(() => style.remove(), 100);
        
        cursorAnimationFrame++;
        if (cursorAnimationFrame >= frames.length) {
            clearInterval(cursorAnimInterval);
            setNormalCursor();
            gameArea.style.transform = 'none';
        }
    }, 30);
}

// Event listeners
gameArea.addEventListener('mousedown', setSlapCursor);
gameArea.addEventListener('mouseup', setNormalCursor);


