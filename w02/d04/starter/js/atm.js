//Begin with the document ready function
$(document).ready(function() {

var balance = $('#checkingBalance'),
    amount = $('#amountChecking'),
    deposit = $('#depositChecking');
    withdraw = $('#withdrawChecking');

    bal_text = [["$"], [0]];

deposit.click(function() {
  amount_int = parseInt(amount.val());
  bal_text[1] = parseInt(bal_text[1]) + amount_int;
  new_bal = bal_text[0] + bal_text[1];

  if (amount_int === NaN) {
    return false;
  }

  balance.text(new_bal);
});

withdraw.click(function() {
  if ((amount_int === NaN) || (amount_int > bal_text[1])) {
    return false;
  } else {
  amount_int = parseInt(amount.val());
  bal_text[1] = parseInt(bal_text[1]) - amount_int;
  new_bal = bal_text[0] + bal_text[1];

  balance.text(new_bal);
  }
});


var balance2 = $('#savingsBalance'),
    amount2 = $('#amountSavings'),
    deposit2 = $('#depositSavings');
    withdraw2 = $('#withdrawSavings');

    bal_text2 = [["$"], [0]];

deposit2.click(function() {
  amount_int = parseInt(amount2.val());
  bal_text2[1] = parseInt(bal_text2[1]) + amount_int;
  new_bal = bal_text2[0] + bal_text2[1];

  if (amount_int === NaN) {
    return false;
  }

  balance2.text(new_bal);
});

withdraw2.click(function() {
  if ((amount_int === NaN) || (amount_int > bal_text2[1])) {
    return false;
  } else {
  amount_int = parseInt(amount2.val());
  bal_text2[1] = parseInt(bal_text2[1]) - amount_int;
  new_bal = bal_text2[0] + bal_text2[1];

  balance2.text(new_bal);
  }
});

});

// if (amount_int < (bal_text[1] + bal_text2[1])) {
//       difference = bal_text[1] - amount_int;
//       balance.text(new_bal);
//       balance2.text(bal_text2[1] - difference);
//       console.log(difference, (bal_text2[1] - difference));
//     }

	//Begin work on the Checking Account

		//Checking account deposit function

			//Get value from the amountChecking input field

			//On click of the depositChecking button

				//Take that value and add it to the existing value in the checkingBalance div

		//Checking account withdrawl funtion

			//Get value from the amountChecking input field

			//On click of the withdrawChecking button

				// If that value is greater than the value in the account ignore that action
				// In other words if this would put the account into a negative balance do not allow it

				//Else subtract that value from the current amount in the checking account

	//Begin work on the Savings account

		//Savings account deposit function

		 		//Get value from the amountSavings input field

		 		//On click of the depositSavings button

		 			//Take that value and add it to the existing value in the savingsBalance div

		//Savings account withdraw funtion

		 		//Get value from the amountSavings input field

		 		//On click of the withdrawl button

		 			//If that value is greater than the value in the account ignore that action
		 			//In other words if this would put the account into a negative balance do not allow it

		 			//Else subtract that value from the current amount in the savings account



// Bonus-- get the two accounts to work with each other and allow for overdraft protection

// Double Bonus-- This isnt very DRY.  Using the keyword "this" see if you can make the withdraw and deposit functions work for both accounts

