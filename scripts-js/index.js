"use strict";
// Generate options for lease-period-dropdown
const leasePeriodDropdown = document.getElementById("lease-period-dropdown");
let leasePeriodDropdownInnerHTML = "";
for (let i = 0; i < 5; i++) {
    let optionNumber = (i + 1) * 12;
    leasePeriodDropdownInnerHTML += `<option name=${optionNumber}>${optionNumber}</option>\n`;
}
leasePeriodDropdown.innerHTML = leasePeriodDropdownInnerHTML;
