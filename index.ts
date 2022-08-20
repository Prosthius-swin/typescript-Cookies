// Import stylesheets
import './style.css';
import { Cookie } from './models/Cookie';

// Create a array/list of cookies named cookies
let cookies: Cookie[];

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
    `<option value="${cookies[i].name}">${cookies[i].name}</option>`;
  }

  let dropDownOptions = ((
    document.getElementById('cookieSelector') as HTMLOptionElement
  ).innerHTML = addCookieOption);

  // initialise the cookieColour-inp to the colour of the first cookie created
  // (document.getElementById('cookieColour-inp') as HTMLInputElement).innerHTML =

  updateDisplay();
}

//TODO: this function needs to go through the list of cookies and draw them to cookiesDiv
// create the cookies as divs with the class name of cookie - see style.css
// number of chocolatechips needs to be shown on the cookie
function drawCookies() {}

//TODO: this fuction needs to be triggered by button changeColour-btn
// upon pressing the button it should change the colour of the cookie selected in the dropdown to the colour typed in the input element (cookieColour-inp)
function changeColour() {
  updateDisplay();
}

//TODO: this function needs to be triggered by button addChocolateChip-btn
// upon pressing the button it should add a chocolate chip to cookies selected from the dropdown
function addChocolateChip() {
  updateDisplay();
}

function updateDisplay() {
  drawCookies();
}
