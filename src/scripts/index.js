const buttonsContainer = document.querySelector('.buttons');
const startButton = document.querySelector('.start-button');
const gamePage = document.querySelector('.game-page');

let firstCard;
let secondCard;

let moves = 0;
let hits = 0;


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
  let cardsQuantity = 0;
  cardsQuantity = cards;

  const overlay = document.querySelector('.overlay'); 
  overlay.classList.add('hidden');

  gamePage.classList.remove('show-background');

  getGameBoard(cardsQuantity);
}

const turnCardsDown = () => {
  firstCard.classList.remove('flip');
  secondCard.classList.remove('flip');
  firstCard = undefined;
  secondCard = undefined;
}

const flipCard = (selectedCard) => {
  if(selectedCard.classList.contains('flip')) {
    return;
  }

  if (firstCard !== undefined) {
    if (secondCard !== undefined) {
      return;
    }
  }

  moves++;
  selectedCard.classList.add('flip');

  const isfirstCard = firstCard === undefined;
  if (isfirstCard) {
    firstCard = selectedCard;
    return;
  } 

  secondCard = selectedCard;

  const differentCards = firstCard.innerHTML !== secondCard.innerHTML;
  if(differentCards) {
    setTimeout(turnCardsDown, 1000);
    return;
  }

  firstCard = undefined;
  secondCard = undefined;
  hits++;

}

const cards = [
  "bobrossparrot",
  "explodyparrot",
  "fiestaparrot",
  "metalparrot",
  "revertitparrot",
  "tripletsparrot",
  "unicornparrot",
];

const getGameBoard = (cardsQuantity) => {
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





buttonsContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('game-mode')) {
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
startButton.addEventListener('click', showGamePage);
