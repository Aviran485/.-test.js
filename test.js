//targil 1
console.log("targil 1")

const num = 123;

const result = (num % 2 === 0 && num % 3 === 0 && num % 5 !== 0) ? 3 :
               (num % 2 === 0 && num % 5 === 0 && num % 3 !== 0) ? 2 :
               (num % 3 === 0 && num % 5 === 0 && num % 2 !== 0) ? 1 : 0;

console.log(result);


//targil 2
console.log("targil 2")
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  for (let i = 2; i < 237; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }

//targil 3
console.log("targil 3")
const numbers = [0, 1, 2, 0, 3, 0, 4, 5, 0];

let zerosCount = 0;
for (const num of numbers) {
    zerosCount += (num === 0 ? 1 : 0);
}

console.log(`amount of zeros : ${zerosCount}`);
