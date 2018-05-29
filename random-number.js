// Math.random() returns a random decimal number between 0 and 0.9999999999999999

// random number between 0 and max-1
function randomNumber (max) {
  return Math.floor(Math.random() * max);
}

function coinFlip () {
  // random number between 0 and 1
  if (randomNumber(2) === 1) {
    return "face";
  }
  else {
    return "pile";
  }
}

console.log( coinFlip() );
console.log( coinFlip() );
console.log( coinFlip() );
