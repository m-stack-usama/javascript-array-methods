// creates a new array by removing all the elements for which the callback returns a false value
const numbers = [1, 2, 3, 4, 5];

// Refactored using an inline arrow function (note: this returns odd numbers as per the callback logic)
const oddNumbers = numbers.filter(value => value % 2 !== 0);
console.log(oddNumbers); // output : [ 1, 3, 5 ]
// -------------------------------------------------------

// eg : Filtering an array of people to include only adults (age > 18)
const peoples = [
    {
        name: 'user1',
        age: 20
    },
    {
        name: 'user2',
        age: 10
    },
    {
        name: 'user3',
        age: 5
    },
];

const adults = peoples.filter(person => person.age > 18);
console.log(adults); // output : [ { name: 'user1', age: 20 } ]
// -------------------------------------------------------

// eg : Removing duplicate numbers from an array
const repeatedNumbers = [1, 2, 3, 4, 2, 3, 2, 5, 6, 7, 8, 1, 9, 0, 8];

const uniqueNumbers = repeatedNumbers.filter((value, index, arr) => arr.indexOf(value) === index);
console.log(uniqueNumbers); // output : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ]
// -------------------------------------------------------
