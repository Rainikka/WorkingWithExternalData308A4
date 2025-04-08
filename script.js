/******************************************/
/************ Rainikka Corprew ************/
/*************** JavaScript ***************/
/**************** BOM 316.2 ***************/
/******************************************/

/******************************************/
/****** Accessing External API Data *******/
/************ with JavaScript *************/
/************** 04-APR-2025 ***************/

/************* Objectives *****************
 * 
 * 1. Request data from an external API using 
 * fetch and Axios.
 * 2. Create an interactive, dynamic webpage 
 * that serves content from an external API.
 * 3. Use async/await and Promises to create
 * synchronous logic in asynchronous actions. 
 * 4. Using fetch or Axios, POST data to and 
 * DELETE data from an external API.
 * 
 /******************************************/
// Step 0: Store your API key here for reference and easy access.
const API_KEY = "live_9Yc7HBBvJHIIs1QOg4wnQPUHeiENtsyop8i6yCKT41NaEmfbm7nJx2v8JuCDxDsZ";

/************* Body Selector **************/
const body = document.querySelector("body");

/******************************************/
/************ TESTING AREA ****************/
// document.getElementById('test0');
// test0.innerHTML = "picA";
// document.getElementById('test1');
// test1.innerHTML = "picB";
// document.getElementById('test2');
// test2.innerHTML = "picC";
/******************************************/
/******************************************/

/******** Knowledge Inspiration:YouTube::LearnWebCode *********/
/********************* Elements Created **********************/

/*** Fetch Data List of Dog Breeds */
async function start() {
  const response = await fetch("https://dog.ceo/api/breeds/list/all")
  const data = await response.json()
  buildBreedList(data.message)
}
start();

/**** Create Dropdown Select Tool ****/
function buildBreedList(breedList) {
  /*** Create Section & Select ***/
  const selectSect = document.getElementById('selectSect');
  const breedSelect = selectSect.appendChild(document.createElement('select'));
  breedSelect.id = 'breedSelect';

  /*** Populate Select With API Breed Data ***/
  breedSelect.onchange = function () {
    breedProfile(breedSelect.value);
  };

  /*** Option0: Select Breed Prompt ***/
  const option0 = breedSelect.appendChild(document.createElement('option'));
  option0.id = 'option0';
  option0.textContent = 'Choose Dog Breed';

  /*** Option for Each Breed on the  List ***/
  Object.keys(breedList).forEach(breed => {
    const option = breedSelect.appendChild(document.createElement('option'));
    console.log(breed);
    option.innerHTML = breed;
  });
}

async function breedProfile(breed) {
  if (breed != "Choose Dog Breed") {
    const { data } = await axios.get(`https://dog.ceo/api/breed/${breed}/images`);
    // return data.message
    return createSlideShow(data.message)
  }
}

function createSlideShow(images) {
  document.getElementById('slideshow').innerHTML = `
  <div class="slide" style="background-image: url(${images[0]})">`;
}