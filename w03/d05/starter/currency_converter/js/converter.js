function dollarsToPounds(dollars) {
  var dlr_str = dollars.toString();
  var pnd_str = Math.round((dollars * 1.4915) * 100)/100;
  return "$" + dlr_str + " is £" + pnd_str + ".";
}

function poundsToDollars(pounds) {
  var pnd_str = pounds.toString();
  var dlr_str = Math.round((pounds * 0.6706) * 100)/100;
  return "£" + pnd_str + " is $" + dlr_str + ".";
}

input_cur = prompt("What currency would you like to convert from?");
amount = prompt("What amount of money would you like to convert?");
output_cur = prompt("What currency would you like to convert to?");
function currencyConverter(input_cur, output_cur, amount) {
  if ((input_cur === "USD") && (output_cur === "GBP")) {
    return dollarsToPounds(amount);
  }
  if ((input_cur === "GBP") && (output_cur === "USD")) {
    return poundsToDollars(amount);
  }
}

currencyConverter(input_cur, output_cur, amount);

