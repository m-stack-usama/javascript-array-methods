// reduce executes a callback function on every element of an array and returns 1 single output value
const numbers = [1, 2, 3, 4, 5];

// Basic example: Summing the numbers using reduce
// const reduceArray = numbers.reduce(callback, initialValue)
// const sum = numbers.reduce(sumArray, 0)
// accumulator / acc will keep track of the value which will be returned at the end, in our case we have initialized it with 0
// function sumArray(acc, value, index, arr) {
//     return acc + value
// }
// console.log(sum) // output : 15
// -------------------------------------------------------

// Example: Checking the largest number in the array
const max = numbers.reduce((acc, value) => (acc > value ? acc : value), -Infinity);
console.log(max); // output: 5
// -------------------------------------------------------

// Example: Finding the total amount / value of our store
const store = [
    {
        name: 'laptop',
        price: 200,
        count: 10
    },
    {
        name: 'Computer',
        price: 500,
        count: 5
    },
    {
        name: 'mobile',
        price: 100,
        count: 15
    },
];

const totalStoreValue = store.reduce((acc, product) => acc + product.price * product.count, 0);
console.log(totalStoreValue); // output: 6000
// -------------------------------------------------------
