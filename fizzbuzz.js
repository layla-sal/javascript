var a = 30
const b = 3
const c = 5
const d = 15
function fizzBuzz(a, b, c, d) {
  if (Number.isInteger (a / d)) {
  return 'FizzBuzz';
}
else if (Number.isInteger (a / c)) {
  return 'Buzz';
}
else if (Number.isInteger (a / b)) {return 'Fizz';
}
else {return a}
}
console.log(fizzBuzz(a, b, c, d));