// import functions and grab DOM elements
const button1 = document.getElementById('shell-1-button');
const button2 = document.getElementById('shell-2-button');
const button3 = document.getElementById('shell-3-button');

const shell1 = document.getElementById('shell-1');
const shell2 = document.getElementById('shell-2');
const shell3 = document.getElementById('shell-3');



// let state

// set event listeners 

button1.addEventListener('click', () => {
  shell1.classList.add('reveal');
  shell2.classList.remove('reveal');
  shell3.classList.remove('reveal');

})
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
