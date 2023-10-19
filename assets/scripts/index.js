function showGamePage() {
  const landingpage = document.querySelector('.landing-page');
  const gamePage = document.querySelector('.game-page');
  const overlay = document.querySelector('.overlay');

  landingpage.classList.add('hidden');
  gamePage.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function closeModal() {
  const overlay = document.querySelector('.overlay'); 
  overlay.classList.add('hidden');
}