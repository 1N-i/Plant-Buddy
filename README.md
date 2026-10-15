# 🌱 Plant-Buddy

![Electron](https://img.shields.io/badge/Electron-44.7.0-blue?style=for-the-badge&logo=electron&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

A lightweight desktop virtual plant companion app built with Electron, featuring a custom frameless window, real-time water decay logic, mood changes, and a retro pixel-art aesthetic. 

> **Note:** This project is based on the tutorial **[Build a Plant Buddy with Electron](https://www.codedex.io/projects/build-a-plant-buddy-with-electron)** by **[Codédex](https://www.codedex.io/)**.

## 📋 Summary
- [Technologies](#-technologies)
- [Features](#-features)
- [Project Architecture](#-project-architecture)
- [What I Learned](#-what-i-learned)
- [Future Improvements](#-future-improvements)
- [How to Run](#-how-to-run)
- [Credits](#-credits)

---

## 🛠 Technologies
- **Electron**: Framework for building cross-platform desktop applications using web technologies.
- **HTML5 & CSS3**: Custom interface styling with "Pixelify Sans" typography and interactive widgets.
- **JavaScript (Vanilla)**: Core simulation loop, state management, and DOM updates.
- **Electron-Reload**: Automatically refreshes the application during development when files change.

## ✨ Features
- **Frameless Transparent Window:** A minimal, draggable desktop widget that stays always-on-top of your screen.
- **Real-time Water Decay System:** The water meter ticks down automatically over time, changing your plant's state from thriving to okay, thirsty, and ultimately wilted.
- **Interactive Care Loop:** Water your plant to restore its health, triggering a temporary cooldown timer before the next watering action is allowed.
- **Dynamic Animations & States:** Renders custom pixel art GIFs corresponding to the current mood and health of the plant.

## 📂 Project Architecture
* `main.js`: Configures the main Electron browser window bounds, transparency, frameless behavior, and IPC event handlers for window controls.
* `index.html`: The structural markup containing the custom title bar, plant zone, water progress bar, and action buttons.
* `script.js`: Manages the application state, countdown timers, UI renders, decay intervals, and button event listeners.
* `style.css`: Defines the pixel-art aesthetic layout, colors, tags, and button states.
* `package.json`: Project manifest defining dependencies (`electron`, `electron-reload`) and start scripts.

## 📚 What I Learned
* **Desktop App Development:** How to configure native desktop window properties using Electron, including transparency, frame removal, and window dragging.
* **Inter-Process Communication (IPC):** Setting up communication channels using `ipcMain` and `ipcRenderer` to bridge front-end window buttons with native window actions.
* **State & Loop Management:** Implementing continuous simulation logic using JavaScript intervals to handle attribute draining and action cooldown timers.

## 🔮 Future Improvements
- [ ] A save system using local storage so your plant's progress persists even after closing the app.
- [ ] Notifications that pop up when your plant needs water, even if the app is minimized.
- [ ] Sound effects for watering or wilting.

## 🚀 How to Run

1. **Install dependencies:**
   Make sure you have Node.js installed, then run:
   ```bash
   npm install
   ```

2. **Start the application:**
   Launch the desktop app using the development script:
   ```bash
   npm start
   ```

## 👏 Credits
This application was created following the **[Build a Plant Buddy with Electron](https://www.codedex.io/projects/build-a-plant-buddy-with-electron)** project guide on **[Codédex](https://www.codedex.io/)**. All assets and core concepts belong to their respective creators.
