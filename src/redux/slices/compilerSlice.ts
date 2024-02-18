import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/react";

export interface CompilerSliceStateType {
  fullCode: {
    html: string;
    css: string;
    javascript: string;
  };
  currentLanguage: "html" | "css" | "javascript";
  isOwner: boolean;
}

const initialState: CompilerSliceStateType = {
  fullCode: {
    html: <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Word Search Game</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="app">
    <button id="startBtn">Start Game</button>
  </div>
  <script src="script.js"></script>
</body>
</html>


#app {
  display: grid;
  gap: 2px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(10, 40px);
  gap: 2px;
}

.grid-item {
  border: 1px solid #ccc;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  background-color: #fff;
}

.selected {
  background-color: #ffff99; /* Light yellow */
}

#startBtn {
  padding: 10px 20px;
  font-size: 18px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

#startBtn:hover {
  background-color: #45a049; /* Darker green */
}

/* Add the following CSS styles */
.congratulations {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #4CAF50; /* Green */
  color: white;
  padding: 20px;
  border-radius: 10px;
  font-size: 24px;
  animation: slideIn 1s ease;
}

@keyframes slideIn {
  0% { opacity: 0; transform: translateY(-50px); }
  100% { opacity: 1; transform: translateY(0); }
}

#foundWords {
  margin-top: 20px;
}

#foundWords li {
  font-size: 18px;
  margin-bottom: 5px;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#app {
  display: grid;
  gap: 2px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(10, 40px);
  gap: 2px;
}

.grid-item {
  border: 1px solid #ccc;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  background-color: #fff;
}

.selected {
  background-color: #ffff99; /* Light yellow */
}

#startBtn {
  padding: 10px 20px;
  font-size: 18px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

#startBtn:hover {
  background-color: #45a049; /* Darker green */
}

/* Add the following CSS styles */
.congratulations {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #4CAF50; /* Green */
  color: white;
  padding: 20px;
  border-radius: 10px;
  font-size: 24px;
  animation: slideIn 1s ease;
}

@keyframes slideIn {
  0% { opacity: 0; transform: translateY(-50px); }
  100% { opacity: 1; transform: translateY(0); }
}

#foundWords {
  margin-top: 20px;
}

#foundWords li {
  font-size: 18px;
  margin-bottom: 5px;
}


    `,
    javascript: `
  const words = ['javascript', 'html', 'css', 'react', 'node', 'angular', 'vue', 'typescript'];

const gridSize = 10;
let grid = [];

function createGrid() {
  grid = [];
  // Generate random letters grid
  for (let i = 0; i < gridSize; i++) {
    const row = [];
    for (let j = 0; j < gridSize; j++) {
      const randomChar = String.fromCharCode(65 + Math.floor(Math.random() * 26));
      row.push(randomChar);
    }
    grid.push(row);
  }

  // Place words horizontally or vertically
  words.forEach(word => {
    const orientation = Math.random() < 0.5 ? 'horizontal' : 'vertical';
    const wordLength = word.length;
    let startX, startY;

    if (orientation === 'horizontal') {
      startX = Math.floor(Math.random() * (gridSize - wordLength));
      startY = Math.floor(Math.random() * gridSize);
    } else {
      startX = Math.floor(Math.random() * gridSize);
      startY = Math.floor(Math.random() * (gridSize - wordLength));
    }

    for (let i = 0; i < wordLength; i++) {
      if (orientation === 'horizontal') {
        grid[startY][startX + i] = word[i];
      } else {
        grid[startY + i][startX] = word[i];
      }
    }
  });

  renderGrid();
}

function renderGrid() {
  const app = document.getElementById('app');
  app.innerHTML = '';

  grid.forEach(row => {
    const rowElement = document.createElement('div');
    rowElement.classList.add('grid-container');
    row.forEach(char => {
      const cell = document.createElement('div');
      cell.textContent = char;
      cell.classList.add('grid-item');
      rowElement.appendChild(cell);
    });
    app.appendChild(rowElement);
  });

  // Handle cell selection
  const cells = document.querySelectorAll('.grid-item');
  cells.forEach(cell => {
    cell.addEventListener('click', () => {
      cell.classList.toggle('selected');
      checkWords();
    });
  });
}

// Check if any word is formed
// Check if any word is formed
function checkWords() {
  const selectedCells = document.querySelectorAll('.selected');
  const selectedWord = Array.from(selectedCells).map(cell => cell.textContent).join('');

  words.forEach(word => {
    if (selectedWord.includes(word)) {
      alert(`You found the word "${word}"!`);
      animateCongratulations();
      selectedCells.forEach(cell => cell.classList.remove('selected'));
      showFoundWord(word);
    }
  });
}

// Function to show a cool animation when the player finds a word
function animateCongratulations() {
  const app = document.getElementById('app');
  const congratulations = document.createElement('div');
  congratulations.textContent = 'Congratulations!';
  congratulations.classList.add('congratulations');
  app.appendChild(congratulations);
  setTimeout(() => {
    congratulations.remove();
  }, 2000); // Remove the message after 2 seconds
}

// Function to show the words found by the player
function showFoundWord(word) {
  const foundWords = document.getElementById('foundWords');
  const wordElement = document.createElement('li');
  wordElement.textContent = word;
  foundWords.appendChild(wordElement);
}

// Start game button event listener
const startBtn = document.getElementById('startBtn');
startBtn.addEventListener('click', () => {
  createGrid();
  document.getElementById('foundWords').innerHTML = ''; // Clear found words list
});


export default compilerSlice.reducer;
export const {
  updateCurrentLanguage,
  updateCodeValue,
  updateFullCode,
  updateIsOwner,
} = compilerSlice.actions;
