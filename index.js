function isPrime(event) {
  event.preventDefault();

  const number = document.getElementById('number').value;
  const result = document.getElementById('result');

  let isPrime = true;

  if (number === '') {
    result.innerHTML = 'Insira um número';
  } else {
    if (number < 2) {
      isPrime = false;
    } else {
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
          isPrime = false;
          break;
        }
      }
    }

    if (isPrime) {
      result.innerHTML = number + ' é um número primo.';
    } else {
      result.innerHTML = number + ' não é um número primo.';
    }
  }
}
