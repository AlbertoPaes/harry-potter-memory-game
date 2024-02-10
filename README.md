<div align="center"><img style = "width:100%;"src="https://imgur.com/9PiPksJ.png"></img></div>
<hr>
<h2 align=center>Harry Potter: Memory Game - Concentration/Memory game</h2>
<h3 align=center>Web development Project</h3>
<hr>
<div align=center>
<h4>A concentration/memory card game web-app made with HTML, CSS3 and Vanilla JavaScript.</h4>
<h4>The game consists in finding the matches for all cards in the fewest attempts. The player turns 2 cards at a time, trying to find a match. If the cards are different, they get back in the original position and the player proceeds to try again.</h4>
</div>
<br>
<div align=center style="display:flex; justify-content: center;">
    <img style = "height:250px;" src="https://i.imgur.com/qv76VEh.gif&ct=g" alt="Game demo">
</div>
<br><hr>

## Features

- User can choose the game mode
- Cards put randomly on the table
- CSS animations for turning the cards
- Time counter
- Attempts counter
- You can restart the game
- Memes are displayed when you achieve a hit

## Requirements

-  General
    - [x]  Use vanilla JavaScript only
    - [x]  The project must be stored in a public repository on GitHub
    - [x]  Commit every new feature
- Layout
    - [x]  Apply the mobile and desktop layout
- Card distribution
    - [x]  Upon entering the game, the user must choose a game mode (easy, medium, hard) that will determine the number of cards they will play with
    - [x]  The game must have an even number of cards for each game mode. The 'easy' mode should have 6 cards, the 'medium' mode should have 10 cards, and the 'hard' mode should have 14 cards
    - [x]  After selecting the game mode, the cards should be placed facedown on the page in a manner that ensures a random distribution 
- Card click
    - [x]  On clicking a card, it must be turned
    - [x]  If it's the first card of the round, the card must remain turned until the second card is choose
    - [x]  When the second card is chose, there will be 2 situations
        - [x]  If the second card matches the first, both of them must remain turned for the last of the game 
        - [x]  If the second card is different from the first, it means the player is wrong. The game must wait 1 second before turning the cards back to the original position
- End of the game
  - [x] When the user finishes turning all cards correctly, a modal should be displayed with a victory message, indicating the number of moves the user took (moves being the number of times the user flipped a card during the game). Additionally, the modal should show the amount of time the user took to win from the start of the game (when they clicked the first card)
  - [x] The modal must include a button to be used for closing it
- Memes sidebar
  - [x] Each pair of matching cards revealed should display a Harry Potter meme in the sidebar
  - [x] When a new pair of matching cards is revealed, a new meme should be rendered
        
## Project management
<br>
<div align=center style="display:flex; justify-content: center;">
    <img style = "height:250px;" src="https://imgur.com/LV4nD3b.gif" alt="Project management">
    
</div>
<br><hr>

### Built with

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

### Contact

[![LinkedIn][linkedin-shield]][linkedin-url]
[![Gmail][gmail-shield]][gmail-url]


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=blue
[linkedin-url]: https://www.linkedin.com/in/alberto-paes/

[gmail-shield]: https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white
[gmail-url]: mailto:albertopaes11@gmail.com