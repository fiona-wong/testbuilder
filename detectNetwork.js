// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  var prefix = cardNumber.slice(0,2);
  var prefix1 = cardNumber.slice(0,1);
  var prefix2 = cardNumber.slice(0,4);
  var prefix3 = cardNumber.slice(0,3);
  var prefix6 = cardNumber.slice(0,6);

  var length = cardNumber.length;
  if (length === 14 && (prefix === '38' || prefix === '39')) {
  	return "Diner's Club";
  } else if (length === 15 && (prefix === '34' || prefix === '37')) {
  	return "American Express";
  } else if ((length === 16 || length === 18 || length === 19) && (prefix2 === '4903' || prefix2 === '4905' || prefix2 === '4911' || prefix2 === '4936' || prefix2 === '6333' || prefix2 === '6759' || prefix6 === '564182' || prefix6 === '633110')) {
  	return "Switch";
  } else if (prefix1 === '4' && (length === 13 || length === 16 || length === 19)) {
    return "Visa";
  } else if (length === 16 && (prefix === '51' || prefix === '52' || prefix === '53' || prefix === '54' || prefix === '55')) {
  	return "MasterCard";
  } else if ((length === 16 || length === 19) && (prefix2 === '6011' || (Number(prefix3) >= 644 && Number(prefix3) <= 649) || prefix === '65')) {
  	return "Discover";
  } else if ((length >= 12 && length <= 19) && (prefix2 === '5018' || prefix2 === '5020' || prefix2 === '5038' || prefix2 === '6304')) {
  	return "Maestro";
  } else if ((length >= 16 && length <= 19) && (Number(prefix6) >= 622126 && Number(prefix6) <= 622925) || (Number(prefix3) >= 624 && Number(prefix3) <= 626) || (Number(prefix2) >= 6282 && Number(prefix2) <= 6288)) {
  	return "China UnionPay";
  }
};
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
