// Import stylesheets
import './style.css';
import { Cookie } from './models/Cookie';

// Create a array/list of cookies named cookies
let cookies: Cookie[] = [];
init();

// create an init() function
// init() will create two cookies called Cookie1 and Cookie2, and add them to the array of cookies
function init() {
  //TODO: add code here
  // create the two cookies
  let Cookie1: Cookie = new Cookie('Cookie1');
  let Cookie2: Cookie = new Cookie('Cookie2');

  // add them to the array
  cookies.push(Cookie1, Cookie2);

  // add them as options in the select/dropdown (cookieSelector) element
  let addCookieOption;
  for (let i in cookies) {
    addCookieOption += `<option value="${cookies[i].name}">${cookies[i].name}</option>`;
  }

  (document.getElementById('cookieSelector') as HTMLOptionElement).innerHTML =
    addCookieOption;

  // initialise the cookieColour-inp to the colour of the first cookie created
  (
    document.getElementById('cookieColour-inp') as HTMLInputElement
  ).value = `${cookies[0].colour}`;

  updateDisplay();
}

//TODO: this function needs to go through the list of cookies and draw them to cookiesDiv
// create the cookies as divs with the class name of cookie - see style.css
// number of chocolatechips needs to be shown on the cookie
function drawCookies() {
  let cookieDiv: string = '';
  for (let i in cookies) {
    cookieDiv += `<div class="cookie" style="background-color: ${cookies[i].colour}">${cookies[i].chocolateChipNum}</div>`;
  }
  (document.getElementById('cookiesDiv') as HTMLDivElement).innerHTML =
    cookieDiv;
}

//TODO: this function needs to be triggered by button changeColour-btn
// upon pressing the button it should change the colour of the cookie selected in the dropdown to the colour typed in the input element (cookieColour-inp)
const changeColourBtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById('changeColour-btn');
changeColourBtn.addEventListener('click', changeColour)

function changeColour() {
  let cookieColourInput = (
    document.getElementById('cookieColour-inp') as HTMLInputElement
  ).value;
  let cookieSelectorValue = (
    document.getElementById('cookieSelector') as HTMLInputElement
  ).value;
  
  for(let i: number = 0; i < cookies.length; i++) {
    if(cookieSelectorValue === `Cookie${i + 1}`) {
      cookies[i].colour = cookieColourInput;
      break;
    }
  }

  updateDisplay();
}

//TODO: this function needs to be triggered by button addChocolateChip-btn
// upon pressing the button it should add a chocolate chip to cookies selected from the dropdown
const addChocolateChipBtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById('addChocolateChip-btn');
addChocolateChipBtn.addEventListener('click', addChocolateChip)

function addChocolateChip() {
  let cookieSelectorValue = (
    document.getElementById('cookieSelector') as HTMLInputElement
  ).value;

  for(let i: number = 0; i < cookies.length; i++) {
    if(cookieSelectorValue === `Cookie${i + 1}`) {
      cookies[i].chocolateChipNum++;
      break;
    }
  }
  updateDisplay();
}

function updateDisplay() {
  drawCookies();
}
