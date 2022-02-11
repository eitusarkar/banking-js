 // handle deposit button event
 document.getElementById('login-submit').addEventListener('click', function () {
    // get the deposit value
    const depositField = document.getElementById('deposit-amount');
    const userDeposit = depositField.value;

    const depositTotal = document.getElementById('input-value');
    const previousDepositAmount = depositTotal.innerText;
    console.log(userDeposit, previousDepositAmount);
    const newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(userDeposit);

    depositTotal.innerText = newDepositTotal;
    // update balance
    document.getElementById('balance-value').innerText = newDepositTotal;
    // clear the deposit value
    depositField.value = '';
})
// handle withdraw button event
document.getElementById('withdraw-submit').addEventListener('click', function(){
    // get the withdraw value
    const withdrawField = document.getElementById('withdraw-amount');
    const userWithdraw = withdrawField.value;
    const withdrawTotal = document.getElementById('output-value');
    const previousWithdrawAmount = withdrawTotal.innerText;
    console.log(userWithdraw, previousWithdrawAmount);
    const newWithdrawTotal = parseFloat(previousWithdrawAmount) + parseFloat(userWithdraw);
    withdrawTotal.innerText = newWithdrawTotal;
    // update balance

 const newBalance = document.getElementById('balance-value');
 const updateBalance = newBalance.innerText;
 const newBalanceTotal = parseFloat(updateBalance) - parseFloat(newWithdrawTotal);
 newBalance.innerText = newBalanceTotal;
    // clear the deposit value
    withdrawField.value = '';
})