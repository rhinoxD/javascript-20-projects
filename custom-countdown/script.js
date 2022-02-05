const countdownForm = document.getElementById('countdownForm');
const inputContainer = document.getElementById('input-container');
const dateEl = document.getElementById('date-picker');

// Set Date Input Min & Value with Today's Date
const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today);
