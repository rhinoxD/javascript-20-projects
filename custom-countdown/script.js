const countdownForm = document.getElementById('countdownForm');
const inputContainer = document.getElementById('input-container');
const dateEl = document.getElementById('date-picker');

let countdownTitle = '';
let countdownDate = '';
let savedCountdown;

// Set Date Input Min & Value with Today's Date
const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today);

function updateCountdown(e) {
  e.preventDefault();
  // Set title and date, save to localStorage
  countdownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;
}

// Event Listener
countdownForm.addEventListener('submit', updateCountdown);
