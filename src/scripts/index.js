const buttonsContainer = document.querySelector('.buttons');
const startButton = document.querySelector('.start-button');
const restartButton = document.querySelector('.restart-button');
const gamePage = document.querySelector('.game-page');

const playingTimeDisplay = document.querySelector('.playing-time');
let timer;
let seconds = 0;
let minutes = 0;

let cardsQuantity = 0;
let firstCard;
let secondCard;

let moves = 0;
let hits = 0;

const startTimer = () => {
  timer = setInterval(() => {
    seconds++;

    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }

    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    playingTimeDisplay.innerText = formattedTime;
  }, 1000);

  return timer; // Retorna o ID do temporizador para uso posterior
};

const stopTimer = () => {
  clearInterval(timer);
};

const resetTimer = () => {
  stopTimer();
  seconds = 0;
  minutes = 0;
  playingTimeDisplay.innerText = '00:00';
};

const endGame = () => {
  const endGameOverlay = document.querySelector('.end-game-overlay');
  endGameOverlay.classList.remove('hidden');


  const modalEndGame = document.createElement("div");
  modalEndGame.classList.add('modal-end-game');

  const modalIcon = document.createElement("div");
  modalIcon.classList.add("modal-icon", "modal-icon--sucess");

  const spanModalIcon = document.createElement("span");
  spanModalIcon.classList.add("modal-icon--success__line", "modal-icon--success__line--long");

  const spanModalIcon2 = document.createElement("span");
  spanModalIcon2.classList.add("modal-icon--success__line", "modal-icon--success__line--tip");

  const divModalIcon = document.createElement("div");
  divModalIcon.classList.add("modal-icon--success__ring");

  const divModalIcon2 = document.createElement("div");
  divModalIcon2.classList.add("modal-icon--success__hide-corners");

  modalIcon.appendChild(spanModalIcon);
  modalIcon.appendChild(spanModalIcon2);
  modalIcon.appendChild(divModalIcon);
  modalIcon.appendChild(divModalIcon2);

  const modalTitle = document.createElement("div");
  modalTitle.classList.add("modal-title");
  modalTitle.innerText = "CONGRATULATIONS!";

  const modalText = document.createElement("div");
  modalText.classList.add("modal-text");

  const modalTextSpanMoves = document.createElement("span");
  modalTextSpanMoves.innerText = `Moves: ${moves}`;

  const modalTextSpanTime = document.createElement("span");
  modalTextSpanTime.innerText = `Time: ${playingTimeDisplay.innerText}`;

  modalText.appendChild(modalTextSpanMoves);
  modalText.appendChild(modalTextSpanTime);

  const modalFooter = document.createElement("div");
  modalFooter.classList.add("modal-footer");

  const modalButtonContainer = document.createElement("div");
  modalButtonContainer.classList.add("modal-button-container");

  const modalButton = document.createElement("button");
  modalButton.classList.add("modal-button");
  modalButton.innerText = "OK";
  modalButton.addEventListener('click', () => {
    endGameOverlay.classList.add('hidden');
  })

  modalButtonContainer.appendChild(modalButton);

  modalFooter.appendChild(modalButtonContainer);

  modalEndGame.appendChild(modalIcon);
  modalEndGame.appendChild(modalTitle);
  modalEndGame.appendChild(modalText);
  modalEndGame.appendChild(modalFooter);


  endGameOverlay.appendChild(modalEndGame);

}

const checkGameOver = () => {
  if(hits === cardsQuantity / 2) {
    stopTimer();
    setTimeout(endGame, 500);
  }
}

const shuffleCards = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const showGamePage = () => {
  const landingpage = document.querySelector('.landing-page');
  const overlay = document.querySelector('.overlay');

  landingpage.classList.add('hidden');
  gamePage.classList.remove('hidden');
  gamePage.classList.add('show-background');
  overlay.classList.remove('hidden');
}

const closeModal = (cards) => {
  cardsQuantity = cards;

  const overlay = document.querySelector('.overlay'); 
  overlay.classList.add('hidden');

  const gameContent = document.querySelector('.game-content');

  gamePage.classList.remove('show-background');
  gameContent.classList.remove('hidden');

  getGameBoard(cardsQuantity);
}

