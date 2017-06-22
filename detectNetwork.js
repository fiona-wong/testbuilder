// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  var prefix = cardNumber.slice(0,2);
  var prefix2 = cardNumber.slice(0,4);
  var length = cardNumber.length;
  if (length === 14 && (prefix === '38' || prefix === '39')) {
  	return "Diner's Club";
  } else if (length === 15 && (prefix === '34' || prefix === '37')) {
  	return "American Express";
  } else if (cardNumber.slice(0,1) === '4' && (length === 13 || length === 16 || length === 19)) {
    return "Visa";
  } else if (length === 16 && (prefix === '51' || prefix === '52' || prefix === '53' || prefix === '54' || prefix === '55')) {
  	return "MasterCard";
  } else if ((length === 16 || length === 19) && (prefix2 === '6011' || Number(cardNumber.slice(0,3)) >= 644 && Number(cardNumber.slice(0,3)) <= 649 || prefix === '65')) {
  	return "Discover";
  } else if ((length >= 12 && length <= 19) && (prefix2 === '5018' || prefix2 === '5020' || prefix2 === '5038' || prefix2 === '6304')) {
  	return "Maestro";
  }
};
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
