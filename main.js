function polarisUSSD () {
    // Collect name and code and show welcome message
    const name = prompt(`Please Enter your first name`)
    let code;
    do {
        code = prompt(`Enter Polaris USSD Code`)
    }while(code !== "*833#")
    
    alert(`Welcome ${name}! Click 'Ok' to continue.`);
    // Display options for navigation
    const balance = 450000;
    let amount;
    let pin;
    let newBalance;
    let currency = '\u20A6';
    let USSDTransaction = () => {
        let option = +prompt(`Kindly select your preferred option \n
        1. Check account balance
        2. Airtime Purchase
        3. Transfer`)    
        if (option == 1) {
            let account = prompt(`Enter your account number`);
            alert(`Your account balance is ${currency}${balance}`);
            another()
        } else if(option == 2 ) {
            let airtime = () => {
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
                                alert(`Recharge Sucessful!!! Your new account balance is  ${currency}${newBalance}`);
                                another()
                            break;
                            default:
                                alert(`Enter the correct pin`);
                                airtime();
                        }
                    break;
                    case 2:
                        let otherNumber = prompt(`Enter the beneficiary number`);
                        amount = +prompt(`Enter the amount to top up`);
                        pin = +prompt(`Enter your pin`)
                        newBalance = balance - amount;
                        switch(pin){
                            case 1234:
                                alert(`Recharge Sucessful!!! Your new account balance is ${currency}${newBalance}`);
                                another()
                            break;
                            default:
                                alert(`Enter the correct pin`);
                                airtime();
                        }
                    break;
                    default:
                        alert(`Enter the available option`);
                        airtime();
                }
            }
            airtime();
        } else if(option == 3) {
            let transfer = () => {
                let toWho = +prompt(`Select Transfer Beneficiary
                1. Polaris Bank
                2. Others`)
                switch(toWho) {
                    case 1:
                        account = prompt(`Enter the account number`);
                        amount = +prompt(`Enter the amount to transfer`);
                        pin = +prompt(`Enter your pin`)
                        newBalance = balance - amount;
                        switch(pin){
                            case 1234:
                                alert(`Transfer Sucessful!!! Your new account balance is  ${currency}${newBalance}`);
                                another()
                            break;
                            default:
                                alert(`Enter the correct pin`);
                                transfer();
                        }
                    break;
                    case 2:
                        bank = prompt(`Enter bank name`);
                        account = prompt(`Enter the account number`);
                        pin = +prompt(`Enter your pin`)
                        newBalance = balance - amount;
                        switch(pin){
                            case 1234:
                                alert(`Transfer Sucessful!!! Your new account balance is ${currency}${newBalance}`);
                                another()
                            break;
                            default:
                                alert(`Enter the correct pin`);
                                transfer();
                        }
                    break;
                    default:
                        alert(`Enter the available option`);
                        transfer();
                }
            }
            transfer();
        }else {
            alert(`Kindly enter the available option`)
            USSDTransaction();
        }
    }
    USSDTransaction();
    
    
    function another() {
         let anotherOption = +prompt(`Do you want to perform another transaction?
        1. Yes
        2. No`)
        if(anotherOption == 1) {
            USSDTransaction();
        }else{
            alert(`Thank you for banking with us. Click Ok to exit`)
        }
    }
}