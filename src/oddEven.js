function generateNumber() {
  const numberDiv = document.getElementById('number');

  const randomNumber = Math.floor(Math.random() * 100) + 1;

  numberDiv.textContent = randomNumber;

  checkOddEven(randomNumber);
}

function checkOddEven(number) {
  const oddEvenDiv = document.getElementById('odd-even');

  if (number % 2 === 0) {
    oddEvenDiv.textContent = 'Even - The number is even';
  } else {
    oddEvenDiv.textContent = 'Odd - The number is odd';
  }
}

document.getElementById('generate-btn').addEventListener('click', generateNumber);
