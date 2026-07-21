function isValidLength(str, maxLength) {
  return str.length <= maxLength;
}

function isPalindrome(str) {
  const normalized = str.toLowerCase();
  const reversed = normalized.split('').reverse().join('');
  return normalized === reversed;
}

// Примеры из твоего запроса
console.log(isPalindrome('топот'));   // true
console.log(isPalindrome('ДовОд'));   // true
console.log(isPalindrome('Кекс'));    // false
