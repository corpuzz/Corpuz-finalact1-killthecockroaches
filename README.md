# Kill the Cockroaches PWA

## Overview

**Kill the Cockroaches** is a fast-paced, arcade-style browser game where you must squash as many cockroaches as possible within 90 seconds. Built as a Progressive Web App (PWA), it works offline and can be installed on your device for a native-like experience.

---

## Key Features

- **Progressive Web App**: Installable, works offline, and provides a native app feel.
- **Arcade Gameplay**: Squash cockroaches by clicking/tapping before they escape.
- **Timer & Score**: Real-time countdown and kill counter.
- **Sound Effects**: Background music and squish sound for immersive play.
- **Mute Button**: Toggle game sounds on/off.
- **Responsive Design**: Optimized for desktop and mobile devices.
- **Install Button**: Easily add the game to your home screen.

---

## Installation Guide

### Play in Browser
URL: https://corpuzz.github.io/Corpuz-finalact1-killthecockroaches

### Install as PWA

1. Click the **Install Game** button at the bottom of the game area, or use your browser's install prompt.
2. Follow the instructions to add the game to your device's home screen or app drawer.

---

## Gameplay Instructions

- **Start Game**: Click the "Start Game" button.
- **Objective**: Click/tap on cockroaches as they appear to squash them.
- **Timer**: You have 90 seconds to score as many kills as possible.
- **Score**: Each squashed cockroach increases your kill count.
- **Speed Up**: Cockroaches spawn faster as time decreases.
- **Mute**: Use the mute button to toggle sound effects and music.
- **Game Over**: When time is up, your final score is displayed. Click "Play Again" to restart.

---

## Technology Stack

- **HTML5** / **CSS3** / **JavaScript (ES6)**
- **Bootstrap 5** (UI components)
- **FontAwesome** (icons)
- **Google Fonts** (arcade font)
- **Service Worker** (offline/PWA support)
- **Manifest.json** (PWA metadata)

---

## Project Structure

```
/
├── index.html
├── manifest.json
├── css/
│   └── style.css
├── js/
│   ├── game.js
│   ├── timer.js
│   ├── mute.js
│   ├── sound.js
│   ├── reset.js
│   ├── install-pwa.js
│   ├── service-worker.js
│   ├── cursor.js
│   └── network.js
├── images/
│   ├── cockroach.png
│   ├── cockroach-dead.png
│   ├── slipper-cursor.png
│   ├── blood-splat.png
│   └── icon.png
├── assets/
│   └── sounds/
│       ├── squish.mp3
│       └── background-music.mp3
└── README.md
```

---

## Game Mechanics

- **Cockroach Spawning**: Cockroaches appear at random positions in the game area. If not squashed quickly, they disappear.
- **Squashing**: Click/tap a cockroach to squash it, play a squish sound, and show a blood splat effect.
- **Dead Cockroach**: A dead cockroach image briefly appears where the cockroach was squashed, then fades out.
- **Timer**: The game lasts 90 seconds. The timer and score are displayed at the top.
- **Difficulty Increase**: Every 10 seconds, cockroach spawn rate increases, making the game more challenging.
- **Game Over**: When the timer reaches zero, the game ends and your score is shown.
- **Offline Support**: The game can be played offline after the first load, thanks to service worker caching.

---

