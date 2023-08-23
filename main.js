// Collect name and code and show welcome message
const name = prompt(`Please Enter your first name`)
let code;
do {
    code = prompt(`Enter Polaris USSD Code`)
}while(code !== "*833#")

if ( code == "*833#") {
        alert(`Welcome ${name}! Click 'Ok' to continue.`);
        // Display options for navigation
        let option = +prompt(`Kindly select your preferred option \n
        1. Check account balance
        2. Airtime Purchase
        3. Transfer`)
    
        const balance = 45000;
        let amount;
        let pin;
        let newBalance; 
        if (option == 1) {
            let account = prompt(`Enter your account number`)
            alert(`Your account balance is ${balance}`);
        } else if(option == 2 ) {
            let toWho = +prompt(`Select Airtime Top Up choice
            1. Self
            2. Others`)
            switch(toWho) {
                case 1:
                    amount = +prompt(`Enter the amount to top up`);
                    pin = +prompt(`Enter your pin`)
                    newBalance = balance - amount;
                    switch(pin){
                        case 1234:
                            alert(`Recharge Sucessful!!! Your new account balance =  ${currency}${newBalance}`);
                        break;
                        default:
                            alert(`Enter the correct pin`);
                    }
                break;
                case 2:
                    let otherNumber = prompt(`Enter the beneficiary number`);
                    amount = +prompt(`Enter the amount to top up`);
                    pin = +prompt(`Enter your pin`)
                    newBalance = balance - amount;
                    // amount = +prompt(`Enter the amount to top up`);
                    // pin = +prompt(`Enter your pin`)
                    // newbalance = balance - amount;
                    switch(pin){
                        case 1234:
                            alert(`Recharge Sucessful!!! Your new account balance = ${newBalance}`);
                        break;
                        default:
                            alert(`Enter the correct pin`);
                    }
                break;
                default:
                    alert(`Enter the available option`);
            }
        }
}else {
    alert(`Please enter the correct ussd code`)
}

// let another = +prompt(`Do you want to perform another transaction?
// 1. Yes
// 2. No`)
// if(another == 1) {
//     do {
//         option = option;
//     } while(option)
// }else{
//     alert(`Click Ok to exit`)
// }
