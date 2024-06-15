// Runs all scripts connected to UI
createLeasePeriodDropdownOptions()

// Creates options for lease-period-dropdown
function createLeasePeriodDropdownOptions() {
  const leasePeriodDropdown = document.getElementById("lease-period-dropdown")!;
  let leasePeriodDropdownInnerHTML = "";
  for (let i = 0; i < 5; i++) {
    let optionNumber = (i + 1) * 12;
    leasePeriodDropdownInnerHTML += `<option name=${optionNumber}>${optionNumber}</option>\n`;
  }
  leasePeriodDropdown.innerHTML = leasePeriodDropdownInnerHTML;
}
