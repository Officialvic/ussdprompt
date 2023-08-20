// Collect name and code and show welcome message
let name = prompt(`Please Enter your first name`)
let code = prompt(`Enter Polaris USSD Code`)
switch (code) {
    case '*833#':
        alert(`Welcome ${name}! Click 'Ok' to continue.`);
    break;
    default:
        alert(`Please enter the correct USSD Code`)
}

// Display options for navigation
let option = +prompt(`Kindly select your preferred option \n
1. Check account balance
2. Airtime Purchase
3. Transfer`)

const balance = '\u20A6' + 450000;

if (option == 1) {
    let account = prompt(`Enter your account number`)
    alert(`Your account balance is ${balance}`);
} else if(option == 2 ) {
    let toWho = +prompt(`Select Airtime Top Up choice
    1. Self
    2. Others`)
    switch(toWho) {
        case 1:
            let amount = prompt(`Enter the amount to top up`);
        break;
        case 2:
            let otherNumber = prompt(`Enter the beneficiary number`);
        break;
        default:
            alert(`Enter the available option`);
    }
    switch(toWho) {
        case 1:
            
    }
}