// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardsLocate = document.querySelector('.cards-container')
axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response)
        Object.values(response.data.articles).forEach(topic => {
            topic.forEach(info => {
                cardsLocate.appendChild(cardsCreator(info));
            });
        });
    })
    .catch(error => {
        console.log('error!!')
    })

const cardsCreator = (data) => {
//Elements
const card = document.createElement('div');
const headline = document.createElement('div');
const authorDiv = document.createElement('div');
const imgCont = document.createElement('div');
const image = document.createElement('img');
const authName = document.createElement('span');

//Tree
card.appendChild(headline);
card.appendChild(authorDiv);

authorDiv.appendChild(imgCont);
authorDiv.appendChild(authName);

imgCont.appendChild(image);

//Classes
card.classList.add('card');
headline.classList.add('headline');
authorDiv.classList.add('author');
imgCont.classList.add('img-container');

//Content
headline.textContent = data.headline;
image.src = data.authorPhoto;
authName.textContent = data.authorName;

return card;

}
