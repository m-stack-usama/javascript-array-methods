// map executes a given function on every element of the array and returns a new array ( does not changes the original array)
const numbers = [1, 2, 3, 4, 5];

const doubleNumbers = numbers.map(value => value * 2); // expcects a callback function with max 3 parameters
console.log(doubleNumbers); // output : [ 2, 4, 6, 8, 10 ]
// -------------------------------------------------------

// Alternative approach for multiplying each number by its index
const multiplied = numbers.map((value, index) => value * index);
console.log(multiplied); // output : [ 0, 2, 6, 12, 20 ]
// -------------------------------------------------------

const products = [
    {
        name: 'laptop',
        price: 200, // refactored: converted from string to number for arithmetic operations
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

// Original approach using a helper function (commented out)
// const productsTotalPrice = products.map(calculatePrices)
// function calculatePrices(item) {
//     return item.price * item.count
// }
// console.log(productsTotalPrice)
// -------------------------------------------------------

// using arrow function
const productsTotalPrice = products.map(item => ({
    itemName: item.name,
    itemPrice: item.price * item.count
}));
console.log(productsTotalPrice);

// output : 
// [
//     { itemName: 'laptop', itemPrice: 2000 },
//     { itemName: 'Computer', itemPrice: 2500 },
//     { itemName: 'mobile', itemPrice: 1500 }
// ]
// -------------------------------------------------------