"use strict";
// Runs all scripts connected to UI
createLeasePeriodDropdownOptions();
// Creates options for lease-period-dropdown
function createLeasePeriodDropdownOptions() {
    var leasePeriodDropdown = document.getElementById("lease-period-dropdown");
    var leasePeriodDropdownInnerHTML = "";
    for (var i = 0; i < 5; i++) {
        var optionNumber = (i + 1) * 12;
        leasePeriodDropdownInnerHTML += "<option name=".concat(optionNumber, ">").concat(optionNumber, "</option>\n");
    }
    leasePeriodDropdown.innerHTML = leasePeriodDropdownInnerHTML;
}
