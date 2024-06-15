// Helpers
enum carTypes {
  BRAND_NEW,
  USED,
}

let carTypeInterestRates = {
  [carTypes.BRAND_NEW]: 2.99,
  [carTypes.USED]: 3.7,
};

// Set default values to variables
let selectedCarType: carTypes = carTypes.BRAND_NEW;
let selectedLeasePeriod: number = 12;
let selectedCarValue: number = Math.pow(10, 5);
let selectedDownPayment: number = 25;

// Get required objects from DOM
// Inputs
let carTypeDropdown = document.getElementById(
  "car-type-dropdown"
)! as HTMLInputElement;
let leasePeriodDropdown = document.getElementById(
  "lease-period-dropdown"
)! as HTMLInputElement;
let carValueInput = document.getElementById(
  "car-value-input"
)! as HTMLInputElement;
let downPaymentInput = document.getElementById(
  "down-payment-input"
)! as HTMLInputElement;
let carValueSlider = document.getElementById(
  "car-value-slider"
)! as HTMLInputElement;
let downPaymentSlider = document.getElementById(
  "down-payment-slider"
)! as HTMLInputElement;
//Outputs
let totalLeasingCostSpan = document.getElementById(
  "total-leasing-cost"
)! as HTMLSpanElement;
let downPaymentSpan = document.getElementById(
  "down-payment"
)! as HTMLSpanElement;
let monthlyInstallmentSpan = document.getElementById(
  "monthly-installment"
)! as HTMLSpanElement;
let interestRateSpan = document.getElementById(
  "interest-rate"
)! as HTMLSpanElement;

// Listeners
carTypeDropdown.addEventListener("change", (e: any) => {
  selectedCarType = e.target.selectedIndex;
  calculateLeasingDetails();
});

leasePeriodDropdown.addEventListener("change", (e: any) => {
  selectedLeasePeriod = (e.target.selectedIndex + 1) * 12;
  calculateLeasingDetails();
});

carValueInput.addEventListener("input", (e: any) => {
  let inputValue = +e.target.value;
  if (10000 > inputValue || 200000 < inputValue) {
    console.log("invalid input");
    return;
  }
  selectedCarValue = +e.target.value;
  carValueSlider.value = "" + selectedCarValue;
  calculateLeasingDetails();
});

downPaymentInput.addEventListener("input", (e: any) => {
  let inputValue = +e.target.value;
  if (10 > inputValue || 50 < inputValue) {
    console.log("invalid input");
    return;
  }
  selectedDownPayment = +e.target.value;
  downPaymentSlider.value = "" + selectedDownPayment;
  calculateLeasingDetails();
});

carValueSlider.addEventListener("input", (e: any) => {
  selectedCarValue = +e.target.value;
  carValueInput.value = "" + selectedCarValue;
  calculateLeasingDetails();
});

downPaymentSlider.addEventListener("input", (e: any) => {
  selectedDownPayment = +e.target.value;
  downPaymentInput.value = "" + selectedDownPayment;
  calculateLeasingDetails();
});

// Calculate inital details
calculateLeasingDetails();

// Calculations
function calculateLeasingDetails() {
  let downPayment = (selectedDownPayment / 100) * selectedCarValue;
  downPaymentSpan.textContent = downPayment.toFixed(2);

  let annualInterestRate = carTypeInterestRates[selectedCarType] / 100;
  let monthlyInterestRate = annualInterestRate / 12;
  let selectedCarValueWithoutDownPayment = selectedCarValue - downPayment;

  let monthlyInstallment =
    (selectedCarValueWithoutDownPayment *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, selectedLeasePeriod)) /
    (Math.pow(1 + monthlyInterestRate, selectedLeasePeriod) - 1);
  monthlyInstallmentSpan.textContent = monthlyInstallment.toFixed(2);

  let totalLeasingCost = monthlyInstallment * selectedLeasePeriod + downPayment;
  totalLeasingCostSpan.textContent = totalLeasingCost.toFixed(2);

  interestRateSpan.textContent = (annualInterestRate * 100).toFixed(2);
}
