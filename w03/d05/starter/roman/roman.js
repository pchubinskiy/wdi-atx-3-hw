function romanize(number){
  //result string to change for output
  var result = "";
  var matches = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
    10: "X",
    20: "XX",
    30: "XXX",
    40: "XL",
    50: "L",
    60: "LX",
    70: "LXX",
    80: "LXXX",
    90: "XC",
    100: "C",
    200: "CC",
    300: "CCC",
    400: "CD",
    500: "D",
    600: "DC",
    700: "DCC",
    800: "DCCC",
    900: "CM",
    1000: "M",
    2000: "MM",
    3000: "MMM"
    //anything above 3k requires special characters
  };

  //convert number to string; check length
  var num_string = number.toString();
  var num_length = number.toString().length;

  function onesNumeral(ind) {
    switch (num_string.charAt(ind)) {
        case "1":
          result += matches[1]; break;
        case "2":
          result += matches[2]; break;
        case "3":
          result += matches[3]; break;
        case "4":
          result += matches[4]; break;
        case "5":
          result += matches[5]; break;
        case "6":
          result += matches[6]; break;
        case "7":
          result += matches[7]; break;
        case "8":
          result += matches[8]; break;
        case "9":
          result += matches[9]; break;
        default:
          result += "";
      }
  }
  function tensNumeral(ind) {
    switch (num_string.charAt(ind)) {
        case "1":
          result += matches[10]; break;
        case "2":
          result += matches[20]; break;
        case "3":
          result += matches[30]; break;
        case "4":
          result += matches[40]; break;
        case "5":
          result += matches[50]; break;
        case "6":
          result += matches[60]; break;
        case "7":
          result += matches[70]; break;
        case "8":
          result += matches[80]; break;
        case "9":
          result += matches[90]; break;
        default:
          result += "";
      }
  }
  function hundredsNumeral(ind) {
    switch (num_string.charAt(ind)) {
        case "1":
          result += matches[100]; break;
        case "2":
          result += matches[200]; break;
        case "3":
          result += matches[300]; break;
        case "4":
          result += matches[400]; break;
        case "5":
          result += matches[500]; break;
        case "6":
          result += matches[600]; break;
        case "7":
          result += matches[700]; break;
        case "8":
          result += matches[800]; break;
        case "9":
          result += matches[900]; break;
        default:
          result += "";
      }
  }
  function thousandsNumeral(ind) {
    switch (num_string.charAt(ind)) {
        case "1":
          result += matches[1000]; break;
        case "2":
          result += matches[2000]; break;
        case "3":
          result += matches[3000]; break;
        default:
          result += "";
      }
  }

  //based on number length, convert to numeral from leftmost digit to rightmost digit
  if (num_length === 1) {
    onesNumeral(0);
  }
  if (num_length === 2) {
    tensNumeral(0);
    onesNumeral(1);
  }
  if (num_length === 3) {
    hundredsNumeral(0);
    tensNumeral(1);
    onesNumeral(2);
  }
  if (num_length === 4) {
    thousandsNumeral(0);
    hundredsNumeral(1);
    tensNumeral(2);
    onesNumeral(3);
  }
  return result;
}

romanize(2016);
