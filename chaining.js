console.log("Today is awesome!")

const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

// First sort the array in descending numeric order using .sort(), then filter out all numbers larger than 19 using .filter(), then transform each number with .map() by multiplying by 1.5 and then subtracting 1. Lastly use .reduce() to reduce the array of numbers to one number by adding all of the array elements together and output the total to the console. 
let computedIntegers = integers.sort((a,b) => {return b - a}).filter(num => {return num <= 19}).map(num => {return (num * 1.5) - 1}).reduce((a,b) => {return a + b})
console.log("computedIntegers: ", computedIntegers)






/* -- First I worked out each function without chainging to make sure my functions worked correctly. -- */
// let filteredIntegers = sortedIntegers.filter(num => {return num <= 19})
// console.log(filteredIntegers)

// let computedIntegers = filteredIntegers.map(num => {return (num * 1.5) - 1})
// console.log(computedIntegers)

// let sumIntegers = computedIntegers.reduce((a,b) => {return a + b})
// console.log("Sum of all: ", sumIntegers)