const turnCardsDown = () => {
  firstCard.classList.remove('flip');
  secondCard.classList.remove('flip');
  firstCard = undefined;
  secondCard = undefined;
}

const curiosities = [
  "meme_01",
  "meme_02",
  "meme_03",
  "meme_04",
  "meme_05",
  "meme_06",
  "meme_07",
  "meme_08",
  "meme_09",
  "meme_10",
  "meme_11",
  "meme_12",
  "meme_13",
  "meme_14",
  "meme_15",
];


const flipCard = (selectedCard) => {
  const displayMoves = document.querySelector('.moves');

  const imgCuriosities = document.querySelector('.curiosities');

  if(selectedCard.classList.contains('flip')) {
    return;
  }

  if (firstCard !== undefined) {
    if (secondCard !== undefined) {
      return;
    }
  }

  moves++;
  displayMoves.innerText = "";
  displayMoves.innerText = `MOVES: ${moves}`;

  selectedCard.classList.add('flip');

  const isfirstCard = firstCard === undefined;
  if (isfirstCard) {
    firstCard = selectedCard;

    if (timer === undefined) {
      timer = startTimer();
    }

    return;
  } 

  secondCard = selectedCard;

  const differentCards = firstCard.innerHTML !== secondCard.innerHTML;
  if(differentCards) {
    setTimeout(turnCardsDown, 1000);
    return;
  }

  const randomIndex = Math.floor(Math.random() * curiosities.length);
  const randomCuriosity = curiosities[randomIndex];
  curiosities.splice(randomIndex, 1);


  imgCuriosities.src = `../../assets/images/curiosities/${randomCuriosity}.jpg`;
  imgCuriosities.alt = randomCuriosity;

  firstCard = undefined;
  secondCard = undefined;
  hits++;
  checkGameOver();
}

const cards = [
  "harry",
  "hermione",
  "ron",
  "voldemort",
  "sirius",
  "dumbledore",
  "bellatrix",
  "malfoy",
  "snape",
  "hagrid",
  "luna",
  "neville",
  "mcgonagall",
];

const getGameBoard = (cardsQuantity) => {
  stopTimer();

  const drawnCards = shuffleCards(cards);
  let cardsArrangement = [];

  const gameBoard = document.querySelector('.game-board');
  gameBoard.innerHTML = '';

  for (let i = 0; i < cardsQuantity / 2; i++) {
    const selectedCard = drawnCards[i];

    cardsArrangement.push(selectedCard);
    cardsArrangement.push(selectedCard);
  }
  cardsArrangement = shuffleCards(cardsArrangement);

  for(let i=0; i<cardsArrangement.length; i++) {
    const card = document.createElement('li');
    card.classList.add('card');
    card.setAttribute('data-identifier', 'card');

    const frontFace = document.createElement('div');
    frontFace.classList.add('front-face', 'card-face');
    frontFace.setAttribute('data-identifier', 'front-face');

    const frontFaceImage = document.createElement('img');
    frontFaceImage.src = '../../assets/images/front.png';
    frontFace.appendChild(frontFaceImage);

    const backFace = document.createElement('div');
    backFace.classList.add('back-face', 'card-face');
    backFace.setAttribute('data-identifier', 'back-face');

    const backFaceImage = document.createElement('img');
    backFaceImage.src = `../../assets/images/${cardsArrangement[i]}.gif`;
    backFaceImage.alt = cardsArrangement[i];
    backFace.appendChild(backFaceImage);

    card.appendChild(frontFace);
    card.appendChild(backFace);

    gameBoard.appendChild(card);

  }
  
  gameBoard.addEventListener('click', (event) => {
    if(event.target.classList.contains('card-face')) {
      flipCard(event.target.parentNode);
    }
  })
}



startButton.addEventListener('click', showGamePage);
restartButton.addEventListener('click', () => {
  resetTimer();
  document.location.reload(true);
});


buttonsContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('btn_game-mode')) {
    if(event.target.classList.contains('easy')) {
      closeModal(6);
    }
    if(event.target.classList.contains('medium')) {
      closeModal(10);
    }
    if(event.target.classList.contains('hard')) {
      closeModal(14);
    }
  }
})
