"use strict";
var _a;
// Helpers
var carTypes;
(function (carTypes) {
    carTypes[carTypes["BRAND_NEW"] = 0] = "BRAND_NEW";
    carTypes[carTypes["USED"] = 1] = "USED";
})(carTypes || (carTypes = {}));
var carTypeInterestRates = (_a = {},
    _a[carTypes.BRAND_NEW] = 2.99,
    _a[carTypes.USED] = 3.7,
    _a);
// Set default values to variables
var selectedCarType = carTypes.BRAND_NEW;
var selectedLeasePeriod = 12;
var selectedCarValue = Math.pow(10, 5);
var selectedDownPayment = 25;
// Get required objects from DOM
// Inputs
var carTypeDropdown = document.getElementById("car-type-dropdown");
var leasePeriodDropdown = document.getElementById("lease-period-dropdown");
var carValueInput = document.getElementById("car-value-input");
var downPaymentInput = document.getElementById("down-payment-input");
var carValueSlider = document.getElementById("car-value-slider");
var downPaymentSlider = document.getElementById("down-payment-slider");
//Outputs
var totalLeasingCostSpan = document.getElementById("total-leasing-cost");
var downPaymentSpan = document.getElementById("down-payment");
var monthlyInstallmentSpan = document.getElementById("monthly-installment");
var interestRateSpan = document.getElementById("interest-rate");
// Listeners
carTypeDropdown.addEventListener("change", function (e) {
    selectedCarType = e.target.selectedIndex;
    calculateLeasingDetails();
});
leasePeriodDropdown.addEventListener("change", function (e) {
    selectedLeasePeriod = (e.target.selectedIndex + 1) * 12;
    calculateLeasingDetails();
});
carValueInput.addEventListener("input", function (e) {
    var inputValue = +e.target.value;
    if (10000 > inputValue || 200000 < inputValue) {
        console.log("invalid input");
        return;
    }
    selectedCarValue = +e.target.value;
    carValueSlider.value = "" + selectedCarValue;
    calculateLeasingDetails();
});
downPaymentInput.addEventListener("input", function (e) {
    var inputValue = +e.target.value;
    if (10 > inputValue || 50 < inputValue) {
        console.log("invalid input");
        return;
    }
    selectedDownPayment = +e.target.value;
    downPaymentSlider.value = "" + selectedDownPayment;
    calculateLeasingDetails();
});
carValueSlider.addEventListener("input", function (e) {
    selectedCarValue = +e.target.value;
    carValueInput.value = "" + selectedCarValue;
    calculateLeasingDetails();
});
downPaymentSlider.addEventListener("input", function (e) {
    selectedDownPayment = +e.target.value;
    downPaymentInput.value = "" + selectedDownPayment;
    calculateLeasingDetails();
});
// Calculate inital details
calculateLeasingDetails();
// Calculations
function calculateLeasingDetails() {
    var downPayment = (selectedDownPayment / 100) * selectedCarValue;
    downPaymentSpan.textContent = downPayment.toFixed(2);
    var annualInterestRate = carTypeInterestRates[selectedCarType] / 100;
    var monthlyInterestRate = annualInterestRate / 12;
    var selectedCarValueWithoutDownPayment = selectedCarValue - downPayment;
    var monthlyInstallment = (selectedCarValueWithoutDownPayment *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, selectedLeasePeriod)) /
        (Math.pow(1 + monthlyInterestRate, selectedLeasePeriod) - 1);
    monthlyInstallmentSpan.textContent = monthlyInstallment.toFixed(2);
    var totalLeasingCost = monthlyInstallment * selectedLeasePeriod + downPayment;
    totalLeasingCostSpan.textContent = totalLeasingCost.toFixed(2);
    interestRateSpan.textContent = (annualInterestRate * 100).toFixed(2);
}
