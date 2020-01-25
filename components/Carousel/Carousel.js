/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const carouselHere = document.querySelector('.carousel-container')
carouselHere.appendChild(carouselCreator())

const carouselCreator = () => {
//ELements
const carousel = document.createElement('div');
const leftBut = document.createElement('div');
const mountains = document.createElement('img');
const computer = document.createElement('img');
const trees = document.createElement('img');
const turntable = document.createElement('img');
const rightBut = document.createElement('div');

//Tree
carousel.appendChild(leftBut)
carousel.appendChild(mountains)
carousel.appendChild(computer)
carousel.appendChild(trees)
carousel.appendChild(turntable)
carousel.appendChild(rightbut)

//Classes
carousel.classList.add('carousel');
leftBut.classList.add('left-button');
rightBut.classList.add('right-button');

//Content
mountains.src = 'https://www.freepik.com/free-photo/beautiful-landscape_1468389.htm#page=1&query=Mountains&position=0;'
computer.src = 'https://www.freepik.com/free-photo/cropped-view-hands-typing-laptop_1121914.htm#page=1&query=Computer&position=0';
trees.src = 'https://www.freepik.com/free-photo/beautiful-natural-landscape_880912.htm#page=1&query=trees&position=5';
turntable.src = 'https://www.freepik.com/free-photo/spinning-record-player-with-vintage-vinyl_5896977.htm#page=1&query=Turntable&position=11';

leftBut.addEventListener('click', (event) => {
  event.targer.classList.toggle('');
});

rightBut.addEventListener('click', (event) => {
  event.targer.classList.toggle('');
});
return carousel

}

  