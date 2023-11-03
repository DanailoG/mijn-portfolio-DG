// variabelen toevoegen
let images = []; // array kaarten
let cardBack; // variabel cardback
let positions = []; // array posities bepalen kaarten
let selectedCards = []; // array kaarten selecteren
let isCheckingMatch = false; // variabele match check-up kaarten
let gameStarted = false; // variabele voor game start
let startTime; // Time when the game starts
let endTime; // Time when the game ends
let highScore = Infinity; // Current high score (initially set to infinity)

// preload maken
function preload() {
  cardBack = loadImage('images/Memory/card-back.jpg'); // achterkant kaart
  table = loadImage('images/Memory/background.jpg'); // game achtergrond
  startBackground = loadImage('images/Memory/startgif.gif'); // startachtergrond
  images.push(loadImage('images/Memory/card-1.jpg')); // card 1
  images.push(loadImage('images/Memory/card-2.jpg')); // card 2
  images.push(loadImage('images/Memory/card-3.jpg')); // card 3
  images.push(loadImage('images/Memory/card-4.jpg')); // card 4
  images.push(loadImage('images/Memory/card-5.jpg')); // card 5
  images.push(loadImage('images/Memory/card-6.jpg')); // card 6
  images.push(loadImage('images/Memory/card-7.jpg')); // card 7
  images.push(loadImage('images/Memory/card-8.jpg')); // card 8
  images.push(loadImage('images/Memory/card-9.jpg')); // card 9
}

// setup maken
function setup() {
  createCanvas(1125, 750); // canvas maken
  noStroke(); // stroke weghalen
}

// functie om het spel te starten
function startGame() {
  let cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 0, 1, 2, 3, 4, 5, 6, 7, 8]; // array met kaartwaardes
  for (let i = cards.length - 1; i > 0; i--) { // kaarten schudden
    let j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  
  for (let i = 0; i < 3; i++) { // positites kaarten bepalen
    for (let j = 0; j < 6; j++) {
      positions.push({
        x: j * 180 + 33, // ruimte tussen kaarten op de x-as
        y: i * 210 + 50, // ruimte tussen kaarten op de y-as
        value: cards[i * 6 + j],
        flipped: false
      });
    }
  }
  
  startTime = millis(); // timer starten
  gameStarted = true; // spel gestart
}

// maak functie om match tussen kaarten te checken
function checkMatch() { 
  if (selectedCards[0].value === selectedCards[1].value) { // kaarten omgedraaid houden als het een match is
    selectedCards[0].flipped = true;
    selectedCards[1].flipped = true;
  } else { // geen match = terug naar cardBack
    selectedCards[0].flipped = false;
    selectedCards[1].flipped = false;
  }
  selectedCards = []; // reset selectedcards
  isCheckingMatch = false; // reset checkMatch 
}

// draw maken
function draw() {
  background(table);
  
  if (gameStarted) {
    // positie/grootte kaarten
    for (let i = 0; i < positions.length; i++) {
      let card = positions[i];
      if (card.flipped) {
        image(images[card.value], card.x, card.y, 150, 200);
      } else {
        image(cardBack, card.x, card.y, 150, 200);
        // selecteer kaart dat nog niet geselecteerd is
        if (!isCheckingMatch && mouseIsPressed && mouseX >= card.x && mouseX <= card.x + 150 && mouseY >= card.y && mouseY <= card.y + 200) {
          card.flipped = true;
          selectedCards.push(card);
          // timeout na kaarten selecteren
          if (selectedCards.length === 2) {
            isCheckingMatch = true;
            setTimeout(checkMatch, 1000);
          }
        }
      }
    }

    // checkWin functie
    function checkWin() {
      for (let i = 0; i < positions.length; i++) {
        if (!positions[i].flipped) {
          return false;
        }
      }
      return true;
    }

    // eindscherm maken
    if (checkWin()) {
      endTime = millis(); // timer stoppen
      let gameTime = (endTime - startTime) / 1000; // timer in seconden
      if (gameTime < highScore) {
        highScore = gameTime; // update highscore na elke game
      }
      
      // eindscherm met replay button
      background(table);
      textSize(48);
      fill(255, 0, 0);
      textAlign(CENTER, CENTER);
      textSize(60); 
      fill('green');
      text(`High Score: ${highScore.toFixed(2)} seconden`, width / 2, height / 2 - 50);
      
      // Replay button
      let replayButtonWidth = 200;
      let replayButtonHeight = 60;
      let replayButtonX = width / 2 - replayButtonWidth / 2;
      let replayButtonY = height / 2 + 50;
      
      fill(0, 150, 255);
      rect(replayButtonX, replayButtonY, replayButtonWidth, replayButtonHeight, 10);
      
      textSize(32);
      fill(255);
      textAlign(CENTER, CENTER);
      text("Replay", width / 2, height / 2 + 85);
      
      if (mouseIsPressed && mouseX >= replayButtonX && mouseX <= replayButtonX + replayButtonWidth && mouseY >= replayButtonY && mouseY <= replayButtonY + replayButtonHeight) {
        restartGame();
      }
    }
  } else {
    // startscherm draw
    background(startBackground);
    textSize(70);
    fill(200);
    textAlign(CENTER, CENTER);
    text("Memory: 5V boys edition", width / 2, height / 2.5);
    textSize(48);
    fill(150);
    textAlign(CENTER, CENTER);
    text("Druk op spatiebalk om te starten", width / 2, height / 1.35);
  }

  // timer functie
  if (gameStarted && !checkWin()) {
    let currentTime = (millis() - startTime) / 1000; // Calculate the current game time in seconds

    // timer rechtsboven in scherm
    textSize(24);
    fill(255);
    textAlign(RIGHT, TOP);
    text(`Time: ${currentTime.toFixed(2)} seconds`, width - 10, 10);
  }
}

// spatiebalk functie
function keyTyped() {
  if (key === ' ') {
    if (!gameStarted) {
      startGame();
    }
  }
}

// Function to restart the game
function restartGame() {
  positions = []; // Reset positie kaarten
  selectedCards = []; // Reset geselecteerde cards
  isCheckingMatch = false; // Reset match checking
  gameStarted = false; // game niet gestart
  startTime = 0; // reset timer
  startGame();
}


// replay button functie
function mouseClicked() {
  if (!gameStarted && mouseX >= replayButtonX && mouseX <= replayButtonX + replayButtonWidth && mouseY >= replayButtonY && mouseY <= replayButtonY + replayButtonHeight) {
    restartGame(); 
  }
}
