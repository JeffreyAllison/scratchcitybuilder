// import functions and grab DOM elements
const cityNameInput = document.getElementById('city-name-input');
const cityNameEl = document.getElementById('city-name');
const waterDropdown = document.getElementById('water-dropdown');
const cityDropdown = document.getElementById('city-dropdown');
const ruralDropdown = document.getElementById('rural-dropdown');
const counterMessageEl = document.getElementById('count-message');
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

  displayCitySlogans();

  sloganInputEl.value = '';
});

cityNameInput.addEventListener('input', () => {

  cityNameEl.textContent = cityNameInput.value;
});

waterDropdown.addEventListener('change', () => {
  waterCount++;
  waterImgEl.src = `assets/water-${waterDropdown.value}.png`;
  displayCounterText();
});

cityDropdown.addEventListener('change', () => {
  cityCount++;
  cityImgEl.src = `assets/city-${cityDropdown.value}.png`;
  displayCounterText();
});

ruralDropdown.addEventListener('change', () => {
  ruralCount++;
  ruralImgEl.src = `assets/rural-${ruralDropdown.value}.png`;
  displayCounterText();
});


function displayCounterText() {
  counterMessageEl.textContent = `You updated the water image ${waterCount} times, the city image ${cityCount} times, and the rural image ${ruralCount} times`;
}

function displayCitySlogans() {
  const citySloganlistEl = document.getElementById('list');

  citySloganlistEl.textContent = '';

  for (let slogan of slogans) {
    const div = document.createElement('div');

    div.classList.add('slogan');
    div.textContent = slogan;
    citySloganlistEl.append(div);


  }
}
  // get user input
  // use user input to update state
  // update DOM to reflect the new state 
