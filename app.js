// import functions and grab DOM elements
const cityNameInput = document.getElementById('city-name-input');
const cityNameEl = document.getElementById('city-name');
const waterDropdown = document.getElementById('water-dropdown');
const cityDropdown = document.getElementById('city-dropdown');
const ruralDropdown = document.getElementById('rural-dropdown');
const countMessageEl = document.getElementById('count-message');
const waterImgEl = document.getElementById('water-img');
const cityImgEl = document.getElementById('city-img');
const ruralImgEl = document.getElementById('rural-img');
const addSloganButton = document.getElementById('add-slogan-button');
const sloganInputEl = document.getElementById('slogan-input');

// let state
let waterCount = 0;
let cityCount = 0;
let ruralCount = 0;
const slogans = [];

// set event listeners 







addSloganButton.addEventListener('click', () => {

  const citySlogans = sloganInputEl.value;

  slogans.push(citySlogans);

  citySloganInput.value = '';

  displayCitySlogans();
});

function displayCitySlogans() {
  slogan
}
  // get user input
  // use user input to update state
  // update DOM to reflect the new state 
