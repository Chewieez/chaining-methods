console.log("Today is awesome!")

const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

let sortedIntegers = integers.sort((a,b) => {return b - a})

let filteredIntegers = sortedIntegers.filter(num => {return num <= 19})
console.log(filteredIntegers)

let computedIntegers = filteredIntegers.map(num => {return (num * 1.5) - 1})
console.log(computedIntegers)

let sumIntegers = computedIntegers.reduce((a,b) => {return a + b})
console.log("Sum of all: ", sumIntegers)