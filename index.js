
// Завдання 1
function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}

// Завдання 2
function calculateEngravingPrice(message, pricePerWord) {
  const words = message.split(' ');
  return words.length * pricePerWord;
}

// Завдання 3
function findLongestWord(string) {
  const words = string.split(' ');
  let longestWord = '';
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

// Завдання 4
function formatString(string) {
  if (string.length <= 40) {
    return string;
  } else {
    return string.slice(0, 40) + '...';
  }
}

// Завдання 5
function checkForSpam(message) {
  const lowerCaseMessage = message.toLowerCase();
  return lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale');
}

// Завдання 6
let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt('Введіть число');
  
  if (input === null) {
    break;
  }
  
  input = Number(input);
  
  if (isNaN(input)) {
    alert('Було введено не число, попробуйте ще раз');
    continue;
  }
  
  numbers.push(input);
}

if (numbers.length > 0) {
  for (const number of numbers) {
    total += number;
  }
  console.log(`Загальна сума чисел дорівнює ${total}`);
}
