// Get elements
const loanAmountSlider = document.getElementById('loanAmountSlider');
const loanAmountInput = document.getElementById('loanAmount');
const loanAmountDisplay = document.getElementById('loanAmountDisplay');
const interestRateSlider = document.getElementById('interestRateSlider');
const interestRateInput = document.getElementById('interestRate');
const interestRateDisplay = document.getElementById('interestRateDisplay');
const loanTenureSlider = document.getElementById('loanTenureSlider');
const loanTenureInput = document.getElementById('loanTenure');
const loanTenureDisplay = document.getElementById('loanTenureDisplay');
const emiValue = document.getElementById('emiValue');

// Function to update values and slider positions
function updateValuesAndUpdateSlider(slider, input, display) {
  input.addEventListener('input', function() {
    slider.value = this.value;
    display.textContent = `₹${this.value}`;
    calculateEMI();
  });

  slider.addEventListener('input', function() {
    input.value = this.value;
    display.textContent = `₹${this.value}`;
    calculateEMI();
  });
}

// Update loan amount
updateValuesAndUpdateSlider(loanAmountSlider, loanAmountInput, loanAmountDisplay);

// Update interest rate
updateValuesAndUpdateSlider(interestRateSlider, interestRateInput, interestRateDisplay);

// Update loan tenure
updateValuesAndUpdateSlider(loanTenureSlider, loanTenureInput, loanTenureDisplay);

// Calculate EMI
function calculateEMI() {
  const principal = parseFloat(loanAmountInput.value);
  const rate = parseFloat(interestRateInput.value) / 100 / 12;
  const time = parseFloat(loanTenureInput.value);

  const emi = (principal * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1);
  emiValue.textContent = `₹${emi.toFixed(2)}`;
}
