const personGenerator = document.getElementById('person');
const planetGenerator = document.getElementById('planet');
const shipGenerator = document.getElementById('ship');
const personParagraph = document.getElementById('personinfo');
const planetParagraph = document.getElementById('planetinfo');
const shipParagraph = document.getElementById('shipinfo');
const getRandomInt = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

personGenerator.addEventListener('click', async function() {
  try {
    let number = getRandomInt(1, 80)
    let response = await fetch(`https://swapi.co/api/people/${number}`);
    if (response.status === 404) {
      throw '404 not found';
    }
    let data = await response.json();
    personParagraph.textContent = data.name;
  } catch (err){
    console.log('oooooops', err);
    personParagraph.textContent = 'OOPS: ERROR!';
  }
});

planetGenerator.addEventListener('click', async function() {
  try {
    let number = getRandomInt(1, 60)
    let response = await fetch(`https://swapi.co/api/planets/${number}`);
    if (response.status === 404) {
      throw '404 not found';
    }
    let data = await response.json();
    planetParagraph.textContent = data.name
  } catch (err) {
    console.log('oooooops', err);
    planetParagraph.textContent = 'OOPS: ERROR!';
  }
});

shipGenerator.addEventListener('click', async function() {
  try {
    let number = getRandomInt(1, 40)
    let response = await fetch(`https://swapi.co/api/starships/${number}`);
    if (response.status === 404) {
      throw '404 not found';
    }
    let data = await response.json();
    shipParagraph.textContent = data.name;
  } catch (err){
    console.log('oooooops', err);
    shipParagraph.textContent = 'OOPS: ERROR!';
  }
});