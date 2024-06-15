## Car Leasing Calculator
This project is an implementation of car leasing calculator using HTML, CSS and vanilla TS. 

## How to use
To calculate leasing details, simply enter valid informtaion into fields, namely, specify type of car that you want to lease, lease period, car value and down payment and application will automatically calcualte leasing details for you.

## Implementation details
From UI side, project uses HTML and CSS to create an interface, and uses CSS ```@media``` to make it responsive on mobile devises by changing CSS class ```.row``` from ```flex-direction: row``` to ```flex-direction: column```.
From logic side, application hooks event listeners on all inputs and sliders, and, upon change of either of them, changes relevant variable, calculates and displays new leasing information. On incorrect input, application will not recalculate details and will show user a relevant error, which is implemented by changing class to relevant DOM object. Finally, application uses EMI formula to calculate leasing details.